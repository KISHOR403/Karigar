# Karigar — Database Architecture & Conventions

## Database Stack
- **Engine**: PostgreSQL 16
- **ORM / Query Builder**: Prisma ORM with connection pooling
- **Identifier Strategy**: RFC 4122 UUID v4 for all primary keys (avoids ID enumeration and facilitates distributed offline generation)

## Core Domain Entities
1. **User & Auth**: `User`, `UserProfile`, `Role` (CUSTOMER, ARTISAN, ADMIN)
2. **Artisan & Atelier**: `ArtisanProfile`, `ArtisanLocation`, `ArtisanVerification`, `ArtisanMedia`, `ArtisanCategory`
3. **Taxonomy & Discovery**: `Category`, `Tag`, `Collection`, `CollectionProduct`
4. **Catalog & Inventory**: `Product`, `ProductImage`, `ProductVideo`, `ProductVariant`, `ProductTag`
5. **Engagement & Social**: `Follow`, `Wishlist`, `Review`
6. **Commerce & Commissioning**: `Cart`, `CartItem`, `Order`, `OrderItem`, `Payment`, `Shipment`, `CustomOrderRequest`
7. **System & Telemetry**: `Notification`, `AuditLog`

## Indexing Strategy
Critical multi-column and unique indexes are established for:
- `users(email)`
- `artisan_profiles(slug)`, `artisan_profiles(craft_name)`, `artisan_profiles(is_featured)`
- `products(slug)`, `products(artisan_id)`, `products(category_id)`, `products(status)`
- `orders(order_number)`, `orders(user_id)`
- Composite unique constraints for `follows(user_id, artisan_id)` and `wishlists(user_id, product_id)`
