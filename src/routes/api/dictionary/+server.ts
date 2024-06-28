import type { RequestEvent } from "./$types";


export const GET = async ({ url }: RequestEvent) => {
  const base = 'https://api.dictionaryapi.dev/api/v2/entries/en/';
  const query = url.searchParams.get('query') || '';

  const res = await fetch(base + query, {
    method: 'GET'
  });

  if (!res.ok) {
    return new Response('Definition not found', { status: res.status });
  }

  const definitions = await res.json();
  return new Response(JSON.stringify(definitions), { status: 200 });
};