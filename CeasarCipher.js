function rot13(str) {

    let string = str.toUpperCase();
    console.log(str);
  
    let alfabeto = "abcdefghijklmnopqrstuvwxyz".toUpperCase();
    let rot13 = "nopqrstuvwxyzabcdefghijklm".toUpperCase();
    let whitespace = " ";
  
    let final = [];
  
    for (let i = 0; i < str.length; i ++) {
  
      if (string[i] === " "){
        final.push(" ");
      }
      else if (string[i] == "!") {
        final.push("!");
      }
      else if (string[i] == "?") {
        final.push("?");
      }
      else if (string[i] == ".") {
        final.push(".");
      }
       else {
      
        let indexOf = alfabeto.indexOf(string[i]);
        final.push(rot13[indexOf]);
      }
    }
    console.log(final);
    return final.join("");
  }
  
  rot13("SERR CVMMN!");