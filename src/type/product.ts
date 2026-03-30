export type WritingColor = 'Rosê' | 'Preto' | 'Dourado' | 'Prata';

export interface RibbonOption {
  name: string;
  hex: string;
}

export interface BaseColorGroup {
  groupName: string;
  shades: string[];
}

export interface ProductVariant {
  id: string;
  writingColor: WritingColor;
  imageUrl: string; 
  title: string;
}

export interface SubSection {
  shadeName: string;
  variants: ProductVariant[];
}

export interface ProductSection {
  groupName: string;
  description?: string;
  subSections: SubSection[];
}
