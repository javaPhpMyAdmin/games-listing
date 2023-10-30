function getItemLocalStorage(key) {
  return localStorage.getItem(key);
}

function setItemLocalStorage(key, value) {
  localStorage.setItem(key, value);
}

export { getItemLocalStorage, setItemLocalStorage };
