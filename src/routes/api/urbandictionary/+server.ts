import type { RequestEvent } from "./$types";

export const GET = async ({ fetch, url }: RequestEvent) => {
  const base = 'http://api.urbandictionary.com';
  const query = await url.searchParams.get('query');

  if (!query) {
    const uri = '/v0/random';
    const res = await fetch(base + uri, {
      method: 'GET',
    });

    if (!res.ok) {
      return new Response('Definition not found', { status: res.status });
    }

    const definitions = await res.json();
    return new Response(JSON.stringify(definitions), { status: 200 });
  }

  const uri = '/v0/define?term=' + query;
  const res = await fetch(base + uri, {
    method: 'GET',
  });

  if (!res.ok) {
    return new Response('Definition not found', { status: res.status });
  }

  const definitions = await res.json();
  return new Response(JSON.stringify(definitions), { status: 200 });
};