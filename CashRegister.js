const checkCashRegister = (price, cash, cid) => {
  
    let troco = cash - price;
    const arr = [];
    let caixa = 0;
    
    //usar um obj c properties para facilitar
    const CURRENCIES = {
      "PENNY": .01,
      "NICKEL": .05,
      "DIME": .10,
      "QUARTER": .25,
      "ONE": 1.00,
      "FIVE": 5.00,
      "TEN": 10.00,
      "TWENTY": 20.00,
      "ONE HUNDRED": 100.00
    }
  
    
    for (let item of cid) {
      caixa = caixa + item[1];
  
    }
    //formatar o número (param eh a qntd de casas)
    caixa = caixa.toFixed(2);
  
    if (troco > caixa) return { status: "INSUFFICIENT_FUNDS", change: arr }; 
    else if (troco.toFixed(2) === caixa) return { status: "CLOSED", change: cid };
    
    else {
      cid = cid.reverse();
      for (let item of cid) {
        let temp = [item[0], 0];
  
        while (troco >= CURRENCIES[item[0]] && item[1] > 0) {
          temp[1] += CURRENCIES[item[0]];
          item[1] -= CURRENCIES[item[0]];
          troco -= CURRENCIES[item[0]];
          troco = troco.toFixed(2);
        }
  
        if (temp[1] > 0) {
          arr.push(temp);
        }
      }
    }
    if (troco > 0) {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    }
    return { status: "OPEN", change: arr};
  }