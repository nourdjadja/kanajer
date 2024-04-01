import {hiraganas, katakanas, romajis} from './kanas'
import { generateRNG } from './generateRng'

export const levels = [
    {
        name: "Kana Starter !",
        difficulty: 1,
    },
    {
        name: "Kana Learner",
        difficulty: 2,
    },
    {
        name: "Kana Juggler",
        difficulty: 3,
    },
    {
        name: "Kanajer !",
        difficulty: 4,
    },
]

export const steps = [
    {
        name: "kana-to-romaji",
        exp: 10,
    },
    {
        name: "romaji-to-kana",
        exp: 25,
    },
    {
        name: "kana-to-romaji_input",
        exp: 50,
    },
    {
        name: "kana_word-to-romaji_input",
        exp: 80,
    },
    {
        name: "kana_word-to-translation_input",
        exp: 100,
    },
]

export const sequenceGenerator = (difficulty) => {
    let length = generateRNG(difficulty, 0) + 8;
    let sequence = [];
    let randomStep;

    for(let i = 0; i < length; i++){
        switch (difficulty) {
            case 1:
                randomStep = generateRNG(3, 0) - generateRNG(1, 0.1)
                break;

            case 2:
                randomStep = generateRNG(3, 0) - generateRNG(1, 0.1)
                break;

            case 3:
                randomStep = generateRNG(4, 0) - generateRNG(1, 0.2)
                break;
            
            case 4:
                randomStep = generateRNG(5, 0) - generateRNG(1, 0.3)
                break;
        }

        if(randomStep < 0){
            randomStep = 0;
        }

        sequence.push(randomStep)
    }

    if(difficulty == 4 && !sequence.includes(4)){
        sequence.push(4)
    }

    return sequence
}

export const getSetFromDifficulty = (difficulty) => { 
    let set = []
    switch(difficulty){
        case 1:
            for (let i = 0; i < 46; i++) {
                let tempSmallSet = [];
                tempSmallSet.push(hiraganas[i])
                tempSmallSet.push(katakanas[i])
                tempSmallSet.push(romajis[i])
                set.push(tempSmallSet)
            }
            return set;

        case 2:
            for (let i = 0; i < 61; i++) {
                let tempSmallSet = [];
                tempSmallSet.push(hiraganas[i])
                tempSmallSet.push(katakanas[i])
                tempSmallSet.push(romajis[i])
                set.push(tempSmallSet)
            }
            return set        
            
        case 3:
            for (let i = 0; i < hiraganas.length; i++) {
                let tempSmallSet = [];
                tempSmallSet.push(hiraganas[i])
                tempSmallSet.push(katakanas[i])
                tempSmallSet.push(romajis[i])
                set.push(tempSmallSet)
            }
            return set;

        case 4:
            for (let i = 0; i < hiraganas.length; i++) {
                let tempSmallSet = [];
                let tempSmallSet2 = [];
                let tempBigSet = [];

                tempSmallSet.push(hiraganas[i])
                tempSmallSet.push(katakanas[i])
                tempSmallSet.push(romajis[i])
                
                tempSmallSet2.push(hiraganas[i])
                tempSmallSet2.push(katakanas[i])
                tempSmallSet2.push(romajis[i])

                tempBigSet.push(tempSmallSet)
                tempBigSet.push(tempSmallSet2)

                set.push(tempBigSet)
            }
            return set;
    }
}