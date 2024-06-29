
export const getPartOfSpeech = (def: string) => {
  if (def.includes('noun')) {
    return { partOfSpeech: 'noun' };
  }
  if (def.includes('verb')) {
    return { partOfSpeech: 'verb' };
  }
  if (def.includes('adjective') || def.includes('adj')) {
    return { partOfSpeech: 'adj' };
  }
  if (def.includes('interjection') || def.includes('interj')) {
    return { partOfSpeech: 'interj' };
  }

  return { partOfSpeech: null };
};