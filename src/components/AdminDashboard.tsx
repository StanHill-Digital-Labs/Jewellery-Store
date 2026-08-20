import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Plus,
  Trash2,
  Edit,
  Archive,
  RefreshCw,
  Upload,
  DollarSign,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  X,
  Sparkles,
  PackageCheck,
  Shield,
  Layers,
  Image as ImageIcon
} from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { Product, ProductStatus, Category } from '../types';

export const AdminDashboard: React.FC = () => {
  const {
    products,
    addProduct,
    updateProduct,
    updateProductStatus,
    removeProduct,
    resetProductsToDefault
  } = useStore();

  // Form State
  const [isAddFormOpen, setIsAddFormOpen] = useState(false);
  const [editingProductId, setEditingProductId] = useState<string | null>(null);

  // Form Fields
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [sku, setSku] = useState('');
  const [category, setCategory] = useState<Category>('Rings');
  const [status, setStatus] = useState<ProductStatus>('In Stock');
  const [description, setDescription] = useState('');
  const [materials, setMaterials] = useState('');
  const [stoneOrigin, setStoneOrigin] = useState('');
  const [silverDetails, setSilverDetails] = useState('');
  const [sizingGuideType, setSizingGuideType] = useState<'ring' | 'cuff' | 'necklace'>('ring');
  const [imageUrls, setImageUrls] = useState<string[]>([
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBovWEVyAmJTlgU_fowhUEjuoWuM7-e4TPK_W2ICzNRfYfX9JJzKz6gnnNEpWaaXL3daPRNQbfyhbu_NdkjCrsCEIT4oAuf0nbU_SymXu_N_Q-fJr3WyLsKqfPwpwKX9lqA9GTiRI2g_MdUeSG9Ifde7J4S8JXqjTVWqpSC4jqLmbRTvD-FP9-QuZUb8RHbbbOG8sJ_0c3o1mQF-nDeXtkkfXi0nSce0EROSfRuYlQ9HnFsyy4VzNBn'
  ]);
  const [newImageUrl, setNewImageUrl] = useState('');
  const [dragActive, setDragActive] = useState(false);

  // Notification Banner
  const [notification, setNotification] = useState<string | null>(null);

  const showNotification = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3500);
  };

  // Stats Calculations
  const totalInventoryValue = products.reduce((acc, p) => acc + p.price, 0);
  const totalPiecesSold = products.filter((p) => p.status === 'Sold').length;
  const lowStockCount = products.filter((p) => p.status === 'Out of Stock').length;

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      // Simulate file upload with high-res placeholder image
      const mockUploadedUrl = 'https://lh3.googleusercontent.com/aida-public/AB6AXuB8q42f2Pm-bxYtnoFOEI3WJAX3qRotbrZywi_shAwqAvjP_PNchesxHFSWue1s5CjCdJFiCbIscaLgx8M7Bsigi7XCYuoqP6gfIN0ch18lL_12zfNSyClWij_4dkzLvjEja7k-7ETTINhqJ41iHzGwh80zDZA0QAOk8__C2NDpCyuOoQcPxbjyhAm6jbZsCAqQ8mFqIUTzHTqJeP2qvD010iz_TjwzpMGQV-kQRyxc-EIkfMODgdlL';
      setImageUrls((prev) => [...prev, mockUploadedUrl]);
      showNotification('Image uploaded successfully to product gallery!');
    }
  };

  const handleAddImageUrl = () => {
    if (newImageUrl.trim()) {
      setImageUrls((prev) => [...prev, newImageUrl.trim()]);
      setNewImageUrl('');
    }
  };

  const handleRemoveImage = (index: number) => {
    setImageUrls((prev) => prev.filter((_, i) => i !== index));
  };

  const handleStartEdit = (product: Product) => {
    setEditingProductId(product.id);
    setTitle(product.title);
    setPrice(product.price.toString());
    setSku(product.sku);
    setCategory(product.category);
    setStatus(product.status);
    setDescription(product.description);
    setMaterials(product.materials.join(', '));
    setStoneOrigin(product.stoneOrigin);
    setSilverDetails(product.silverDetails);
    setSizingGuideType(product.sizingGuideType);
    setImageUrls(product.galleryImages || [product.primaryImage]);
    setIsAddFormOpen(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleResetForm = () => {
    setEditingProductId(null);
    setTitle('');
    setPrice('');
    setSku('');
    setCategory('Rings');
    setStatus('In Stock');
    setDescription('');
    setMaterials('');
    setStoneOrigin('');
    setSilverDetails('');
    setSizingGuideType('ring');
    setImageUrls([
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBovWEVyAmJTlgU_fowhUEjuoWuM7-e4TPK_W2ICzNRfYfX9JJzKz6gnnNEpWaaXL3daPRNQbfyhbu_NdkjCrsCEIT4oAuf0nbU_SymXu_N_Q-fJr3WyLsKqfPwpwKX9lqA9GTiRI2g_MdUeSG9Ifde7J4S8JXqjTVWqpSC4jqLmbRTvD-FP9-QuZUb8RHbbbOG8sJ_0c3o1mQF-nDeXtkkfXi0nSce0EROSfRuYlQ9HnFsyy4VzNBn'
    ]);
    setIsAddFormOpen(false);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const parsedPrice = parseFloat(price) || 0;
    const parsedMaterials = materials.split(',').map((m) => m.trim()).filter(Boolean);
    const primaryImg = imageUrls[0] || 'https://lh3.googleusercontent.com/aida-public/AB6AXuBovWEVyAmJTlgU_fowhUEjuoWuM7-e4TPK_W2ICzNRfYfX9JJzKz6gnnNEpWaaXL3daPRNQbfyhbu_NdkjCrsCEIT4oAuf0nbU_SymXu_N_Q-fJr3WyLsKqfPwpwKX9lqA9GTiRI2g_MdUeSG9Ifde7J4S8JXqjTVWqpSC4jqLmbRTvD-FP9-QuZUb8RHbbbOG8sJ_0c3o1mQF-nDeXtkkfXi0nSce0EROSfRuYlQ9HnFsyy4VzNBn';

    if (editingProductId) {
      updateProduct(editingProductId, {
        title,
        price: parsedPrice,
        sku: sku || `SKU-${Date.now().toString().slice(-4)}`,
        category,
        status,
        description,
        materials: parsedMaterials,
        stoneOrigin: stoneOrigin || 'Hand-selected Southwestern gemstone',
        silverDetails: silverDetails || 'Hand-stamped .925 sterling silver',
        primaryImage: primaryImg,
        galleryImages: imageUrls,
        sizingGuideType
      });
      showNotification(`Updated product "${title}" successfully!`);
    } else {
      addProduct({
        title: title || 'Handcrafted Silver & Stone Piece',
        price: parsedPrice,
        sku: sku || `SKU-${Date.now().toString().slice(-4)}`,
        category,
        status,
        description: description || 'Handcrafted Native American-style artisan silver piece.',
        materials: parsedMaterials.length > 0 ? parsedMaterials : ['.925 Sterling Silver', 'Natural Gemstone'],
        stoneOrigin: stoneOrigin || 'Ethically sourced Southwestern turquoise',
        silverDetails: silverDetails || 'Oxidized hand-stamped sterling silver',
        primaryImage: primaryImg,
        galleryImages: imageUrls,
        sizingGuideType,
        featured: true
      });
      showNotification(`Added new artisan product "${title}" to storefront!`);
    }

    handleResetForm();
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10 animate-fadeIn">
      
      {/* Top Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#ddc0b9] dark:border-[#89726c]/30 pb-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Shield className="w-5 h-5 text-[#c25a3f] dark:text-[#00A699]" />
            <span className="font-label-caps text-xs text-[#c25a3f] dark:text-[#00A699] uppercase tracking-widest font-bold">
              Private Store Owner Control
            </span>
          </div>
          <h2 className="font-serif-header text-3xl sm:text-4xl font-bold uppercase tracking-wide text-[#1b1b1b] dark:text-[#fcf9f8]">
            Inventory Management
          </h2>
          <p className="text-xs text-[#56423d] dark:text-[#ddc0b9] mt-1">
            Control storefront product listings, update piece availability ("In Stock", "Out of Stock", "Sold"), and upload new artisan creations.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            to="/"
            className="px-4 py-2.5 border border-[#89726c] text-[#56423d] dark:text-[#ddc0b9] hover:bg-[#f0eded] dark:hover:bg-[#313030] text-xs font-label-caps uppercase tracking-wider rounded transition-colors inline-block"
          >
            View Live Storefront
          </Link>

          <button
            onClick={() => {
              handleResetForm();
              setIsAddFormOpen(!isAddFormOpen);
            }}
            className="px-5 py-2.5 bg-[#9c3e25] dark:bg-[#00A699] hover:bg-[#802913] dark:hover:bg-[#007168] text-white text-xs font-label-caps uppercase tracking-widest rounded shadow transition-all flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            <span>{isAddFormOpen ? 'Close Form' : 'Add New Product'}</span>
          </button>
        </div>
      </div>

      {/* Notification Toast */}
      {notification && (
        <div className="p-4 bg-[#007168] text-white rounded shadow-xl font-serif-header text-sm flex items-center justify-between animate-fadeIn">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5" />
            <span>{notification}</span>
          </div>
          <button onClick={() => setNotification(null)} className="text-white hover:text-gray-200">
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Bento Summary Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        
        {/* Total Value */}
        <div className="p-6 bg-[#f0eded] dark:bg-[#313030]/60 rounded-lg border border-[#ddc0b9]/40 silver-shadow flex items-center justify-between">
          <div>
            <span className="font-label-caps text-[11px] text-[#89726c] dark:text-[#ddc0b9] uppercase tracking-wider">
              Total Inventory Value
            </span>
            <h3 className="font-serif-header text-3xl font-bold text-[#1b1b1b] dark:text-[#fcf9f8] mt-1">
              ${totalInventoryValue.toLocaleString('en-US', { minimumFractionDigits: 2 })}
            </h3>
          </div>
          <div className="p-3 bg-[#c25a3f]/10 text-[#c25a3f] dark:text-[#00A699] rounded-full">
            <DollarSign className="w-6 h-6" />
          </div>
        </div>

        {/* Sold Pieces */}
        <div className="p-6 bg-[#f0eded] dark:bg-[#313030]/60 rounded-lg border border-[#ddc0b9]/40 silver-shadow flex items-center justify-between">
          <div>
            <span className="font-label-caps text-[11px] text-[#89726c] dark:text-[#ddc0b9] uppercase tracking-wider">
              One-of-a-Kind Sold
            </span>
            <h3 className="font-serif-header text-3xl font-bold text-[#1b1b1b] dark:text-[#fcf9f8] mt-1">
              {totalPiecesSold} Pieces
            </h3>
          </div>
          <div className="p-3 bg-[#a76526]/10 text-[#a76526] rounded-full">
            <TrendingUp className="w-6 h-6" />
          </div>
        </div>

        {/* Low Stock Alerts */}
        <div className="p-6 bg-[#f0eded] dark:bg-[#313030]/60 rounded-lg border border-[#ddc0b9]/40 silver-shadow flex items-center justify-between">
          <div>
            <span className="font-label-caps text-[11px] text-[#89726c] dark:text-[#ddc0b9] uppercase tracking-wider">
              Out of Stock Alerts
            </span>
            <h3 className="font-serif-header text-3xl font-bold text-[#ba1a1a] dark:text-[#ffb4a2] mt-1">
              {lowStockCount} Items
            </h3>
          </div>
          <div className="p-3 bg-[#ba1a1a]/10 text-[#ba1a1a] rounded-full">
            <AlertTriangle className="w-6 h-6" />
          </div>
        </div>

      </div>

      {/* Add / Edit Product Form (Collapsible / Modal) */}
      {isAddFormOpen && (
        <form
          onSubmit={handleFormSubmit}
          className="p-6 sm:p-8 bg-[#f0eded] dark:bg-[#313030]/80 rounded-lg border border-[#c25a3f] dark:border-[#00A699] shadow-2xl space-y-8 animate-fadeIn"
        >
          <div className="flex justify-between items-center border-b border-[#ddc0b9] pb-4">
            <h3 className="font-serif-header text-2xl font-bold uppercase text-[#1b1b1b] dark:text-[#fcf9f8] flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#c25a3f] dark:text-[#00A699]" />
              <span>{editingProductId ? 'Edit Artisan Product' : 'Add New Artisan Product'}</span>
            </h3>
            <button
              type="button"
              onClick={handleResetForm}
              className="text-[#89726c] hover:text-[#ba1a1a]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Form Sections */}
          <div className="space-y-6">
            
            {/* Title, Price, SKU, Category, Status */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
              <div>
                <label className="block font-label-caps uppercase text-[10px] text-[#89726c] mb-1">
                  Product Title *
                </label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Bisbee Turquoise Shield Ring"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full bg-[#fcf9f8] dark:bg-[#1C1C1C] border border-[#ddc0b9] dark:border-[#89726c] rounded p-2.5 text-xs focus:outline-none"
                />
              </div>

              <div>
                <label className="block font-label-caps uppercase text-[10px] text-[#89726c] mb-1">
                  Price ($) *
                </label>
                <input
                  required
                  type="number"
                  step="0.01"
                  placeholder="425.00"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="w-full bg-[#fcf9f8] dark:bg-[#1C1C1C] border border-[#ddc0b9] dark:border-[#89726c] rounded p-2.5 text-xs focus:outline-none"
                />
              </div>

              <div>
                <label className="block font-label-caps uppercase text-[10px] text-[#89726c] mb-1">
                  SKU Code
                </label>
                <input
                  type="text"
                  placeholder="e.g. R-TQ-088"
                  value={sku}
                  onChange={(e) => setSku(e.target.value)}
                  className="w-full bg-[#fcf9f8] dark:bg-[#1C1C1C] border border-[#ddc0b9] dark:border-[#89726c] rounded p-2.5 text-xs focus:outline-none"
                />
              </div>

              <div>
                <label className="block font-label-caps uppercase text-[10px] text-[#89726c] mb-1">
                  Category *
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value as Category)}
                  className="w-full bg-[#fcf9f8] dark:bg-[#1C1C1C] border border-[#ddc0b9] dark:border-[#89726c] rounded p-2.5 text-xs focus:outline-none"
                >
                  <option value="Rings">Rings</option>
                  <option value="Cuff & Arm">Cuff & Arm Bracelets</option>
                  <option value="Necklaces">Necklaces</option>
                  <option value="New Arrivals">New Arrivals</option>
                </select>
              </div>
            </div>

            {/* Status & Sizing Guide Type */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <label className="block font-label-caps uppercase text-[10px] text-[#89726c] mb-1">
                  Storefront Status Badge *
                </label>
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value as ProductStatus)}
                  className="w-full bg-[#fcf9f8] dark:bg-[#1C1C1C] border border-[#ddc0b9] dark:border-[#89726c] rounded p-2.5 text-xs font-bold focus:outline-none"
                >
                  <option value="In Stock">In Stock (Available to Bag)</option>
                  <option value="Out of Stock">Out of Stock (Inquiry Mode)</option>
                  <option value="Sold">Sold (One-of-a-Kind Archived)</option>
                </select>
              </div>

              <div>
                <label className="block font-label-caps uppercase text-[10px] text-[#89726c] mb-1">
                  Sizing Guide Target
                </label>
                <select
                  value={sizingGuideType}
                  onChange={(e) => setSizingGuideType(e.target.value as any)}
                  className="w-full bg-[#fcf9f8] dark:bg-[#1C1C1C] border border-[#ddc0b9] dark:border-[#89726c] rounded p-2.5 text-xs focus:outline-none"
                >
                  <option value="ring">Ring Size Matrix</option>
                  <option value="cuff">Rigid Cuff / Armband Matrix</option>
                  <option value="necklace">Necklace Chain Guide</option>
                </select>
              </div>
            </div>

            {/* Description */}
            <div className="text-xs">
              <label className="block font-label-caps uppercase text-[10px] text-[#89726c] mb-1">
                Product Description
              </label>
              <textarea
                rows={3}
                placeholder="Describe the craftsmanship, hallmarking, and inspiration behind this piece..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full bg-[#fcf9f8] dark:bg-[#1C1C1C] border border-[#ddc0b9] dark:border-[#89726c] rounded p-2.5 text-xs focus:outline-none"
              />
            </div>

            {/* Materials, Stone Origin, Silver Details */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div>
                <label className="block font-label-caps uppercase text-[10px] text-[#89726c] mb-1">
                  Materials (Comma Separated)
                </label>
                <input
                  type="text"
                  placeholder="e.g. .925 Sterling Silver, Kingman Turquoise"
                  value={materials}
                  onChange={(e) => setMaterials(e.target.value)}
                  className="w-full bg-[#fcf9f8] dark:bg-[#1C1C1C] border border-[#ddc0b9] dark:border-[#89726c] rounded p-2.5 text-xs focus:outline-none"
                />
              </div>

              <div>
                <label className="block font-label-caps uppercase text-[10px] text-[#89726c] mb-1">
                  Stone Origin & Details
                </label>
                <input
                  type="text"
                  placeholder="e.g. Kingman Mine, Arizona. Untreated blue matrix."
                  value={stoneOrigin}
                  onChange={(e) => setStoneOrigin(e.target.value)}
                  className="w-full bg-[#fcf9f8] dark:bg-[#1C1C1C] border border-[#ddc0b9] dark:border-[#89726c] rounded p-2.5 text-xs focus:outline-none"
                />
              </div>

              <div>
                <label className="block font-label-caps uppercase text-[10px] text-[#89726c] mb-1">
                  Silver Hallmarks & Finish
                </label>
                <input
                  type="text"
                  placeholder="e.g. Oxidized heavy gauge silver, hand-stamped."
                  value={silverDetails}
                  onChange={(e) => setSilverDetails(e.target.value)}
                  className="w-full bg-[#fcf9f8] dark:bg-[#1C1C1C] border border-[#ddc0b9] dark:border-[#89726c] rounded p-2.5 text-xs focus:outline-none"
                />
              </div>
            </div>

            {/* Multi-Image Upload Drag & Drop Zone */}
            <div className="space-y-3">
              <label className="block font-label-caps uppercase text-[10px] text-[#89726c]">
                Product Imagery (Drag & Drop Zone or Add Image URL)
              </label>

              <div
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
                className={`p-6 border-2 border-dashed rounded-lg text-center transition-colors cursor-pointer ${
                  dragActive
                    ? 'border-[#c25a3f] bg-[#c25a3f]/10'
                    : 'border-[#ddc0b9] dark:border-[#89726c] bg-[#fcf9f8] dark:bg-[#1C1C1C]'
                }`}
              >
                <Upload className="w-8 h-8 text-[#89726c] mx-auto mb-2" />
                <p className="text-xs font-serif-header text-[#1b1b1b] dark:text-[#fcf9f8] font-bold">
                  Drag and drop high-res jewelry images here, or click to browse files
                </p>
                <p className="text-[10px] text-[#89726c] uppercase tracking-wider mt-1">
                  Macro close-ups of silver stamps & stone matrix recommended
                </p>
              </div>

              {/* Add Image URL Input */}
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Or paste an image URL (e.g. https://...)"
                  value={newImageUrl}
                  onChange={(e) => setNewImageUrl(e.target.value)}
                  className="flex-1 bg-[#fcf9f8] dark:bg-[#1C1C1C] border border-[#ddc0b9] dark:border-[#89726c] rounded p-2 text-xs focus:outline-none"
                />
                <button
                  type="button"
                  onClick={handleAddImageUrl}
                  className="px-4 py-2 bg-[#56423d] text-white rounded text-xs font-label-caps uppercase"
                >
                  Add Image
                </button>
              </div>

              {/* Image Previews */}
              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-3 pt-2">
                {imageUrls.map((img, idx) => (
                  <div key={idx} className="relative aspect-square rounded overflow-hidden group border border-[#ddc0b9]">
                    <img src={img} alt={`Preview ${idx}`} className="w-full h-full object-cover" />
                    <button
                      type="button"
                      onClick={() => handleRemoveImage(idx)}
                      className="absolute top-1 right-1 bg-black/70 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <X className="w-3 h-3" />
                    </button>
                    {idx === 0 && (
                      <span className="absolute bottom-1 left-1 bg-[#c25a3f] text-white text-[8px] font-label-caps uppercase px-1 rounded">
                        Cover
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Form Submit */}
          <div className="pt-4 border-t border-[#ddc0b9] flex justify-end gap-3">
            <button
              type="button"
              onClick={handleResetForm}
              className="px-6 py-2.5 border border-[#89726c] text-[#56423d] dark:text-[#ddc0b9] rounded text-xs font-label-caps uppercase"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-8 py-2.5 bg-[#9c3e25] dark:bg-[#00A699] text-white rounded text-xs font-label-caps uppercase tracking-wider font-bold shadow-lg"
            >
              {editingProductId ? 'Save Product Changes' : 'Save & Publish Product'}
            </button>
          </div>
        </form>
      )}

      {/* Main Inventory Table */}
      <div className="bg-[#f0eded] dark:bg-[#313030]/60 rounded-lg border border-[#ddc0b9]/50 shadow-xl overflow-hidden">
        <div className="p-4 sm:p-6 border-b border-[#ddc0b9]/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="font-serif-header text-xl font-bold uppercase tracking-wider">
              Storefront Product Inventory ({products.length} Items)
            </h3>
            <p className="text-xs text-[#56423d] dark:text-[#ddc0b9]">
              Change status badges instantly. Your updates sync immediately with the live storefront.
            </p>
          </div>

          <button
            onClick={() => {
              if (confirm('Reset inventory back to initial artisan seed products?')) {
                resetProductsToDefault();
                showNotification('Reset inventory to initial artisan items.');
              }
            }}
            className="px-3 py-1.5 border border-[#89726c] text-[11px] text-[#56423d] dark:text-[#ddc0b9] hover:text-[#c25a3f] rounded font-label-caps uppercase flex items-center gap-1.5"
            title="Reset to default seed data"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Reset Initial Seed Data</span>
          </button>
        </div>

        {/* Table View */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[750px]">
            <thead>
              <tr className="border-b border-[#ddc0b9]/60 bg-[#e5e2e1] dark:bg-[#1C1C1C] text-[11px] font-label-caps uppercase tracking-wider text-[#89726c] dark:text-[#ddc0b9]">
                <th className="p-4 w-20">Thumbnail</th>
                <th className="p-4">Product Details</th>
                <th className="p-4">SKU / Category</th>
                <th className="p-4">Price ($)</th>
                <th className="p-4">Dynamic Status Toggle</th>
                <th className="p-4 text-right">Quick Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-[#ddc0b9]/30 text-xs">
              {products.map((p) => (
                <tr key={p.id} className="hover:bg-[#fcf9f8]/60 dark:hover:bg-[#1C1C1C]/40 transition-colors">
                  
                  {/* Thumbnail */}
                  <td className="p-4">
                    <img
                      src={p.primaryImage}
                      alt={p.title}
                      className="w-14 h-14 object-cover rounded border border-[#ddc0b9]/50 shadow-sm"
                    />
                  </td>

                  {/* Title & Description */}
                  <td className="p-4">
                    <h4 className="font-serif-header text-sm font-bold text-[#1b1b1b] dark:text-[#fcf9f8]">
                      {p.title}
                    </h4>
                    <p className="text-[11px] text-[#89726c] dark:text-[#ddc0b9] line-clamp-1 max-w-xs mt-0.5">
                      {p.stoneOrigin}
                    </p>
                  </td>

                  {/* SKU & Category */}
                  <td className="p-4">
                    <span className="font-mono text-xs block font-bold text-[#1b1b1b] dark:text-[#fcf9f8]">
                      {p.sku}
                    </span>
                    <span className="text-[10px] font-label-caps uppercase text-[#89726c]">
                      {p.category}
                    </span>
                  </td>

                  {/* Price */}
                  <td className="p-4 font-serif-header font-bold text-sm">
                    ${p.price.toFixed(2)}
                  </td>

                  {/* Dynamic Status Dropdown / Toggle */}
                  <td className="p-4">
                    <select
                      value={p.status}
                      onChange={(e) => {
                        const newStatus = e.target.value as ProductStatus;
                        updateProductStatus(p.id, newStatus);
                        showNotification(`Status for "${p.title}" changed to "${newStatus}"!`);
                      }}
                      className={`p-2 rounded text-xs font-label-caps uppercase tracking-wider font-bold border transition-colors cursor-pointer ${
                        p.status === 'In Stock'
                          ? 'bg-[#007168]/20 text-[#007168] dark:text-[#7af7e8] border-[#007168]/40'
                          : p.status === 'Out of Stock'
                          ? 'bg-[#ba1a1a]/20 text-[#ba1a1a] dark:text-[#ffb4a2] border-[#ba1a1a]/40'
                          : 'bg-[#56423d]/20 text-[#56423d] dark:text-[#ddc0b9] border-[#56423d]/40'
                      }`}
                    >
                      <option value="In Stock">In Stock</option>
                      <option value="Out of Stock">Out of Stock</option>
                      <option value="Sold">Sold (Archived)</option>
                    </select>
                  </td>

                  {/* Quick Action Buttons */}
                  <td className="p-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      
                      {/* Edit Button */}
                      <button
                        onClick={() => handleStartEdit(p)}
                        className="p-2 text-[#56423d] dark:text-[#ddc0b9] hover:text-[#c25a3f] dark:hover:text-[#00A699] transition-colors rounded hover:bg-[#ddc0b9]/20"
                        title="Edit Product Details"
                      >
                        <Edit className="w-4 h-4" />
                      </button>

                      {/* Archive Toggle */}
                      <button
                        onClick={() => {
                          const nextStatus: ProductStatus = p.status === 'Sold' ? 'In Stock' : 'Sold';
                          updateProductStatus(p.id, nextStatus);
                          showNotification(`Product "${p.title}" status set to ${nextStatus}.`);
                        }}
                        className="p-2 text-[#56423d] dark:text-[#ddc0b9] hover:text-[#a76526] transition-colors rounded hover:bg-[#ddc0b9]/20"
                        title="Archive / Set as Sold"
                      >
                        <Archive className="w-4 h-4" />
                      </button>

                      {/* Remove Button */}
                      <button
                        onClick={() => {
                          if (confirm(`Are you sure you want to remove "${p.title}"?`)) {
                            removeProduct(p.id);
                            showNotification(`Removed "${p.title}" from inventory.`);
                          }
                        }}
                        className="p-2 text-[#89726c] hover:text-[#ba1a1a] transition-colors rounded hover:bg-[#ba1a1a]/10"
                        title="Remove Product"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>

                    </div>
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>

    </div>
  );
};
