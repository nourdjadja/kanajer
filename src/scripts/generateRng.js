import { hiraganas, katakanas, romajis, kanaWords, romajiWords, translatedWords } from "./kanas";
export const generateRNG=(modulValue, w)=>{let rng=Math.floor(Math.random() * 10000 + w);rng = (rng % modulValue);return rng;};
export const generateKanaData=(position)=>{let kanaData=[hiraganas[position],katakanas[position],romajis[position]];return kanaData;};
export const generateWordData=(position)=>{let wordData=[kanaWords[position],romajiWords[position],translatedWords[position]];return wordData;}