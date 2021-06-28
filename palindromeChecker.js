function palindrome(str) {
  
    let newStr = str.toLowerCase().trim().split(/[^A-Za-z0-9]/).join("");
  
    let splitted = newStr.split("");
    let reversed = newStr.split("").reverse();
   
    for (let i = 0; i < splitted.length; i++) {
      if (splitted[i] != reversed[i]) {
        return false;
      }
    }
    return true;
  }
  
  
  
  palindrome("eye");