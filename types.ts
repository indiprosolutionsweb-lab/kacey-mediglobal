
export interface ProductNode {
  id: string;
  name: string;
  description?: string;
  features?: string[];
  imagePlaceholder?: string;
  children?: ProductNode[];
  isCategory?: boolean;
}

export interface ServiceValue {
  title: string;
  description: string;
  iconName: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  fullContent: string;
  category: string;
  image: string;
}
