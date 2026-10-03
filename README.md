# Karigar (कारीगर)

> **Discover things made by hand.**  
> An editorial marketplace, creator platform, and sanctuary connecting independent Indian master artisans with people who cherish authentic handmade craft.

---

## 🏛️ Architecture Overview

Karigar is built as a **Modular Monolith** with strict domain boundaries, ready to scale from day one to 100,000+ artisans and millions of products.

```
Karigar Monorepo
├── apps/
│   ├── web/               # Next.js 15 App Router frontend (Editorial commerce & discovery)
│   ├── api/               # NestJS Modular Monolith API (/api/v1) with Swagger docs
│   └── worker/            # BullMQ background async processor (media & notifications)
├── packages/
│   ├── ui/                # Shared editorial design tokens & tactile UI primitives
│   ├── database/          # PostgreSQL + Prisma ORM schema & seed data
│   ├── config/            # Indian craft taxonomy, regions, and platform settings
│   ├── types/             # Shared TypeScript domain contracts & API envelopes
│   ├── validation/        # Shared Zod validation schemas
│   ├── eslint-config/     # Strict linting standards
│   └── tsconfig/          # Shared TypeScript configurations
├── infrastructure/
│   ├── docker/            # Docker compose (PostgreSQL, Redis, MinIO) & Dockerfiles
│   ├── nginx/             # Nginx reverse proxy configuration
│   ├── terraform/         # AWS Mumbai (ap-south-1) S3 media storage
│   └── kubernetes/        # Kubernetes production deployment manifests
└── docs/
    ├── architecture/      # Monorepo architecture & scaling blueprint
    ├── database/          # PostgreSQL schema & indexing strategies
    ├── api/               # REST conventions, versioning, and envelope specifications
    └── product/           # Editorial manifesto & craft philosophy
```

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js >= 20.0.0
- pnpm >= 9.0.0 (or npm)
- Docker & Docker Compose (optional for local DB/Redis)

### 1. Installation
```bash
# Clone the repository
git clone <repo-url>
cd Karigar

# Install dependencies across all monorepo workspaces
pnpm install
```

### 2. Environment Setup
```bash
# Copy root environment template
cp .env.example .env
```

### 3. Local Infrastructure (PostgreSQL & Redis)
```bash
# Start local PostgreSQL (port 5432) and Redis (port 6379)
docker compose -f infrastructure/docker/docker-compose.yml up -d
```

### 4. Database Setup & Seeding
```bash
# Generate Prisma client
pnpm db:generate

# Run migrations or push schema
pnpm --filter @karigar/database db:push

# Seed with authentic master artisan lineages
pnpm db:seed
```

### 5. Running the Monorepo Services
```bash
# Start Next.js web application (http://localhost:3000)
pnpm dev:web

# Start NestJS REST API with Swagger (http://localhost:4000/api/v1 and http://localhost:4000/api/docs)
pnpm dev:api

# Start BullMQ Background Worker
pnpm dev:worker

# Or start all workspaces concurrently via Turborepo
pnpm dev
```

---

## 🧭 Completed Foundation
- [x] Turborepo + pnpm workspaces monorepo architecture.
- [x] Shared packages: `@karigar/ui`, `@karigar/database`, `@karigar/types`, `@karigar/validation`, `@karigar/config`, `@karigar/tsconfig`, `@karigar/eslint-config`.
- [x] PostgreSQL database schema with 23 domain models, UUIDs, indexes, and constraints.
- [x] Master artisan and heritage product seed dataset (Dr. Ismail Khatri, Bashir Ahmad Bhat, Devnath Kashyap, Syed Ameen).
- [x] NestJS 11 Modular Monolith with URI versioning (`/api/v1`), Swagger documentation, global exception filters, and response transformers.
- [x] BullMQ + Redis async worker architecture.
- [x] Next.js 15 App Router frontend with warm editorial aesthetic, design tokens, Google Fonts (Playfair Display + Plus Jakarta Sans).
- [x] Responsive editorial homepage with Hero, Featured Makers, Intent Exploration, Craft Stories, Product Grid, and Regional Discovery.
- [x] Deep Public Artisan Profile Route (`/artisans/[slug]`) with biography, process photo essay, catalog, and custom commissioning inquiry modal.
- [x] Deep Public Product Detail Route (`/products/[slug]`) with image gallery, craft specifications, maker lineage, and acquisition actions.
- [x] Loading, Error, and 404 (`not-found`) states.
- [x] Comprehensive documentation in `docs/`.
