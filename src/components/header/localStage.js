/**
 * 
 * @param {string} key
 * @returns 
 */
export function getStorage(key) {
    return localStorage.getItem(key);
}

/**
 * 
 * @param {string} key Name of the key
 * @param {[string, number]} v Value
 */
export function setStorage(key, value) {
    localStorage.setItem(key, value);
}

/**
 * 
 * @param {string} key
 * @returns 
 */
export function removeStorage(key) {
    localStorage.removeItem(key);
}

/**
 * Clean all storage
 */
export function cleanStorage() {
    localStorage.clear();
}