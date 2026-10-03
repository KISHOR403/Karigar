# Karigar — API Conventions & Standards

## API Versioning from Day One
All API routes are explicitly versioned with a URI prefix:
```
/api/v1/:resource
```
Interactive Swagger / OpenAPI UI is accessible at `/api/docs`.

## Standard Envelope Responses

### Success Response (`ApiResponse<T>`)
```json
{
  "success": true,
  "data": { ... },
  "timestamp": "2026-10-03T07:30:00.000Z"
}
```

### Paginated Response (`PaginatedResponse<T>`)
```json
{
  "success": true,
  "data": [ ... ],
  "meta": {
    "page": 1,
    "limit": 20,
    "totalItems": 142,
    "totalPages": 8,
    "hasNextPage": true,
    "hasPrevPage": false
  },
  "timestamp": "2026-10-03T07:30:00.000Z"
}
```

### Error Response (`ApiError`)
```json
{
  "success": false,
  "statusCode": 404,
  "message": "Artisan atelier with slug 'ismail-khatri' not found",
  "timestamp": "2026-10-03T07:30:00.000Z",
  "path": "/api/v1/artisans/ismail-khatri"
}
```
