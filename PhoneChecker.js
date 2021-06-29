function telephoneCheck(str) {

    if (str.indexOf(")") - str.indexOf("(") > 4) return false;
  
    if (str[0] == '-') return false;
  
    let oi =  str.replace(/[^-]/g, "").length
  
    if (oi > 2) return false;
  
    let regexed = str.replace(/-| /g, "");
  
    if (regexed.indexOf("(") == -1 && regexed.indexOf(")") > -1) return false;
  
    if (regexed.indexOf("(") < regexed.indexOf(")")) regexed = regexed.replace(/\(|\)/g, "");
    
    if (regexed.length == 10) return true;
  
    if (regexed[0] == 1 && regexed.length == 11) return true
    
    return false;
  }
  
  telephoneCheck("555)-555-5555");