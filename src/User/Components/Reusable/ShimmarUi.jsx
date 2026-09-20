import React, { useState, useMemo } from "react";
import {
  FiSearch,
  FiHome,
  FiUser,
  FiShoppingCart,
  FiMenu,
  FiX,
  FiStar,
  FiHeart,
  FiPlus,
  FiCheck,
  FiRefreshCw,
  FiSliders,
  FiZap,
  FiShoppingBag,
} from "react-icons/fi";

const SAMPLE_PRODUCTS = [
  {
    id: 1,
    title: "Aura Premium Wireless Noise-Canceling Headphones",
    category: "Electronics",
    price: 189.99,
    originalPrice: 249.99,
    rating: 4.8,
    reviews: 324,
    badge: "Bestseller",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80",
    inStock: true,
  },
  {
    id: 2,
    title: "Minimalist Titanium Automatic Chronograph Watch",
    category: "Accessories",
    price: 299.0,
    originalPrice: 380.0,
    rating: 4.9,
    reviews: 142,
    badge: "Trending",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80",
    inStock: true,
  },
  {
    id: 3,
    title: "Pulse Pro Urban Breathable Running Sneakers",
    category: "Fashion",
    price: 129.5,
    originalPrice: 159.99,
    rating: 4.7,
    reviews: 218,
    badge: "Hot Item",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80",
    inStock: true,
  },
  {
    id: 4,
    title: "Smart Fitness Tracker with AMOLED Color Display",
    category: "Electronics",
    price: 89.99,
    originalPrice: 119.99,
    rating: 4.6,
    reviews: 512,
    badge: "New Arrival",
    image:
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=600&q=80",
    inStock: true,
  },
  {
    id: 5,
    title: "Ergonomic Desk Lamp with Wireless Phone Charging Base",
    category: "Home & Living",
    price: 64.99,
    originalPrice: 79.99,
    rating: 4.5,
    reviews: 98,
    badge: "Sale",
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600&q=80",
    inStock: true,
  },
  {
    id: 6,
    title: "Handcrafted Leather Travel Duffle Bag",
    category: "Accessories",
    price: 175.0,
    originalPrice: 220.0,
    rating: 4.9,
    reviews: 84,
    badge: "Limited",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80",
    inStock: true,
  },
  {
    id: 7,
    title: "Ultra-HD Smart Home Wireless Security Camera",
    category: "Electronics",
    price: 119.99,
    originalPrice: 149.99,
    rating: 4.7,
    reviews: 190,
    badge: "Popular",
    image:
      "https://images.unsplash.com/photo-1558089687-f282ffcbc126?w=600&q=80",
    inStock: true,
  },
  {
    id: 8,
    title: "Modern Matte Ceramic Coffee Mug & Warmer Set",
    category: "Home & Living",
    price: 42.0,
    originalPrice: 55.0,
    rating: 4.8,
    reviews: 167,
    badge: "Top Gift",
    image:
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&q=80",
    inStock: true,
  },
];

const Shimmer = ({ className = "" }) => (
  <div
    className={`relative overflow-hidden bg-slate-200 dark:bg-slate-800 ${className}`}
  >
    <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.6s_infinite] bg-gradient-to-r from-transparent via-white/70 dark:via-slate-700/60 to-transparent" />
  </div>
);

const ProductCardSkeleton = () => (
  <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-4 shadow-sm flex flex-col justify-between h-full space-y-4 transition-all duration-300">
    <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800">
      <Shimmer className="w-full h-full" />

      <div className="absolute top-3 left-3">
        <Shimmer className="h-5 w-16 rounded-full" />
      </div>

      <div className="absolute top-3 right-3">
        <Shimmer className="h-8 w-8 rounded-full" />
      </div>
    </div>

    <div className="space-y-3 flex-1">
      <div className="flex items-center justify-between">
        <Shimmer className="h-3.5 w-20 rounded-md" />
        <Shimmer className="h-3.5 w-14 rounded-md" />
      </div>

      <div className="space-y-2 pt-1">
        <Shimmer className="h-4 w-full rounded-md" />
        <Shimmer className="h-4 w-3/4 rounded-md" />
      </div>
    </div>

    <div className="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-slate-800">
      <div className="space-y-1">
        <Shimmer className="h-6 w-20 rounded-md" />
        <Shimmer className="h-3.5 w-12 rounded-md" />
      </div>

      <Shimmer className="h-9 w-28 rounded-xl" />
    </div>
  </div>
);

const ProductCard = ({ product, onAddToCart }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [added, setAdded] = useState(false);

  const handleCartClick = () => {
    onAddToCart(product);
    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 1500);
  };

  return (
    <div className="group bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-4 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full space-y-4">
      <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        <span className="absolute top-3 left-3 bg-[#3338a0] text-[#fcc61d] text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-md">
          {product.badge}
        </span>

        <button
          onClick={() => setIsWishlisted(!isWishlisted)}
          className={`absolute top-3 right-3 p-2 rounded-full transition-colors shadow-sm backdrop-blur-md ${
            isWishlisted
              ? "bg-red-500 text-white"
              : "bg-white/80 dark:bg-slate-900/80 text-slate-600 dark:text-slate-300 hover:text-red-500"
          }`}
          title="Add to Wishlist"
        >
          <FiHeart
            className={`w-4 h-4 ${isWishlisted ? "fill-white" : ""}`}
          />
        </button>
      </div>

      <div className="space-y-2 flex-1">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-bold tracking-wider text-[#3338a0] dark:text-[#fcc61d] uppercase">
            {product.category}
          </span>

          <div className="flex items-center text-amber-400 text-xs font-semibold">
            <FiStar className="w-3.5 h-3.5 fill-amber-400 mr-1" />
            {product.rating}

            <span className="text-slate-400 font-normal ml-0.5">
              ({product.reviews})
            </span>
          </div>
        </div>

        <h3 className="font-bold text-slate-800 dark:text-slate-100 text-sm line-clamp-2 leading-snug group-hover:text-[#3338a0] dark:group-hover:text-[#fcc61d] transition-colors">
          {product.title}
        </h3>
      </div>

      <div className="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-slate-800">
        <div>
          <div className="text-base font-extrabold text-slate-900 dark:text-white">
            ${product.price.toFixed(2)}
          </div>

          {product.originalPrice && (
            <div className="text-xs text-slate-400 line-through">
              ${product.originalPrice.toFixed(2)}
            </div>
          )}
        </div>

        <button
          onClick={handleCartClick}
          className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all shadow-sm active:scale-95 ${
            added
              ? "bg-emerald-600 text-white"
              : "bg-[#3338a0] hover:bg-[#282c80] text-white active:bg-[#fcc61d] active:text-[#3338a0]"
          }`}
        >
          {added ? (
            <>
              <FiCheck className="w-3.5 h-3.5" />
              Added
            </>
          ) : (
            <>
              <FiPlus className="w-3.5 h-3.5" />
              Add to Cart
            </>
          )}
        </button>
      </div>
    </div>
  );
};

const Header = ({ onSearch, cartCount }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (onSearch) {
      onSearch(searchTerm);
    }
  };

  const handleInputChange = (e) => {
    const val = e.target.value;

    setSearchTerm(val);

    if (onSearch) {
      onSearch(val);
    }
  };

  return (
    <header className="w-full bg-[#3338a0] text-white shadow-xl sticky top-0 z-50 border-b border-white/10 backdrop-blur-md bg-opacity-95 px-4 sm:px-8 lg:px-12 py-4">
      <div className="w-full">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer group">
            <img
              src="/img/logo.png"
              alt="Logo"
              className="h-20 w-auto object-contain transition-transform group-hover:scale-105"
              onError={(e) => {
                e.target.onerror = null;
                e.target.style.display = "none";

                if (e.target.nextSibling) {
                  e.target.nextSibling.style.display = "flex";
                }
              }}
            />

            <div className="hidden h-20 w-auto items-center gap-2">
              <div className="w-12 h-12 rounded-2xl bg-[#fcc61d] flex items-center justify-center text-[#3338a0] font-black text-xl shadow-lg">
                <FiShoppingBag className="w-7 h-7 stroke-[2.5]" />
              </div>

              <span className="text-2xl font-extrabold tracking-tight text-white block">
                AURA
                <span className="text-[#fcc61d]">STORE</span>
              </span>
            </div>
          </div>

          {/* Search */}
          <form
            onSubmit={handleSubmit}
            className="hidden sm:flex flex-1 max-w-lg mx-8"
          >
            <div className="relative w-full">
              <input
                type="text"
                className="w-full py-2.5 pl-11 pr-24 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:bg-white/15 focus:border-[#fcc61d] focus:ring-2 focus:ring-[#fcc61d]/30 outline-none transition-all text-sm font-medium"
                placeholder="Search products, categories, deals..."
                value={searchTerm}
                onChange={handleInputChange}
              />

              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#fcc61d]">
                <FiSearch className="w-5 h-5" />
              </span>

              <button
                type="submit"
                className="absolute right-1.5 top-1/2 transform -translate-y-1/2 bg-[#fcc61d] hover:bg-[#eab00c] text-[#3338a0] px-4 py-1.5 rounded-xl font-bold text-xs transition-colors shadow-md"
              >
                Search
              </button>
            </div>
          </form>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            <button
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white transition-all border border-white/10 flex items-center justify-center group"
              title="Home"
            >
              <FiHome className="w-5 h-5 group-hover:text-[#fcc61d] transition-colors" />
            </button>

            <button
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white transition-all border border-white/10 flex items-center justify-center group"
              title="Profile"
            >
              <FiUser className="w-5 h-5 group-hover:text-[#fcc61d] transition-colors" />
            </button>

            <button
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white transition-all border border-white/10 flex items-center justify-center relative group"
              title="Cart"
            >
              <FiShoppingCart className="w-5 h-5 group-hover:text-[#fcc61d] transition-colors" />

              <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#fcc61d] text-[#3338a0] text-[11px] font-black rounded-full flex items-center justify-center shadow">
                {cartCount}
              </span>
            </button>
          </nav>

          {/* Mobile Controls */}
          <div className="md:hidden flex items-center gap-3">
            <button className="relative p-2 rounded-xl bg-white/10 text-white border border-white/10">
              <FiShoppingCart size={20} />

              <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#fcc61d] text-[#3338a0] text-[9px] font-black rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-white/10 text-white focus:outline-none border border-white/10"
            >
              {mobileMenuOpen ? (
                <FiX size={22} />
              ) : (
                <FiMenu size={22} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-white/10 space-y-4 pb-2 animate-fadeIn">
            {/* Mobile Search */}
            <form onSubmit={handleSubmit} className="w-full">
              <div className="relative w-full">
                <input
                  type="text"
                  className="w-full py-2.5 pl-11 pr-24 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none text-sm"
                  placeholder="Search products or shops..."
                  value={searchTerm}
                  onChange={handleInputChange}
                />

                <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#fcc61d]">
                  <FiSearch className="w-5 h-5" />
                </span>

                <button
                  type="submit"
                  className="absolute right-1.5 top-1/2 transform -translate-y-1/2 bg-[#fcc61d] text-[#3338a0] px-4 py-1.5 rounded-xl font-bold text-xs"
                >
                  Search
                </button>
              </div>
            </form>

            {/* Mobile Navigation */}
            <nav className="flex flex-col space-y-2">
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-medium text-sm transition-colors flex items-center gap-3"
              >
                <FiHome className="w-4 h-4 text-[#fcc61d]" />
                Home
              </button>

              <button
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-medium text-sm transition-colors flex items-center gap-3"
              >
                <FiShoppingBag className="w-4 h-4 text-[#fcc61d]" />
                Featured Shop
              </button>

              <button
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-medium text-sm transition-colors flex items-center gap-3"
              >
                <FiUser className="w-4 h-4 text-[#fcc61d]" />
                User Profile
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [toastMessage, setToastMessage] = useState(null);

  const categories = [
    "All",
    "Electronics",
    "Fashion",
    "Accessories",
    "Home & Living",
  ];

  const handleAddToCart = (product) => {
    setCartItems((prev) => [...prev, product]);

    setToastMessage(
      `Added "${product.title.slice(0, 22)}..." to your cart!`
    );

    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const filteredProducts = useMemo(() => {
    return SAMPLE_PRODUCTS.filter((item) => {
      const matchesCategory =
        selectedCategory === "All" ||
        item.category === selectedCategory;

      const matchesSearch =
        item.title
          .toLowerCase()
          .includes(searchQuery.toLowerCase()) ||
        item.category
          .toLowerCase()
          .includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 font-sans flex flex-col antialiased">
      <style>{`
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>

      <Header
        onSearch={(term) => setSearchQuery(term)}
        cartCount={cartItems.length}
      />

      {/* Main Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-8 py-8 space-y-6">
        {/* Category Filters */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? "bg-[#3338a0] text-[#fcc61d] shadow-md"
                    : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center text-xs text-slate-500 font-semibold gap-2">
            <FiSliders className="w-4 h-4 text-[#3338a0] dark:text-[#fcc61d]" />

            Showing{" "}
            {isLoading
              ? "8 Skeletons"
              : `${filteredProducts.length} Products`}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {isLoading ? (
            Array.from({ length: 8 }).map((_, idx) => (
              <ProductCardSkeleton key={idx} />
            ))
          ) : filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
              />
            ))
          ) : (
            <div className="col-span-full py-16 text-center space-y-3">
              <div className="w-16 h-16 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center mx-auto text-slate-400">
                <FiSearch className="w-8 h-8" />
              </div>

              <h3 className="text-base font-bold text-slate-800 dark:text-slate-200">
                No products match your search
              </h3>

              <p className="text-xs text-slate-500">
                Try adjusting your filters or search keywords.
              </p>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#3338a0] text-white border-t border-white/10 mt-12 py-6 px-4 sm:px-8 text-center text-xs text-white/70">
        <p className="font-medium">
          © 2026{" "}
          <span className="text-[#fcc61d] font-bold">
            AURA STORE
          </span>
          . Built with dynamic React Shimmer UI & Tailwind CSS.
        </p>
      </footer>
    </div>
  );
}