
function convertToRoman(num) {
  const obj = {
    0: ['M', 1000],
    1: ['D', 500],
    2: ['C', 100],
    3: ['L', 50],
    4: ['X', 10],
    5: ['V', 5],
    6: ['I', 1]
  };

  let result = '';

  for (let i = 0; i < 7; i++) {
    let roman = obj[i][0];
    let value = obj[i][1];

    // Handle subtractive combinations
    if (i === 2 && num >= 900) {
      result += 'CM';
      num -= 900;
    } else if (i === 2 && num >= 400) {
      result += 'CD';
      num -= 400;
    } else if (i === 4 && num >= 90) {
      result += 'XC';
      num -= 90;
    } else if (i === 4 && num >= 40) {
      result += 'XL';
      num -= 40;
    } else if (i === 6 && num >= 9) {
      result += 'IX';
      num -= 9;
    } else if (i === 6 && num >= 4) {
      result += 'IV';
      num -= 4;
    }

    // Handle normal Roman symbols
    while (num >= value) {
      result += roman;
      num -= value;
    }
  }

  return result;
}

module.exports = convertToRoman;
