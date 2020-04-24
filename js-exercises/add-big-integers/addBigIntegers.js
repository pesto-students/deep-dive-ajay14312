function addBigIntegers(intString) {
  const regexPattern = /\n/;
  if (!regexPattern.test(intString)) {
    throw new Error(`${intString} should have multiple lines`);
  }
  const stringsList = intString.split(regexPattern);
  const checkValidNumbers = stringsList.every(item => Number.isNaN(parseInt(item, 10)));
  if (checkValidNumbers) {
    throw new Error(`${intString} should contain only numbers.`);
  }

  function addNumericStrings(str1, str2) {
    const firstOperand = str1.split('').reverse();
    const secondOperand = str2.split('').reverse();
    const modifiedStringList = [];
    let carry = 0;
    let sum = 0;

    for (const [index, item] of firstOperand.entries()) {
      if (index < secondOperand.length) {
        sum = parseInt(item, 10) + parseInt(secondOperand[index], 10) + carry;
      } else {
        sum = parseInt(item, 10) + carry;
      }
      carry = parseInt(sum / 10, 10);
      modifiedStringList.push(sum % 10);
    }
    if (carry) {
      modifiedStringList.push(carry);
    }
    return modifiedStringList.reverse().join('');
  }

  function reducer(str1, str2) {
    return str1.length > str2.length
      ? addNumericStrings(str1, str2)
      : addNumericStrings(str2, str1);
  }

  return stringsList.reduce(reducer);
}

export { addBigIntegers };
