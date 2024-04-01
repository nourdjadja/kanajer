export const generateRNG = (modulo, weight) => {
    let rng = Math.floor(Math.random() * 1000 + weight)
    rng = (rng % modulo)
    return rng
}