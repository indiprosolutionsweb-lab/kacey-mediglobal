
import { ProductNode, ServiceValue, BlogPost } from './types';

export const COMPANY_INFO = {
  name: "Kacey Mediglobal (OPC) Pvt. Ltd.",
  founded: 2020,
  location: "Mumbai, India",
  tagline: "Together We Serve",
  email: "kaceymediglobal@gmail.com",
  phone: "+91 9920041061",
  phone2: "+91 9833476159",
  address: "B20, Devprayag CHSL, Bhakti Mandir Road, Opp. Thanawala Garage, Panchpakhadi, Thane (W) - 400 602, Maharashtra, India.",
  logoUrl: "https://raw.githubusercontent.com/indiprosolutionsweb-lab/Kacey-mediglobal-assets/e1e74312fe518e8e94bc9b0d0f245847cbb1babb/Kacey%20mediglobal%20logo.jpg"
};

export const CORE_VALUES: ServiceValue[] = [
  {
    title: "Integrity",
    description: "Upholding honesty and strong moral principles in every transaction.",
    iconName: "ShieldCheck"
  },
  {
    title: "Professionalism",
    description: "Maintaining the highest standards of competence and conduct.",
    iconName: "Briefcase"
  },
  {
    title: "Ethics",
    description: "Adhering to strict medical and business ethical guidelines.",
    iconName: "Scale"
  },
  {
    title: "Trust",
    description: "Building lasting relationships through reliability and transparency.",
    iconName: "Handshake"
  },
  {
    title: "Quality Service",
    description: "Delivering excellence in product sourcing and logistics.",
    iconName: "Award"
  },
  {
    title: "Customer Satisfaction",
    description: "Ensuring our partners and end-users are fully supported.",
    iconName: "Smile"
  }
];

export const PRODUCTS: ProductNode[] = [
  {
    id: "A",
    name: "Arthroplasty Products",
    description: "Complete range of orthopedic implants and instrumentation for Knee and Hip.",
    isCategory: true,
    imagePlaceholder: "https://raw.githubusercontent.com/indiprosolutionsweb-lab/Kacey-mediglobal-assets/2a2c319daf6698a3e600b6b1a37407054510b066/arthroplasty%20products.png",
    children: [
      {
        id: "A1",
        name: "Primary Knee",
        isCategory: true,
        description: "Primary Knee Arthroplasty Solutions",
        children: [
          {
            id: "A1.1",
            name: "Genius PS/CR",
            description: "Genius Total Knee System. No. 1 Hiflex Knee System, accommodating safe flexion up to 155°.",
            features: [
              "Single radius geometry helps balance the ligament isometry throughout the range of motion.",
              "Highly polished tibial surface with proven dovetail locking mechanism for minimum backside wear.",
              "Available in 8 sizes of femoral and 7 sizes of Tibial.",
              "High compatibility, customized implant for each patient."
            ],
            imagePlaceholder: "https://raw.githubusercontent.com/indiprosolutionsweb-lab/Kacey-mediglobal-assets/ce2a5d39a4b1c352a552ed52ce48fa628ed2a644/Genius%20PS%3ACR.jpg"
          },
          {
            id: "A1.2",
            name: "Genuin",
            description: "No. 1 Hiflex Knee System, accommodating safe flexion up to 155°.",
            features: [
              "Single radius geometry helps balance ligament isometry.",
              "Highly polished tibial surface with dovetail locking mechanism.",
              "Available in 8 femoral sizes and 7 tibial sizes."
            ],
            imagePlaceholder: "https://raw.githubusercontent.com/indiprosolutionsweb-lab/Kacey-mediglobal-assets/ce2a5d39a4b1c352a552ed52ce48fa628ed2a644/Genuin.jpg"
          },
          {
            id: "A1.3",
            name: "Ouro Golden Knee System",
            description: "No. 1 HI-flex Knee System with TiNbN coating from DOT Germany.",
            features: [
              "TiNbN coating makes the implant highly durable and non-allergic.",
              "Ideal for highly active lifestyle patients.",
              "Prevents metallosis for patients allergic to metal.",
              "Available in 8 Femoral and 7 Tibial sizes."
            ],
            imagePlaceholder: "https://raw.githubusercontent.com/indiprosolutionsweb-lab/Kacey-mediglobal-assets/ce2a5d39a4b1c352a552ed52ce48fa628ed2a644/Oura%20golden%20knee%20system.jpg"
          },
          {
            id: "A1.4",
            name: "Excel MPK",
            description: "Kinematics Redefined. Medial Pivot implants designed to restore physiological kinematics.",
            features: [
              "Confines rollback and avoids paradoxical motion of femoral condyles.",
              "Anatomic Insert Designed To Promote Medial Stability And Lateral Mobility.",
              "Keel designed for maximum rotational stability.",
              "Allows 15° of natural rotation for deep flexion.",
              "Does not require a large intercondylar resection."
            ],
            imagePlaceholder: "https://raw.githubusercontent.com/indiprosolutionsweb-lab/Kacey-mediglobal-assets/ce2a5d39a4b1c352a552ed52ce48fa628ed2a644/Excel%20MPK.jpg"
          },
          {
            id: "A1.5",
            name: "Ouro Excel MPK",
            description: "Ouro Excel Medial Pivot Knee delivering natural feel with Swiss precision.",
            features: [
              "Gold Coating (TiNbN) for improved biocompatibility and allergy protection.",
              "Vitamin E Poly (Vit E Poly) for higher oxidative resistance.",
              "Designed to restore natural knee kinematics.",
              "Reduces risk of wear debris-related complications."
            ],
            imagePlaceholder: "https://raw.githubusercontent.com/indiprosolutionsweb-lab/Kacey-mediglobal-assets/ce2a5d39a4b1c352a552ed52ce48fa628ed2a644/Oura%20Excel%20MPK.jpg"
          }
        ]
      },
      {
        id: "A2",
        name: "Revision Knee",
        isCategory: true,
        description: "Evolving the State of Revision Knee Arthroplasty",
        children: [
          {
            id: "A2.1",
            name: "Genius Evocon",
            description: "Comprehensive revision knee system with smallest box in its category.",
            features: [
              "Progressive constrained box allows 3-degree internal/external rotation.",
              "Cam and post designed to work as a third condylar surface.",
              "Robust locking mechanisms for femoral, tibial rod, and insert.",
              "Accepts femoral/tibial cones and sleeves for bone defects."
            ],
            imagePlaceholder: "https://raw.githubusercontent.com/indiprosolutionsweb-lab/Kacey-mediglobal-assets/ce2a5d39a4b1c352a552ed52ce48fa628ed2a644/Genius%20Evocon.jpg"
          },
          {
            id: "A2.2",
            name: "Genius Rotacon",
            description: "Rotating Constrained System with non-weight-bearing hinge.",
            features: [
              "Only system to accommodate femoral augment in the hinge knee.",
              "Non-weight-bearing hinge balances knee in absence of collateral ligaments.",
              "Smallest box in the industry.",
              "Accepts femoral/tibial cones and sleeves."
            ],
            imagePlaceholder: "https://raw.githubusercontent.com/indiprosolutionsweb-lab/Kacey-mediglobal-assets/ce2a5d39a4b1c352a552ed52ce48fa628ed2a644/Genius%20Rotacon.jpg"
          },
          {
            id: "A2.3",
            name: "Genius Cones & Sleeves",
            description: "Designed for smallest to larger anatomy to address bone defects.",
            features: [
              "3D lattice porous trabecular structure promotes bone ingrowth.",
              "Tapered for secure fit and effectively addresses bone defects.",
              "Withstands stresses while maintaining structural integrity.",
              "Promotes biological osseointegration."
            ],
            imagePlaceholder: "https://raw.githubusercontent.com/indiprosolutionsweb-lab/Kacey-mediglobal-assets/ce2a5d39a4b1c352a552ed52ce48fa628ed2a644/Genius%20cones%20and%20sleeves.jpg"
          }
        ]
      },
      {
        id: "A3",
        name: "Primary Hip",
        isCategory: true,
        description: "Primary Hip Arthroplasty Solutions",
        children: [
          {
            id: "A3.1",
            name: "Signature Uncemented Hip System",
            description: "Double-tapered stem design with HA Coating and Compaction broach-only technique.",
            features: [
              "Engineered for reproducible outcomes and biomechanical joint restoration.",
              "XLPE Liner available in 20° and neutral versions.",
              "Ceramic Head imported from Ceramtec, Germany."
            ],
            imagePlaceholder: "https://raw.githubusercontent.com/indiprosolutionsweb-lab/Kacey-mediglobal-assets/ce2a5d39a4b1c352a552ed52ce48fa628ed2a644/Signature%20uncemented%20hip%20system.jpg"
          },
          {
            id: "A3.2",
            name: "Avatar NX",
            description: "Designed to accurately restore joint biomechanics and address bone conservation.",
            features: [],
            imagePlaceholder: "https://raw.githubusercontent.com/indiprosolutionsweb-lab/Kacey-mediglobal-assets/ce2a5d39a4b1c352a552ed52ce48fa628ed2a644/Avatar%20NX.jpg"
          },
          {
            id: "A3.3",
            name: "Signature Duo",
            description: "Dual mobility system designed to decrease risk of dislocation.",
            features: [
              "Reduced risk of dislocation.",
              "Higher range of motion.",
              "Reduced wear rate.",
              "Prominent solution for primary and revision THA."
            ],
            imagePlaceholder: "https://raw.githubusercontent.com/indiprosolutionsweb-lab/Kacey-mediglobal-assets/ce2a5d39a4b1c352a552ed52ce48fa628ed2a644/Signature%20Duo.jpg"
          },
          {
            id: "A3.4",
            name: "Signature NX",
            description: "Next Generation Acetabular Cup using 3D Printing and Additive Manufacturing.",
            features: [
              "65-70% porosity with interconnected pores.",
              "650 μm pore size for bone ingrowth.",
              "Improved Osseointegration and Higher Coefficient of friction.",
              "Available in Cluster Hole and Multi Hole options."
            ],
            imagePlaceholder: "https://raw.githubusercontent.com/indiprosolutionsweb-lab/Kacey-mediglobal-assets/ce2a5d39a4b1c352a552ed52ce48fa628ed2a644/Signature%20NX.jpg"
          }
        ]
      },
      {
        id: "A4",
        name: "Revision Hip",
        isCategory: true,
        description: "Revision Hip Arthroplasty Solutions",
        children: [
          {
            id: "A4.1",
            name: "Signature LRS Stem",
            description: "Clinically proven design with over 30 years of experience for Revision Hip Arthroplasty.",
            features: [
              "Proven grit blasted surface and titanium alloy.",
              "2° tapered Conical implant body with eight longitudinal ribs.",
              "Offers rotational stability and free setting of anteversion.",
              "Wider range of diameter and length options."
            ],
            imagePlaceholder: "https://raw.githubusercontent.com/indiprosolutionsweb-lab/Kacey-mediglobal-assets/ce2a5d39a4b1c352a552ed52ce48fa628ed2a644/Signature%20LRS%20Stem.jpg"
          },
          {
            id: "A4.2",
            name: "Signature LRS Agluna",
            description: "World’s first Revision Stem enhanced with Active Silver Ion Technology.",
            features: [
              "Silver acts as an antimicrobial agent for effective infection control.",
              "Broad-Spectrum action and Durable Protection.",
              "Clinically proven design (over 30 years).",
              "2° tapered Conical implant body with eight longitudinal ribs."
            ],
            imagePlaceholder: "https://raw.githubusercontent.com/indiprosolutionsweb-lab/Kacey-mediglobal-assets/ce2a5d39a4b1c352a552ed52ce48fa628ed2a644/Signature%20LRS%20Agluna.jpg"
          }
        ]
      }
    ]
  },
  {
    id: "B",
    name: "Arthroscopy Implants",
    description: "Minimally invasive surgical solutions including secure fixation and optimal repair instruments.",
    isCategory: true,
    imagePlaceholder: "https://raw.githubusercontent.com/indiprosolutionsweb-lab/Kacey-mediglobal-assets/2a2c319daf6698a3e600b6b1a37407054510b066/Arthroscopy%20implants.png",
    children: [
      {
        id: "B1",
        name: "Knee Portfolio",
        description: "Implants for ACL/PCL Surgery and Meniscus Repair.",
        features: [
          "Grapnel Unity",
          "Ligazip B",
          "Ligazip T",
          "Ligazip P",
          "Meniscus Repair Menizip"
        ],
        imagePlaceholder: "https://raw.githubusercontent.com/indiprosolutionsweb-lab/Kacey-mediglobal-assets/f3fc60a8cd41154e1c25db1f371c3146b1ccaf45/Knee%20portfolio.jpg"
      },
      {
        id: "B2",
        name: "Shoulder Portfolio",
        description: "Solutions for Rotator cuff repair.",
        features: [
          "Deepfix",
          "Tenemorf RC",
          "Cortizip"
        ],
        imagePlaceholder: "https://raw.githubusercontent.com/indiprosolutionsweb-lab/Kacey-mediglobal-assets/f3fc60a8cd41154e1c25db1f371c3146b1ccaf45/Shoulder%20portfolio.jpg"
      },
      {
        id: "B3",
        name: "Bankart Repair",
        description: "Specialized implants for Bankart Repair.",
        features: [
          "Tenemorf",
          "Perizip"
        ],
        imagePlaceholder: "https://raw.githubusercontent.com/indiprosolutionsweb-lab/Kacey-mediglobal-assets/f3fc60a8cd41154e1c25db1f371c3146b1ccaf45/Bankart%20portfolio.jpg"
      }
    ]
  },
  {
    id: "C",
    name: "Trauma Implants",
    description: "Comprehensive range of trauma fixation systems available in Titanium and SS.",
    isCategory: true,
    imagePlaceholder: "https://raw.githubusercontent.com/indiprosolutionsweb-lab/Kacey-mediglobal-assets/ce2a5d39a4b1c352a552ed52ce48fa628ed2a644/Trauma%20Implants%20(available%20in%20titanium).jpg",
    children: [
      {
        id: "C1",
        name: "Trauma Implants (Titanium and SS)",
        isCategory: true,
        description: "High-quality fixation systems available in both Titanium and Stainless Steel.",
        imagePlaceholder: "https://raw.githubusercontent.com/indiprosolutionsweb-lab/Kacey-mediglobal-assets/ce2a5d39a4b1c352a552ed52ce48fa628ed2a644/Trauma%20Implants%20(available%20in%20titanium).jpg",
        children: [
          {
            id: "C1.1",
            name: "Bone Plates",
            description: "Wide range of compression and locking plates.",
            features: [
              "Dynamic Compression Plates (DCP)",
              "Limited Contact Dynamic Compression Plates (LC-DCP)",
              "Locking Compression Plates (LCP)",
              "Reconstruction Plates",
              "T– Plates / L–Plates / Cloverleaf Plates",
              "DHS / DCS Plates"
            ],
            imagePlaceholder: "https://raw.githubusercontent.com/indiprosolutionsweb-lab/Kacey-mediglobal-assets/2b84089ad27d5eddee1e4e21ffbff2aee5242716/Bone%20plate%2C%20C1.1.jpg"
          },
          {
            id: "C1.2",
            name: "Intramedullary Nails (IM Nails)",
            description: "Antegrade and Retrograde nailing systems.",
            features: [
              "Femoral Nails (Antegrade & Retrograde)",
              "Tibial Nails",
              "Humeral Nails",
              "PFN - Proximal Femoral Nail / PFNA"
            ],
            imagePlaceholder: "https://raw.githubusercontent.com/indiprosolutionsweb-lab/Kacey-mediglobal-assets/d708a7ee1364bf0e05065bb8e7dfe4e18b248c12/Intramedullary%20nail.jpg"
          },
          {
            id: "C2.1",
            name: "Screws for Trauma Fixation",
            description: "Comprehensive screw portfolio.",
            features: [
              "Cortical Screws",
              "Cancellous Screws",
              "Locking Screws",
              "Cannulated Screws",
              "Herbert Screws"
            ],
            imagePlaceholder: "https://raw.githubusercontent.com/indiprosolutionsweb-lab/Kacey-mediglobal-assets/ce2a5d39a4b1c352a552ed52ce48fa628ed2a644/Trauma%20implants%20(available%20in%20SS).jpg"
          },
          {
            id: "C2.2",
            name: "Hip Fixation Systems",
            description: "Fixation for hip fractures.",
            features: [
              "Dynamic Hip Screw (DHS) System",
              "Proximal Femoral Nail (PFN / PFNA)",
              "Cannulated Hip Screws"
            ],
            imagePlaceholder: "https://raw.githubusercontent.com/indiprosolutionsweb-lab/Kacey-mediglobal-assets/ce2a5d39a4b1c352a552ed52ce48fa628ed2a644/Trauma%20implants%20(available%20in%20SS).jpg"
          },
          {
            id: "C2.3",
            name: "External Fixators",
            description: "External fixation solutions.",
            features: [
              "Unilateral External Fixator",
              "Ilizarov Ring Fixator",
              "Hybrid Fixator"
            ],
            imagePlaceholder: "https://raw.githubusercontent.com/indiprosolutionsweb-lab/Kacey-mediglobal-assets/ce2a5d39a4b1c352a552ed52ce48fa628ed2a644/Trauma%20implants%20(available%20in%20SS).jpg"
          },
          {
            id: "C2.4",
            name: "Small Fragment System",
            description: "1.5mm, 2.0mm, 2.7mm systems.",
            features: [
              "Used for fractures of the hand, wrist, clavicle and small bones."
            ],
            imagePlaceholder: "https://raw.githubusercontent.com/indiprosolutionsweb-lab/Kacey-mediglobal-assets/ce2a5d39a4b1c352a552ed52ce48fa628ed2a644/Trauma%20implants%20(available%20in%20SS).jpg"
          },
          {
            id: "C2.5",
            name: "Large Fragment System",
            description: "4.5mm, 6.5mm systems.",
            features: [
              "Used for large bone fractures such as femur, tibia, humerus."
            ],
            imagePlaceholder: "https://raw.githubusercontent.com/indiprosolutionsweb-lab/Kacey-mediglobal-assets/ce2a5d39a4b1c352a552ed52ce48fa628ed2a644/Trauma%20Implants%20(available%20in%20titanium).jpg"
          }
        ]
      }
    ]
  },
  {
    id: "D",
    name: "Spinal Internal Fixation System",
    description: "Lumbar & Cervical Spine Screw Fixation Systems available in Titanium & SS.",
    isCategory: false, 
    features: [
      "Lumbar & Cervical Spine Screw Fixation System (Mono & Polyaxial Screws, Rods, Connectors, Staple)",
      "ECO Cage",
      "MESH Cage",
      "EXPANDABLE Cage",
      "TLIF Cage",
      "PLIF Cage",
      "KIDNEY Cage",
      "CERVICAL Cages"
    ],
    imagePlaceholder: "https://raw.githubusercontent.com/indiprosolutionsweb-lab/Kacey-mediglobal-assets/6f3695c302eaa5722b71d41ee2cec2e21cef42fb/Spinal%20internal%20fixation%20system.jpg"
  },
  {
    id: "E",
    name: "Hospital Beds & Furniture",
    description: "Complete range of hospital furniture for ICU, wards, and examination.",
    isCategory: false,
    features: [
      "Motorized & manual intensive care beds",
      "Recovery beds, ward beds, paediatric beds, maternity beds",
      "Bedside cabinets & overbed tables",
      "Patient shifting trolleys, ICU trolleys, OT trolleys & equipments",
      "Examination couches & tables, Dialysis chairs"
    ],
    imagePlaceholder: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "F",
    name: "Optivein Fibers",
    description: "Advanced Laser Surgery Fibers.",
    isCategory: true,
    imagePlaceholder: "https://raw.githubusercontent.com/indiprosolutionsweb-lab/Kacey-mediglobal-assets/34935e8c701a46d13b8839955c84b14043e2c081/Optevin%20Fibre.jpg",
    children: [
      {
        id: "F1",
        name: "Diode Laser Fibers",
        description: "Compatible for wavelengths 980nm, 1470nm & 1940nm.",
        features: [
          "Bare Fiber 400mic & 600mic, Radial Fiber 400mic & 600mic, Conical Fiber 600mic.",
          "Proctology: Piles, Fistula, Haemorrhoids & Pilonidal Sinus.",
          "Vascular: Varicose Veins treatment.",
          "Licenses: MD9, ISO 13485:2016 (TUVINDIA).",
          "Packing in ETO Pouch, ETO Sterilization."
        ],
        imagePlaceholder: "https://raw.githubusercontent.com/indiprosolutionsweb-lab/Kacey-mediglobal-assets/34935e8c701a46d13b8839955c84b14043e2c081/Optevin%20Fibre.jpg"
      }
    ]
  },
  {
    id: "G",
    name: "RelaxSan Compression Stockings",
    description: "Graduate Compression Stockings based on the severity of venous disease.",
    isCategory: false,
    features: [
      "Antiembolism Stocking",
      "Basic Stocking",
      "Cotton Socks",
      "Classes: Class I (15-21 mmHg), Class II (23-32 mmHg), Class III (34-46 mmHg)"
    ],
    imagePlaceholder: "https://raw.githubusercontent.com/indiprosolutionsweb-lab/Kacey-mediglobal-assets/552fdc4d794fe4dbeb39534f109cdaa2dce7dde2/Relaxxsan%20Basic%20stocking.jpg"
  },
  {
    id: "H",
    name: "Bandages",
    description: "Advanced bandage solutions.",
    isCategory: true,
    imagePlaceholder: "https://raw.githubusercontent.com/indiprosolutionsweb-lab/Kacey-mediglobal-assets/34935e8c701a46d13b8839955c84b14043e2c081/4%20layer%20bandage.jpg",
    children: [
      {
        id: "H1",
        name: "Elastic Bandages",
        description: "Self adhering or cohesive bandage.",
        features: [
          "Coheres to itself but does not adhere well to other surfaces.",
          "Ideal for support and compression."
        ],
        imagePlaceholder: "https://raw.githubusercontent.com/indiprosolutionsweb-lab/Kacey-mediglobal-assets/34935e8c701a46d13b8839955c84b14043e2c081/Elastic%20bandage.jpg"
      },
      {
        id: "H2",
        name: "4 Layer Bandages",
        description: "Comprehensive 4-layer system for ulcers and vascular treatments.",
        features: [
          "Layer 1: Soft Cotton Padding",
          "Layer 2: Elastic Bandage For Support",
          "Layer 3: High Elastic Crepe Bandage",
          "Layer 4: Cohesive Bandage",
          "Indications: Vascular Ulcer, Non-healing Ulcer, Varicose Vein treatment"
        ],
        imagePlaceholder: "https://raw.githubusercontent.com/indiprosolutionsweb-lab/Kacey-mediglobal-assets/34935e8c701a46d13b8839955c84b14043e2c081/4%20layer%20bandage.jpg"
      }
    ]
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: "Staying Active Every Day: Why Movement Matters",
    category: "Wellness",
    excerpt: "Staying physically active is one of the strongest foundations of long-term health. Even simple daily movements can improve strength, mobility, and overall well-being.",
    fullContent: `Staying physically active is one of the strongest foundations of long-term health. Even simple daily movements can improve strength, mobility, and overall well-being.

Why Daily Activity Is Important
• Improves circulation and supports heart health
• Strengthens muscles and joints, reducing chances of injury
• Boosts metabolism, helping maintain a healthy weight
• Elevates mood, reducing stress and anxiety
• Enhances energy levels throughout the day

Easy Ways to Stay Active
• Take short walks several times a day
• Choose stairs over elevators where possible
• Do stretching or mobility exercises during breaks
• Engage in low-impact activities such as cycling, yoga, or swimming
• Follow doctor-recommended exercises if recovering from injury

For Patients Using Medical Devices or After Surgery
• Structured, guided movement accelerates healing
• Physiotherapy supports proper joint function
• Assistive devices such as braces, supports, or walkers help maintain safe mobility

Staying active doesn’t need intense workouts—small steps every day lead to meaningful long-term benefits.`,
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Smart Nutrition: Building Better Health Through Food Choices",
    category: "Nutrition",
    excerpt: "Good nutrition is essential for your body’s strength, immunity, and recovery process. Discover how small dietary improvements enhance long-term health.",
    fullContent: `Good nutrition is essential for your body’s strength, immunity, and recovery process.

Why Nutrition Matters
• Supports tissue repair after injuries or surgeries
• Strengthens bones and muscles with essential nutrients
• Boosts immunity, reducing chances of infection
• Improves energy levels and mental focus
• Helps maintain a healthy weight

Key Components of a Healthy Diet
• Fruits & vegetables: Vitamins, minerals, antioxidants
• Whole grains: Slow-release energy
• Lean proteins: Helps in muscle repair and growth
• Healthy fats: Supports brain and heart health
• Water: Essential for digestion, circulation, and detoxification

Nutrition Tips for Everyday Life
• Eat at regular intervals
• Limit processed foods, sugar, and deep-fried items
• Include probiotics like yogurt or fermented foods
• Stay hydrated throughout the day
• Discuss special dietary needs with healthcare professionals if recovering from surgery or managing chronic illness

Small, consistent dietary improvements can significantly enhance long-term health.`,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Knee Care After Surgery: A Practical Recovery Guide",
    category: "Recovery",
    excerpt: "Proper care after knee surgery ensures smoother healing and better long-term mobility. Learn about rehabilitation, pain management, and precautions.",
    fullContent: `Proper care after knee surgery ensures smoother healing and better long-term mobility.

Follow Your Rehabilitation Plan
• Begin recommended physiotherapy as advised
• Perform gentle, guided range-of-motion exercises
• Gradually increase activity levels

Managing Pain and Swelling
• Apply ice packs or cold therapy devices
• Keep the leg elevated to reduce swelling
• Use recommended braces or supports

Movement Precautions
• Avoid twisting, sudden turns, or kneeling
• Do not overload the joint with heavy weights
• Use walking aids (walker, crutches) until advised otherwise

Supportive Habits
• Maintain a healthy diet to support tissue healing
• Attend follow-up appointments for progress checks
• Report unusual pain, swelling, or redness immediately

With consistent care and professional guidance, patients can regain mobility safely and confidently.`,
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "Everyday Knee Health: Simple Habits for Stronger Joints",
    category: "Joint Health",
    excerpt: "Healthy knees are essential for mobility, balance, and daily comfort. Discover simple exercises and lifestyle choices to protect your knees.",
    fullContent: `Healthy knees are essential for mobility, balance, and daily comfort.

Strengthening Your Knees
• Do low-impact exercises like walking, swimming, or cycling
• Strengthen leg muscles—quadriceps, hamstrings, calves
• Practice flexibility exercises and light stretching

Lifestyle Choices That Protect Your Knees
• Maintain a healthy body weight to reduce joint stress
• Wear comfortable, supportive footwear
• Avoid repetitive strain and high-impact activities

Posture and Movement Care
• Bend your knees properly when lifting objects
• Avoid locking your knees for long periods
• Use supports or braces if you have existing knee issues

When to Seek Medical Evaluation
• Persistent pain or swelling
• Instability or difficulty walking
• Pain during simple activities like climbing stairs

Early care prevents long-term complications and keeps your knees active for years.`,
    image: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    title: "Daily Gut Health: Simple Steps for a Strong Digestive System",
    category: "Wellness",
    excerpt: "A healthy gut supports digestion, immunity, and overall energy levels. Learn how fiber, hydration, and probiotics contribute to better gut health.",
    fullContent: `A healthy gut supports digestion, immunity, and overall energy levels.

Why Gut Health Is Important
• Helps the body absorb nutrients
• Supports the immune system
• Influences mood and mental well-being
• Prevents bloating and digestive discomfort

Daily Habits for Better Gut Health
• Eat fiber-rich foods: fruits, vegetables, whole grains
• Stay hydrated to support digestion
• Include probiotics like curd, yogurt, or fermented foods
• Eat balanced meals at regular timings
• Limit sugary, fried, and highly processed foods

Lifestyle Factors
• Manage stress through breathing practices or mild exercise
• Sleep 7–8 hours to support digestive regulation
• Avoid overeating or skipping meals

Healthy gut habits build long-term well-being and support better overall health.`,
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    title: "Mind–Body Connection: How Mental and Physical Health Work Together",
    category: "Mental Health",
    excerpt: "Your mind and body influence each other more than you may realize. Balancing mental and physical well-being creates a healthier lifestyle.",
    fullContent: `Your mind and body influence each other more than you may realize.

How Mental Health Affects the Body
• Stress can cause headaches, fatigue, digestive issues
• Anxiety may lead to muscle stiffness or disturbed sleep
• Emotional strain can weaken immunity

How Physical Health Impacts the Mind
• Regular exercise boosts mood-regulating hormones
• Proper sleep enhances focus and emotional balance
• Good nutrition supports cognitive function

Simple Practices to Support Both
• Regular physical activity
• Breathing exercises or meditation
• Maintaining social connections
• Balanced meals and proper hydration
• Taking regular breaks from digital screens

Balancing mental and physical well-being creates a healthier, more productive lifestyle.`,
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 7,
    title: "Hip Care After Surgery: A Practical Recovery Guide",
    category: "Recovery",
    excerpt: "Recovering from hip surgery requires careful movement, correct exercises, and the right support to ensure long-term mobility and comfort.",
    fullContent: `Recovering from hip surgery requires careful movement, correct exercises, and the right support to ensure long-term mobility and comfort.

Follow Your Rehabilitation Plan
• Start physiotherapy as advised by your surgeon
• Practice guided range-of-motion and strengthening exercises
• Increase activity levels gradually—avoid rushing the process

Movement & Safety Precautions
• Avoid bending your hip beyond recommended angles
• Do not cross your legs or twist your hip suddenly
• Use assistive devices—walker, crutches, or cane—until cleared by your doctor
• Sit on chairs with firm support and avoid low seating

Managing Pain & Swelling
• Apply ice therapy as recommended
• Keep the leg elevated when resting
• Follow prescribed medications for pain and inflammation

Daily Lifestyle Tips
• Maintain a healthy weight to reduce pressure on the hip joint
• Use supportive footwear to maintain good posture and balance
• Keep floors clutter-free to avoid slips or falls

Recovery Monitoring
• Seek immediate medical attention if you notice:
• Sudden increase in pain
• Swelling or redness around the incision
• Difficulty bearing weight

With appropriate care and steady rehabilitation, most patients regain mobility and return to regular activities safely.`,
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 8,
    title: "Spine Surgery Recovery: Essential Care Tips for Healing",
    category: "Recovery",
    excerpt: "Spine surgery recovery requires a mix of rest, controlled movement, and posture care to ensure the spine heals correctly and safely.",
    fullContent: `Spine surgery recovery requires a mix of rest, controlled movement, and posture care to ensure the spine heals correctly and safely.

Understand Your Post-Surgery Plan
• Follow the physiotherapy schedule strictly
• Perform gentle, approved stretches and strengthening exercises
• Avoid high-impact or sudden twisting movements

Protecting Your Spine in Daily Activities
• Maintain correct posture while sitting, standing, or walking
• Avoid bending too far forward or lifting heavy objects
• Use chairs with proper back support
• Sleep on a firm mattress recommended by your doctor

Pain & Discomfort Management
• Use ice or heat therapy only if your doctor approves
• Take prescribed medications on schedule
• Move slowly to reduce muscle stiffness

Lifestyle Support for Healing
• Walk short distances regularly to improve circulation
• Maintain a healthy body weight to reduce spinal load
• Stay hydrated and eat a nutrient-rich diet to support tissue repair

When to Call Your Doctor
• Persistent or increasing pain
• Numbness, weakness, or tingling in legs or arms
• Any signs of infection at the incision site

With consistent care and medical supervision, patients can rebuild strength, protect their spine, and return to their normal routines confidently.`,
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80"
  }
];
