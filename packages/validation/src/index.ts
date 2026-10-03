import { z } from 'zod';

// ==========================================
// Pagination & Common Queries
// ==========================================
export const paginationQuerySchema = z.object({
  page: z.coerce.number().int().positive().default(1),
  limit: z.coerce.number().int().min(1).max(100).default(20),
  search: z.string().optional(),
  sortBy: z.string().optional(),
  sortOrder: z.enum(['asc', 'desc']).default('desc'),
});

export type PaginationQuery = z.infer<typeof paginationQuerySchema>;

// ==========================================
// Authentication Schemas
// ==========================================
export const registerSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
    .regex(/[0-9]/, 'Password must contain at least one number'),
  firstName: z.string().min(2, 'First name is required').max(50),
  lastName: z.string().min(1, 'Last name is required').max(50),
  role: z.enum(['CUSTOMER', 'ARTISAN']).default('CUSTOMER'),
});

export type RegisterInput = z.infer<typeof registerSchema>;

export const loginSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(1, 'Password is required'),
});

export type LoginInput = z.infer<typeof loginSchema>;

// ==========================================
// Artisan Profile Schemas
// ==========================================
export const createArtisanProfileSchema = z.object({
  artisanName: z.string().min(2, 'Name must be at least 2 characters').max(100),
  slug: z
    .string()
    .min(2)
    .max(100)
    .regex(/^[a-z0-9-]+$/, 'Slug can only contain lowercase letters, numbers, and hyphens'),
  craftName: z.string().min(2, 'Craft title is required'),
  heritageLineage: z.string().max(200).optional(),
  experienceYears: z.coerce.number().int().min(0).max(80),
  tagline: z.string().min(5, 'Tagline is required').max(180),
  bio: z.string().min(20, 'Please provide an introductory bio').max(1000),
  story: z.string().min(50, 'Please share your artisan journey and technique story'),
  avatarUrl: z.string().url('Avatar must be a valid URL'),
  coverImageUrl: z.string().url().optional(),
  villageOrTown: z.string().min(2, 'Village or Town is required'),
  district: z.string().min(2, 'District is required'),
  state: z.string().min(2, 'State is required'),
  country: z.string().default('India'),
  pincode: z.string().regex(/^\d{6}$/, 'Enter a valid 6-digit Indian PIN code').optional(),
});

export type CreateArtisanProfileInput = z.infer<typeof createArtisanProfileSchema>;

export const updateArtisanProfileSchema = createArtisanProfileSchema.partial();
export type UpdateArtisanProfileInput = z.infer<typeof updateArtisanProfileSchema>;

// ==========================================
// Product Schemas
// ==========================================
export const createProductSchema = z.object({
  title: z.string().min(3, 'Title must be at least 3 characters').max(150),
  slug: z
    .string()
    .min(3)
    .max(150)
    .regex(/^[a-z0-9-]+$/, 'Slug can only contain lowercase letters, numbers, and hyphens'),
  shortDescription: z.string().min(10).max(300),
  fullStory: z.string().min(30, 'Full story describing materials and process is required'),
  basePrice: z.coerce.number().positive('Price must be greater than zero'),
  categoryId: z.string().uuid('Valid Category ID is required'),
  materials: z.array(z.string()).min(1, 'At least one material is required'),
  dimensions: z.string().optional(),
  weightGrams: z.coerce.number().positive().optional(),
  craftTechnique: z.string().min(2, 'Craft technique description required'),
  makingDurationDays: z.coerce.number().int().min(1, 'Making duration in days is required'),
  careInstructions: z.string().optional(),
  giTagCertified: z.boolean().default(false),
  regionOfOrigin: z.string().min(2, 'Region of origin is required'),
  isCustomizable: z.boolean().default(false),
  tags: z.array(z.string()).default([]),
  mediaUrls: z.array(z.string().url()).min(1, 'At least one product image is required'),
});

export type CreateProductInput = z.infer<typeof createProductSchema>;

// ==========================================
// Custom Order Request Schema
// ==========================================
export const customOrderRequestSchema = z.object({
  artisanId: z.string().uuid(),
  title: z.string().min(5, 'Title of requested custom work is required').max(150),
  details: z.string().min(20, 'Please describe desired custom dimensions, materials, and details'),
  estimatedBudgetMax: z.coerce.number().positive().optional(),
  requestedDeadline: z.string().datetime().optional(),
  referenceImages: z.array(z.string().url()).optional(),
});

export type CustomOrderRequestInput = z.infer<typeof customOrderRequestSchema>;
