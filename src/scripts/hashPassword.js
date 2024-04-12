export async function hashPassword(password) {
    const encoder = new TextEncoder();
    const passwordBytes = encoder.encode(password);
    
    const hashBuffer = await crypto.subtle.digest('SHA-256', passwordBytes);
    
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
    
    console.log('HP : ' + hashHex)

    return hashHex;
}