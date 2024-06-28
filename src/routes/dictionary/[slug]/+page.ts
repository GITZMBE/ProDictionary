import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch, params }) => {
  const { slug } = params;

  const res = await fetch('/api/dictionary?query=' + slug.trim().replace('_', ' '), { method: 'GET' });

  if (!res.ok) {
    return {
      status: res.status,
      error: new Error('Failed to fetch definitions'),
      query: slug
    };
  }

  const data = await res.json();
  return { query: slug, definitions: data };
};
