export function getDateFormatedFromNow() {
    const date = new Date(Date.now());

    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    // Création de la date formatée
    const formattedDate = `${date.toDateString()} ${hours}:${minutes}:${seconds}`;
    return formattedDate;
}
