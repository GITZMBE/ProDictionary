import { CommonDefinition } from '../../../models/CommonDefinition';
import { getPartOfSpeech } from '../../../utils/getPartOfSpeech';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch, params }) => {
  const { slug } = params;
  const cleanSlug = slug.trim().replace('_', ' ');

  try {
    const [dictionaryRes, urbandictionaryRes] = await Promise.all([
      fetch(`/api/dictionary?query=${cleanSlug}`, { method: 'GET' }),
      fetch(`/api/urbandictionary?query=${cleanSlug}`, { method: 'GET' })
    ]);

    const dictionaryData = dictionaryRes.ok ? await dictionaryRes.json() : [];
    const urbandictionaryData = urbandictionaryRes.ok ? await urbandictionaryRes.json() : { list: [] };

    const dictionaryDefinitions: CommonDefinition[] = Array.isArray(dictionaryData) ? dictionaryData.flatMap((d: any) => 
      d.meanings.map((m: any) => {
        const def = m.definitions.map((def: { definition: string }) => def.definition).join(' ').trim();
        return new CommonDefinition(d.word, def, null, m.phonetic, m.partOfSpeech, null, null, null, m.phonetics?.[0]?.audio || null, null);
      })
    ) : [];

    const urbandictionaryDefinitions: CommonDefinition[] = Array.isArray(urbandictionaryData.list) ? urbandictionaryData.list.map((d: any) => 
      new CommonDefinition(d.word, d.definition, d.example, null, getPartOfSpeech(d.definition).partOfSpeech, d.author, d.thumbs_up, d.thumbs_down, null, d.written_on)
    ) : [];

    const definitions: CommonDefinition[] = [...dictionaryDefinitions, ...urbandictionaryDefinitions];

    return {
      query: slug,
      definitions
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      query: slug,
      definitions: [] as CommonDefinition[]
    };
  }
};
