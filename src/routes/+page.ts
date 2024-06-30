import { CommonDefinition } from '../models/CommonDefinition.js';
import { getPartOfSpeech } from '../utils/getPartOfSpeech.js';


export const load = async ({ fetch }): Promise<{ data: CommonDefinition[] }> => {
  const res = await fetch('/api/urbandictionary', { 
    method: 'GET' 
  });
  const urbanData = await res.json();
  const data: CommonDefinition[] = urbanData.list.map((d: any) => new CommonDefinition(d.word, d.definition, d.example, null, getPartOfSpeech(d.definition).partOfSpeech, d.author, d.thumbs_up, d.thumbs_down, null, d.written_on));
  
  return { data };
};