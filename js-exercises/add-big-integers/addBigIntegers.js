function addBigIntegers(intString) {
  const regexPattern = /\n/;
  if (!regexPattern.test(intString)) {
    throw new Error(`${intString} should has next line`);
  }
  const stringsList = intString.split(regexPattern);
  const checkValidNumbers = stringsList.filter(item => Number.isNaN(parseInt(item, 10)));
  if (checkValidNumbers.length > 0) {
    throw new Error(`${intString} should contain only numbers.`);
  }

  function addNumericStrings(firstOperand, secondOperand) {
    let modifiedString = '';
    let carry = 0;
    for (let i = 0; i < firstOperand.length; i++) {
      if (i < secondOperand.length) {
        const sum = parseInt(firstOperand[i], 10) + parseInt(secondOperand[i], 10) + carry;
        carry = parseInt(sum / 10, 10);
        modifiedString = modifiedString.concat(sum % 10);
      } else {
        const sum = parseInt(firstOperand[i], 10) + carry;
        carry = parseInt(sum / 10, 10);
        modifiedString = modifiedString.concat(sum % 10);
      }
    }
    if (carry) {
      modifiedString = modifiedString.concat(carry);
    }
    return modifiedString.split('').reverse().join('');
  }

  function reducer(str1, str2) {
    const firstOperand = str1.split('').reverse().join('');
    const secondOperand = str2.split('').reverse().join('');
    return firstOperand.length > secondOperand.length
      ? addNumericStrings(firstOperand, secondOperand)
      : addNumericStrings(secondOperand, firstOperand);
  }

  return stringsList.reduce(reducer);
}

export { addBigIntegers };
