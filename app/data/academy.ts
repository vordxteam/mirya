// types/academy.ts
export interface SidebarItem {
  id: string;
  title: string;
  subItems?: {
    id: string;
    title: string;
  }[];
}

export interface ContentSection {
  id: string;
  title: string;
  content: string;
  bulletPoints?: string[];
  subsections?: {
    title: string;
    content: string;
    bulletPoints?: string[];
  }[];
}

export interface RightCard {
  title: string;
  items: {
    icon: string;
    text: string;
    link?: string;
  }[];
}

export interface AcademyCategory {
  id: number;
  slug: string;
  title: string;
  sidebar: SidebarItem[];
  content: { [key: string]: ContentSection };
  rightCard: RightCard;
}
