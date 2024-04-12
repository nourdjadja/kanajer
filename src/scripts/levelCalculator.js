export function calculateTotalExp(scores) {
    let totalExp = 0;

    if (scores && Array.isArray(scores.scores)) {
        const levelData = scores.scores;
        for (const data of levelData) {
            totalExp += data[0][1];
        }
    } else {
        console.error("Erreur: scores n'est pas dans le format attendu.");
    }

    return totalExp;
}

export function masteryCalculator(exp){
    let mastery = 0;
    let factor = 1;
    
    for (let i = 100; i < exp; i++) {
        mastery++;
        i = 100 * factor + i;
        factor++;
    }

    console.log(mastery)
    return mastery;
}