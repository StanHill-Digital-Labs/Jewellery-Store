import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, CartItem, ProductStatus, Category, ActiveView } from '../types';
import { INITIAL_PRODUCTS } from '../data/initialProducts';

interface StoreContextType {
  products: Product[];
  cart: CartItem[];
  theme: 'light' | 'dark';
  activeView: ActiveView;
  categoryFilter: Category | 'All';
  searchQuery: string;
  selectedProduct: Product | null;
  isCartOpen: boolean;
  isInquiryModalOpen: boolean;
  isSizingGuideOpen: boolean;
  inquiryTarget: { product?: Product; isCart?: boolean } | null;
  
  // Actions
  toggleTheme: () => void;
  setActiveView: (view: ActiveView) => void;
  setCategoryFilter: (category: Category | 'All') => void;
  setSearchQuery: (query: string) => void;
  setSelectedProduct: (product: Product | null) => void;
  setIsCartOpen: (open: boolean) => void;
  setIsInquiryModalOpen: (open: boolean) => void;
  setIsSizingGuideOpen: (open: boolean) => void;
  openInquiryForProduct: (product: Product) => void;
  openInquiryForCart: () => void;
  
  // Cart Actions
  addToCart: (product: Product, quantity?: number, selectedSize?: string) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  cartTotal: number;
  cartCount: number;
  
  // Admin Actions
  addProduct: (newProduct: Omit<Product, 'id'>) => Product;
  updateProduct: (id: string, updates: Partial<Product>) => void;
  updateProductStatus: (id: string, status: ProductStatus) => void;
  removeProduct: (id: string) => void;
  resetProductsToDefault: () => void;
  
  // Direct Messaging Helpers
  whatsappPhoneNumber: string;
  getWhatsAppProductUrl: (product: Product, selectedSize?: string) => string;
  getWhatsAppCartUrl: () => string;
  getWhatsAppGeneralUrl: (customMsg?: string) => string;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

const LOCAL_STORAGE_PRODUCTS = 'silver_stone_products_v1';
const LOCAL_STORAGE_CART = 'silver_stone_cart_v1';
const LOCAL_STORAGE_THEME = 'silver_stone_theme_v1';

const WHATSAPP_PHONE = '15550192834'; // Store owner WhatsApp contact

export const StoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Theme state
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_THEME);
    if (saved === 'dark' || saved === 'light') return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  // Products state
  const [products, setProducts] = useState<Product[]>(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_PRODUCTS);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Failed to parse saved products', e);
      }
    }
    return INITIAL_PRODUCTS;
  });

  // Cart state
  const [cart, setCart] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_CART);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Failed to parse saved cart', e);
      }
    }
    return [];
  });

  // Navigation & Modal states
  const [activeView, setActiveView] = useState<ActiveView>('shop');
  const [categoryFilter, setCategoryFilter] = useState<Category | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState<boolean>(false);
  const [isSizingGuideOpen, setIsSizingGuideOpen] = useState<boolean>(false);
  const [inquiryTarget, setInquiryTarget] = useState<{ product?: Product; isCart?: boolean } | null>(null);

  // Apply theme class to <html> and <body>
  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
      root.setAttribute('data-theme', 'dark');
      root.style.colorScheme = 'dark';
      if (body) {
        body.classList.add('dark');
        body.classList.remove('light');
      }
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
      root.setAttribute('data-theme', 'light');
      root.style.colorScheme = 'light';
      if (body) {
        body.classList.add('light');
        body.classList.remove('dark');
      }
    }
    localStorage.setItem(LOCAL_STORAGE_THEME, theme);
  }, [theme]);

  // Save products to localStorage
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_PRODUCTS, JSON.stringify(products));
  }, [products]);

  // Save cart to localStorage
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_CART, JSON.stringify(cart));
  }, [cart]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  // Cart functions
  const addToCart = (product: Product, quantity = 1, selectedSize?: string) => {
    setCart((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.product.id === product.id && item.selectedSize === selectedSize
      );
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        return updated;
      }
      return [...prev, { product, quantity, selectedSize }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Inquiry helpers
  const openInquiryForProduct = (product: Product) => {
    setInquiryTarget({ product });
    setIsInquiryModalOpen(true);
  };

  const openInquiryForCart = () => {
    setInquiryTarget({ isCart: true });
    setIsInquiryModalOpen(true);
  };

  // Admin functions
  const addProduct = (newProductData: Omit<Product, 'id'>): Product => {
    const newProduct: Product = {
      ...newProductData,
      id: `prod-${Date.now()}`,
      createdAt: new Date().toISOString()
    };
    setProducts((prev) => [newProduct, ...prev]);
    return newProduct;
  };

  const updateProduct = (id: string, updates: Partial<Product>) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, ...updates } : p))
    );
  };

  const updateProductStatus = (id: string, status: ProductStatus) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, status } : p))
    );
  };

  const removeProduct = (id: string) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
    setCart((prev) => prev.filter((item) => item.product.id !== id));
  };

  const resetProductsToDefault = () => {
    setProducts(INITIAL_PRODUCTS);
    localStorage.removeItem(LOCAL_STORAGE_PRODUCTS);
  };

  // WhatsApp Messaging Generators
  const getWhatsAppProductUrl = (product: Product, selectedSize?: string) => {
    const text = `Hello SILVER & STONE! I am inquiring about the artisan piece: "${product.title}" (SKU: ${product.sku}, Price: $${product.price.toFixed(2)}${selectedSize ? `, Size: ${selectedSize}` : ''}). Is this currently available for order or custom sizing?`;
    return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`;
  };

  const getWhatsAppCartUrl = () => {
    if (cart.length === 0) {
      return getWhatsAppGeneralUrl('Hello SILVER & STONE! I would like to inquire about placing a custom jewelry order.');
    }
    const itemsList = cart
      .map(
        (i, idx) =>
          `${idx + 1}. ${i.product.title} (SKU: ${i.product.sku}) - Qty: ${i.quantity}${i.selectedSize ? ` [Size: ${i.selectedSize}]` : ''} - $${(i.product.price * i.quantity).toFixed(2)}`
      )
      .join('\n');
    const text = `Hello SILVER & STONE! I have the following pieces saved in my bag and would like to inquire about ordering / shipping:\n\n${itemsList}\n\nTotal Estimated: $${cartTotal.toFixed(2)}\n\nPlease advise on order confirmation and availability.`;
    return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`;
  };

  const getWhatsAppGeneralUrl = (customMsg?: string) => {
    const text = customMsg || 'Hello SILVER & STONE! I am visiting your store and would like to ask a question about your artisan silversmith pieces.';
    return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`;
  };

  return (
    <StoreContext.Provider
      value={{
        products,
        cart,
        theme,
        activeView,
        categoryFilter,
        searchQuery,
        selectedProduct,
        isCartOpen,
        isInquiryModalOpen,
        isSizingGuideOpen,
        inquiryTarget,
        toggleTheme,
        setActiveView,
        setCategoryFilter,
        setSearchQuery,
        setSelectedProduct,
        setIsCartOpen,
        setIsInquiryModalOpen,
        setIsSizingGuideOpen,
        openInquiryForProduct,
        openInquiryForCart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartTotal,
        cartCount,
        addProduct,
        updateProduct,
        updateProductStatus,
        removeProduct,
        resetProductsToDefault,
        whatsappPhoneNumber: WHATSAPP_PHONE,
        getWhatsAppProductUrl,
        getWhatsAppCartUrl,
        getWhatsAppGeneralUrl
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
};
