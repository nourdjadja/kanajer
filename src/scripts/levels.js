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

    if(difficulty === 4 && !sequence.includes(4)){
        sequence.push(4)
    }
    console.log('Sequence retournée par level.js/sequenceGenerator :')
    console.log(sequence)
    return sequence
}

export const getBestTime = (levelAttemptList) => {
    if (!Array.isArray(levelAttemptList) || levelAttemptList.length === 0) {
        return null; 
    }

    let bestTime = levelAttemptList[0][0]; 

    for (let i = 1; i < levelAttemptList.length; i++) {
        const attempt = levelAttemptList[i][0];
        if (attempt < bestTime) {
            bestTime = attempt; 
        }
    }

    return bestTime;
};
