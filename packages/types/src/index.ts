// ==========================================
// User & Authentication Domain
// ==========================================
export type UserRole = 'CUSTOMER' | 'ARTISAN' | 'ADMIN';

export interface User {
  id: string;
  email: string;
  role: UserRole;
  isActive: boolean;
  isVerified: boolean;
  createdAt: string;
  updatedAt: string;
  profile?: UserProfile;
  artisanProfile?: ArtisanProfile;
}

export interface UserProfile {
  id: string;
  userId: string;
  firstName: string;
  lastName: string;
  phoneNumber?: string;
  avatarUrl?: string;
  bio?: string;
  city?: string;
  state?: string;
  country: string;
}

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
}

export interface AuthResponse {
  user: User;
  tokens: AuthTokens;
}

// ==========================================
// Artisan & Craft Domain
// ==========================================
export interface ArtisanLocation {
  id: string;
  villageOrTown: string;
  district: string;
  state: string;
  country: string;
  pincode?: string;
  latitude?: number;
  longitude?: number;
}

export interface ArtisanVerification {
  id: string;
  isIdentityVerified: boolean;
  isMasterArtisan: boolean;
  nationalAwardee: boolean;
  giCertified: boolean;
  verifiedAt?: string;
  notes?: string;
}

export interface ArtisanMedia {
  id: string;
  type: 'PORTRAIT' | 'WORKSHOP' | 'PROCESS' | 'ARCHIVE_VIDEO';
  url: string;
  caption?: string;
  displayOrder: number;
}

export interface ArtisanProfile {
  id: string;
  userId: string;
  artisanName: string;
  slug: string;
  craftName: string;
  heritageLineage?: string;
  experienceYears: number;
  tagline: string;
  bio: string;
  story: string;
  avatarUrl: string;
  coverImageUrl?: string;
  isFeatured: boolean;
  location: ArtisanLocation;
  verification: ArtisanVerification;
  media?: ArtisanMedia[];
  followerCount: number;
  productCount: number;
  createdAt: string;
  updatedAt: string;
}

// ==========================================
// Product & Inventory Domain
// ==========================================
export type ProductStatus = 'DRAFT' | 'PUBLISHED' | 'ARCHIVED' | 'OUT_OF_STOCK';

export interface ProductMedia {
  id: string;
  url: string;
  altText: string;
  isPrimary: boolean;
  displayOrder: number;
  mediaType: 'IMAGE' | 'VIDEO';
}

export interface ProductVariant {
  id: string;
  sku: string;
  title: string;
  price: number;
  compareAtPrice?: number;
  stockQuantity: number;
  attributes: Record<string, string>;
}

export interface ProductSpecification {
  materials: string[];
  dimensions?: string;
  weightGrams?: number;
  craftTechnique: string;
  makingDurationDays: number;
  careInstructions?: string;
  giTagCertified?: boolean;
  regionOfOrigin: string;
}

export interface Product {
  id: string;
  artisanId: string;
  artisan?: Partial<ArtisanProfile>;
  title: string;
  slug: string;
  shortDescription: string;
  fullStory: string;
  status: ProductStatus;
  basePrice: number;
  currency: string;
  category: Category;
  specifications: ProductSpecification;
  media: ProductMedia[];
  variants: ProductVariant[];
  tags: string[];
  isCustomizable: boolean;
  isFeatured: boolean;
  reviewCount: number;
  averageRating: number;
  createdAt: string;
  updatedAt: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  imageUrl?: string;
  parentId?: string;
}

export interface Collection {
  id: string;
  title: string;
  slug: string;
  description: string;
  curatorNote?: string;
  heroImageUrl: string;
  isEditorial: boolean;
  products?: Product[];
}

// ==========================================
// Story & Discovery Domain
// ==========================================
export interface CraftStory {
  id: string;
  title: string;
  slug: string;
  subtitle: string;
  body: string;
  heroImageUrl: string;
  readTimeMinutes: number;
  artisanSlug?: string;
  artisanName?: string;
  region: string;
  craftName: string;
  publishedAt: string;
}

// ==========================================
// Custom Order Request Domain
// ==========================================
export type CustomOrderStatus = 'PENDING' | 'ACCEPTED' | 'ESTIMATED' | 'IN_PRODUCTION' | 'COMPLETED' | 'DECLINED';

export interface CustomOrderRequest {
  id: string;
  customerId: string;
  artisanId: string;
  title: string;
  details: string;
  referenceImages?: string[];
  estimatedBudgetMax?: number;
  requestedDeadline?: string;
  status: CustomOrderStatus;
  artisanQuoteNotes?: string;
  quotedPrice?: number;
  createdAt: string;
  updatedAt: string;
}

// ==========================================
// Orders, Cart, & Payments
// ==========================================
export type OrderStatus = 'PENDING' | 'CONFIRMED' | 'CRAFTING' | 'SHIPPED' | 'DELIVERED' | 'CANCELLED';

export interface CartItem {
  id: string;
  productId: string;
  productTitle: string;
  productSlug: string;
  variantId?: string;
  variantTitle?: string;
  price: number;
  quantity: number;
  imageUrl: string;
  artisanName: string;
}

export interface Cart {
  items: CartItem[];
  subtotal: number;
  shipping: number;
  total: number;
}

// ==========================================
// Standard API Envelope Formats
// ==========================================
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  timestamp: string;
}

export interface PaginationMeta {
  page: number;
  limit: number;
  totalItems: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

export interface PaginatedResponse<T> {
  success: boolean;
  data: T[];
  meta: PaginationMeta;
  timestamp: string;
}

export interface ApiError {
  success: false;
  statusCode: number;
  message: string;
  errors?: string[] | Record<string, string[]>;
  timestamp: string;
  path?: string;
}
