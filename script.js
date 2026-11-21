function convertToRoman(num) {
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };
  let result = '';

  for (let i = 0; i < 7; i++) {
    let value = obj[i][1];
    let roman = obj[i][0];

    if (i === 2 && num >= 900) {
      result += 'CM';
      num -= 900;
    }

    if (i === 2 && num >= 400 && num < 500) {
      result += 'CD';
      num -= 400;
    }

    if (i === 4 && num >= 90 && num < 100) {
      result += 'XC';
      num -= 90;
    }

    if (i === 4 && num >= 40 && num < 50) {
      result += 'XL';
      num -= 40;
    }

    if (i === 6 && num === 9) {
      result += 'IX';
      num -= 9;
    }

    if (i === 6 && num === 4) {
      result += 'IV';
      num -= 4;
    }

    while (num >= value) {
      result += roman;
      num -= value;
    }
  }

  return result;
}
	
  //your code here

}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
