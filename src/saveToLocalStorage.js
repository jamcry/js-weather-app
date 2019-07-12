// Saves the given key-value pair to localStorage
function saveToLocalStorage(key, value) {
  if(localStorage.getItem(key) !== JSON.stringify(value)){
    localStorage.setItem(key, JSON.stringify(value));
  }
}

export default saveToLocalStorage;