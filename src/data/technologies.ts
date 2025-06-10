
export interface Technology {
  id: string;
  name: string;
  slogan: string;
  description: string;
  image: string;
  applications: string[];
  advantages: string[];
  externalLink: string;
  relatedEvents: string[];
}

export interface Event {
  id: string;
  name: string;
  description: string;
  date: string;
  technologies: string[];
}

export const technologies: Technology[] = [
  {
    id: "ai-vision",
    name: "AI視覺辨識技術",
    slogan: "讓機器擁有智慧的眼睛",
    description: "結合深度學習與電腦視覺的先進技術，能夠精準識別、分析各種視覺內容，為產業帶來智能化轉型。",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop",
    applications: [
      "製造業品質檢測自動化",
      "醫療影像診斷輔助",
      "智慧城市監控系統",
      "零售業客流分析"
    ],
    advantages: [
      "99.5%以上的識別準確度",
      "毫秒級的即時處理能力",
      "彈性的客製化配置"
    ],
    externalLink: "https://www.itri.org.tw/ai-vision",
    relatedEvents: ["gai-summit-2024", "tech-demo-day"]
  },
  {
    id: "quantum-computing",
    name: "量子運算平台",
    slogan: "突破傳統運算極限",
    description: "基於量子力學原理的革命性運算技術，能夠解決傳統電腦無法處理的複雜問題，開啟全新的運算時代。",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
    applications: [
      "金融風險模擬與分析",
      "藥物分子結構優化",
      "物流路徑最佳化",
      "密碼學與資安防護"
    ],
    advantages: [
      "指數級的運算速度提升",
      "處理複雜組合問題的能力",
      "突破性的演算法優勢"
    ],
    externalLink: "https://www.itri.org.tw/quantum-computing",
    relatedEvents: ["quantum-workshop", "future-tech-expo"]
  },
  {
    id: "smart-manufacturing",
    name: "智慧製造解決方案",
    slogan: "工業4.0的完美實現",
    description: "整合IoT、AI、大數據的全方位智慧製造平台，實現生產流程的數位化轉型與智能化管理。",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
    applications: [
      "產線設備預測性維護",
      "品質管控智能化",
      "供應鏈最佳化管理",
      "能源使用效率優化"
    ],
    advantages: [
      "降低30%的生產成本",
      "提高50%的生產效率",
      "減少80%的設備故障時間"
    ],
    externalLink: "https://www.itri.org.tw/smart-manufacturing",
    relatedEvents: ["industry-4-conference", "manufacturing-innovation"]
  },
  {
    id: "green-energy",
    name: "綠能儲存技術",
    slogan: "為永續未來儲存能量",
    description: "新一代的能源儲存與管理技術，結合先進材料科學與智能控制系統，為綠色能源提供可靠的儲存解決方案。",
    image: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c?w=800&h=600&fit=crop",
    applications: [
      "太陽能發電系統整合",
      "電動車快充技術",
      "智慧電網平衡調節",
      "工業級備用電源"
    ],
    advantages: [
      "95%以上的能源轉換效率",
      "超過10,000次的充放電循環",
      "模組化的彈性配置"
    ],
    externalLink: "https://www.itri.org.tw/green-energy",
    relatedEvents: ["green-tech-summit", "sustainability-forum"]
  }
];

export const events: Event[] = [
  {
    id: "gai-summit-2024",
    name: "GAI產業高峰會2024",
    description: "探討生成式AI在各產業的創新應用與未來發展趨勢",
    date: "2024-12-15",
    technologies: ["ai-vision", "smart-manufacturing"]
  },
  {
    id: "tech-demo-day",
    name: "技術展示日",
    description: "工研院最新技術成果展示與應用案例分享",
    date: "2024-11-20",
    technologies: ["ai-vision", "quantum-computing"]
  },
  {
    id: "quantum-workshop",
    name: "量子運算工作坊",
    description: "深入了解量子運算原理與實際應用場景",
    date: "2024-10-25",
    technologies: ["quantum-computing"]
  },
  {
    id: "industry-4-conference",
    name: "工業4.0轉型大會",
    description: "製造業數位轉型的策略與實踐經驗分享",
    date: "2024-11-30",
    technologies: ["smart-manufacturing", "ai-vision"]
  }
];

export const getTechnologyById = (id: string): Technology | undefined => {
  return technologies.find(tech => tech.id === id);
};

export const getEventsByTechnology = (technologyId: string): Event[] => {
  return events.filter(event => event.technologies.includes(technologyId));
};

export const getTechnologiesByEvent = (eventId: string): Technology[] => {
  const event = events.find(e => e.id === eventId);
  if (!event) return [];
  
  return technologies.filter(tech => event.technologies.includes(tech.id));
};
