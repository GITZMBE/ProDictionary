

export const load = async ({ fetch }) => {
  const res = await fetch('/api/urbandictionary', { 
    method: 'GET' 
  });
  const data = await res.json();

  return { ...data };
};