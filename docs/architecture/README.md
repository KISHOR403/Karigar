# Karigar — Architecture Blueprint

## Architectural Principle: Modular Monolith

Karigar is intentionally architected as a **Modular Monolith** rather than fragmented microservices. At our current phase through scaling to 100,000+ artisans and millions of products:
- Single deployment unit and shared database schema prevent distributed transaction overhead and split-brain states.
- Clean domain module boundaries in NestJS (`modules/*`) ensure business logic is isolated with distinct controllers, services, DTOs, and repositories.
- When an individual domain (such as `media-processing`, `search`, or `notifications`) requires independent autoscaling, it can be extracted into an independent microservice with zero boundary refactoring.

```
Karigar Platform
├── apps/web         (Next.js 15 App Router — Editorial Discovery & Patron Experience)
├── apps/api         (NestJS Modular Monolith — RESTful Domain Engine)
├── apps/worker      (BullMQ + Redis — Async Media & Notification Processor)
└── packages/*       (Shared UI, Database, Config, Validation, Types)
```

## Storage & CDN Architecture
Artisan media (high-resolution workshop photography, making videos, certificates of provenance) uses an S3-compatible abstraction (`STORAGE_DRIVER=s3`) served behind an edge CDN with WebP/AVIF automatic optimization.

## Caching & Asynchronous Queues
Redis serves as the low-latency caching layer for:
- Frequently queried artisan profiles and public slug lookups
- BullMQ persistent job queues for asynchronous background tasks
- Rate limiting and session management
