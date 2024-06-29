
export class CommonDefinition {
  word: string;
  def: string;
  example: string | null = null;
  phonetic: string | null = null;
  partOfSpeech: string | null = null;
  author: string | null = null;
  thumbs_up: number | null = null;
  thumbs_down: number | null = null;
  audio: string | null = null;
  made_at: Date | null = null;

  constructor (word: string, def: string, example: string | null, phonetic: string | null = null, partOfSpeech: string | null, author: string | null = null, thumbs_up: number | null = null, thumbs_down: number | null = null, audio: string | null = null, made_at: Date | null = null) {
    this.word = word;
    this.def = def;
    this.example = example;
    this.phonetic = phonetic;
    this.partOfSpeech = partOfSpeech;
    this.author = author;
    this.thumbs_up = thumbs_up;
    this.thumbs_down = thumbs_down;
    this.audio = audio;
    this.made_at = made_at;
  };
};