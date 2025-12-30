export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  outcomes: string[];
  compliance?: string[];
}

export interface Industry {
  id: string;
  name: string;
  description: string;
  primaryThreats: string[];
  coreSolutions: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  imageUrl: string;
}

export interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
}