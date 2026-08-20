export type ProductStatus = 'In Stock' | 'Out of Stock' | 'Sold';

export type Category = 'Rings' | 'Cuff & Arm' | 'Necklaces' | 'New Arrivals';

export interface Product {
  id: string;
  title: string;
  sku: string;
  price: number;
  category: Category;
  status: ProductStatus;
  primaryImage: string;
  galleryImages: string[];
  description: string;
  materials: string[];
  stoneOrigin: string;
  silverDetails: string;
  featured?: boolean;
  sizingGuideType: 'ring' | 'cuff' | 'necklace';
  createdAt?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedSize?: string;
}

export interface InquiryForm {
  name: string;
  email: string;
  phone: string;
  message: string;
  productId?: string;
  productTitle?: string;
  isCartInquiry?: boolean;
  cartSummary?: string;
}

export type ActiveView = 'shop' | 'journal' | 'admin' | 'contact' | 'sizing';
