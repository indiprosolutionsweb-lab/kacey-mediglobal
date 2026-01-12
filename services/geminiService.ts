import { GoogleGenAI } from "@google/genai";
import { PRODUCTS, COMPANY_INFO } from '../constants';
import { ProductNode, ChatMessage } from '../types';

// Initialize the Gemini API client using the API key from environment variables
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

// Helper to flatten the hierarchical product data into text for the AI
const flattenProductsForContext = (nodes: ProductNode[], depth = 0): string => {
  let context = '';
  const indent = '  '.repeat(depth);
  
  for (const node of nodes) {
    context += `${indent}- [${node.id}] ${node.name}`;
    if (node.description) context += `: ${node.description}`;
    context += '\n';
    
    if (node.features && node.features.length > 0) {
      context += `${indent}  Features: ${node.features.join(', ')}\n`;
    }
    
    if (node.children) {
      context += flattenProductsForContext(node.children, depth + 1);
    }
  }
  return context;
};

export const generateChatResponse = async (userMessage: string, history: ChatMessage[] = []): Promise<string> => {
  if (!process.env.API_KEY) {
    return "I'm sorry, the AI assistant is currently offline. Please contact us directly via phone or email.";
  }

  try {
    const productContext = flattenProductsForContext(PRODUCTS);

    const systemInstruction = `
      You are a helpful and professional Medical Sales Assistant for ${COMPANY_INFO.name}.
      Your goal is to assist potential clients, doctors, and distributors with information about our medical products.
      
      Company Bio: A dedicated small company based in Mumbai providing high-quality medical equipment with personal commitment.
      Company Location: ${COMPANY_INFO.location}
      Contact: ${COMPANY_INFO.email}, ${COMPANY_INFO.phone}
      
      Product Catalog:
      ${productContext}
      
      Guidelines:
      1. Be helpful and professional, but approachable (not overly corporate).
      2. If asked about prices, ask them to contact the sales team at ${COMPANY_INFO.phone} for a personalized quote.
      3. If asked about medical advice, strictly state you are an assistant for product info only and they should consult a qualified surgeon.
      4. Use provided product details for technical questions.
      5. If we don't carry a specific item, offer to check with our sourcing team.
    `;

    // Convert history to Gemini format
    const chatHistory = history.map(msg => ({
      role: msg.role === 'model' ? 'model' : 'user',
      parts: [{ text: msg.text }]
    }));

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        ...chatHistory,
        { role: 'user', parts: [{ text: userMessage }] }
      ],
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      }
    });

    return response.text || "I apologize, I couldn't generate a response. Please try calling us.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to my knowledge base. Please try again or reach out to us at " + COMPANY_INFO.phone;
  }
};