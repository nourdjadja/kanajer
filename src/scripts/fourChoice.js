/*
    Ne me demandez pas pourquoi, j'avais vraiment envie que cette belle fonction soit sur une seule ligne.
    C'est celle qui permet de générer des "choices" en fonction des niveaux.
    En y repensant, j'aurais clairement pu faire une fonction générique récursive en prenant en input un "maxDifficulty" et la quantité de numéros possibles par level...
    Mais j'avais pas eu l'idée...
    Et puis c'est overkill à vrai dire.
*/

import { generateKanaData, generateRNG } from "./generateRng";

export const fourChoices = (difficulty) => 
{ let randomTable = []; var prev = null; switch (difficulty) 
    { case 1: for (let i = 0; i < 4; i++) 
        { let tempNum = generateRNG(46, 0); if(tempNum !== prev)
            { randomTable[i] = tempNum } else 
            { randomTable[i] = (tempNum % 20 + 1) } prev = tempNum; } break; case 2: for (let i = 0; i < 4; i++) 
            { let tempNum = generateRNG(61, 0); if(tempNum !== prev)
                { randomTable[i] = tempNum } else 
                { randomTable[i] = (tempNum % 20 + 1) } prev = tempNum; } break; case 3: for (let i = 0; i < 4; i++) 
                { let tempNum = generateRNG(96, 0); if(tempNum !== prev)
                    { randomTable[i] = tempNum } else 
                    { randomTable[i] = (tempNum % 20 + 1) } prev = tempNum; } break; case 4: for (let i = 0; i < 4; i++) 
                    { let tempNum = generateRNG(96, 0); if(tempNum !== prev)
                        { randomTable[i] = tempNum } else 
                        { randomTable[i] = (tempNum % 20 + 1) } prev = tempNum; } break; } let data = [generateKanaData(randomTable[0]), generateKanaData(randomTable[1]), generateKanaData(randomTable[2]), generateKanaData(randomTable[3])]; return data; };