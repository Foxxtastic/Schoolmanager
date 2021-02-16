export function setStorageItem(key, dataObject, isLocalStorage) {
    if (isLocalStorage) {
        localStorage.setItem(key, JSON.stringify(dataObject));
    } else {
        sessionStorage.setItem(key, JSON.stringify(dataObject));
    }
}

export function getStorageItem(key) {
    let storageItem = sessionStorage.getItem(key);
    if (storageItem === null) {
        storageItem = localStorage.getItem(key);
    }

    return storageItem === null ? null : JSON.parse(storageItem);
}

export function deleteStorageItem(key) {
    localStorage.removeItem(key);
    sessionStorage.removeItem(key);
}