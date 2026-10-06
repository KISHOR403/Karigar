/**
 * API client helper for Karigar.
 * Supports both internal server-to-server calls via Vercel service binding (API_URL)
 * and public browser client-side calls via the shared /api rewrite.
 */

export function getApiBaseUrl(): string {
  // Server-side: prefer Vercel service binding internal URL
  if (typeof window === 'undefined') {
    if (process.env.API_URL) {
      return process.env.API_URL.replace(/\/$/, '');
    }
    if (process.env.NEXT_PUBLIC_API_URL) {
      return process.env.NEXT_PUBLIC_API_URL.replace(/\/$/, '');
    }
    return 'http://localhost:4000';
  }

  // Client-side (browser): relative /api on the same domain (rewritten by Vercel to api service)
  return '';
}

export async function fetchApi<T = unknown>(
  endpoint: string,
  options: RequestInit = {},
): Promise<T> {
  const baseUrl = getApiBaseUrl();
  const cleanEndpoint = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
  
  // Ensure the endpoint hits /api if not already prefixed
  const path = cleanEndpoint.startsWith('/api') ? cleanEndpoint : `/api/v1${cleanEndpoint}`;
  const url = `${baseUrl}${path}`;

  const res = await fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });

  if (!res.ok) {
    const errorBody = await res.text().catch(() => '');
    throw new Error(`API error ${res.status}: ${res.statusText} - ${errorBody}`);
  }

  return res.json() as Promise<T>;
}
