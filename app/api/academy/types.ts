export interface SubItem {
    id: string;
    title: string;
}

export interface SidebarItem {
    id: string;
    title: string;
    subItems?: SubItem[];
}

export interface Subsection {
    title?: string;
    content?: string;
    features?: string;
    featureHeading?: string;
    featureDescription?: string;
    headingOne?: string;
    headingOneDescription?: string;
    headingTwo?: string;
    headingTwoDescription?: string;
    headingThree?: string;
    headingThreeDescription?: string;
    headingFour?: string;
    headingFourDescription?: string;
    title_bulletPoints?: string[];
    short_description?: string;
    secondSection?: {
        subHeading?: string;
        subHeadingContent?: string;
        features?: string;
        bulletPoints?: Array<{ title: string; description: string }>;
        short_description?: string;
    };
}

export interface ContentItem {
    title: string;
    heading?: string;
    content?: string;
    heading_content?: string;
    subsections?: Subsection[];
    rightCard?: { title: string; items: Array<{ text: string }> };
}

// export interface Page {
//   id: number;
//   title: string;
//   sub_category_id: number;
//   slug?: string;
//   sidebar?: SidebarItem[];
//   content?: { [key: string]: ContentItem };
//   lastUpdated?: string;
//   rightCard?: { title: string; items: Array<{ text: string }> };
// }
export interface CategoryListResponseItem {
    category: {
        id: number;
        title: string;
    };
    pages: Page[];

}
export interface CategoryListResponseItem {
    pages: Page[];
    id: number;
    name: string;
    slug: string;
    icon: string;
    description: string;
    updated_at?: string;
}

export interface CategoryListResponse {
    success: string;
    message: string;
    data: CategoryListResponseItem[];
}
export interface PageResponse {
    success: string; // matches your API
    message: string;
    data: Page;      // single Page object
}
export interface Page {
    id: number;
    title: string;
    category: string;
    sub_category_id: number;
    slug?: string;
    sidebar?: SidebarItem[];  // optional
    content?: { [key: string]: ContentItem }; // optional
    lastUpdated?: string;     // optional
    rightCard?: { title: string; items: Array<{ text: string }> }; // optional
}
