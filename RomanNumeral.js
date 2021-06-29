function convertToRoman(num) {

    let numTA = num.toString().split("");
    let multiplicados = [];
  
    const nums = [1,2,3,4,5,6,7,8,9,10,20,30,40,50,60,70,80,90,100,200,300,400,500,600,700,800,900,1000,2000,3000];
    const romans = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X","XX","XXX", "XL", "L", "LX", "LXX", "LXXX", "XC", "C", "CC", "CCC", "CD", "D", "DC","DCC","DCCC","CM","M","MM","MMM" ]
    let final = [];
  
  
    switch(numTA.length) {
      
      case 4:   
        if (numTA.length == 4) {
          multiplicados.push(numTA[0] * 1000);
          multiplicados.push(numTA[1] * 100);
          multiplicados.push(numTA[2] * 10);
          multiplicados.push(numTA[3] * 1);
          let zeroChecker = multiplicados.indexOf(0);
          if (multiplicados.indexOf(0) > -1) {
            multiplicados.splice(zeroChecker, 1);
          }
          for (let i = 0; i < multiplicados.length; i ++) {
            let temp = nums.indexOf(multiplicados[i]);
            final.push(romans[temp]);
          } 
      }
      break;
  
    case 3:   
      if (numTA.length == 3) {
        multiplicados.push(numTA[0] * 100);
        multiplicados.push(numTA[1] * 10);
        multiplicados.push(numTA[2] * 1);
  
        let zeroChecker = multiplicados.indexOf(0);
        if (multiplicados.indexOf(0) > -1) {
          multiplicados.splice(zeroChecker, 1);
        }
        for (let i = 0; i < multiplicados.length; i ++) {
          let temp = nums.indexOf(multiplicados[i]);
          final.push(romans[temp]);
        } 
      }
      break;
  
    case 2: 
        if (numTA.length == 2) {
          multiplicados.push(numTA[0] * 10);
          multiplicados.push(numTA[1] * 1);
  
          let zeroChecker = multiplicados.indexOf(0);
          if (multiplicados.indexOf(0) > -1) {
            multiplicados.splice(zeroChecker, 1);
          }
          for (let i = 0; i < multiplicados.length; i ++) {
            let temp = nums.indexOf(multiplicados[i]);
            final.push(romans[temp]);
          } 
      }
      break;
  
      case 1:
        if (numTA.length == 1) {
        multiplicados.push(numTA[0] * 1);
  
        let zeroChecker = multiplicados.indexOf(0);
        if (multiplicados.indexOf(0) > -1) {
          multiplicados.splice(zeroChecker, 1);
        }
        for (let i = 0; i < multiplicados.length; i ++) {
          let temp = nums.indexOf(multiplicados[i]);
          final.push(romans[temp]);
        } 
      }
      break;
      
    }
  
    return final.join("");
  }
  
  convertToRoman(2014);