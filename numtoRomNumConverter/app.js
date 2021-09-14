let btnConvert= document.querySelector('#convertNumber');


let convert = (number) => {

    //converted for
    var converted = '';
    var romanNumerals = { 
        M:  1000, 
        CM: 900, 
        D:  500, 
        CD: 400, 
        C:  100, 
        XC: 90, 
        L:  50, 
        XL: 40,
        X:  10, 
        IX: 9, 
        V:  5, 
        IV: 4, 
        I:  1
      };
        Object.keys(romanNumerals).forEach(romanNumeral => {
            let i = Math.floor(number / romanNumerals[romanNumeral]);
            number = number -  (i * romanNumerals[romanNumeral]);
            converted = converted + romanNumeral.repeat(i);
        });

      return converted;
}


btnConvert.addEventListener('click', () => {

  let number= document.getElementById('numberToBeConverted').value;
  let converted = convert(number);
 
  document.getElementById("displayConvertedNumber").innerHTML = converted;
});


