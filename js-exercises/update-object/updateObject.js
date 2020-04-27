function updateObject(index, newValue, array) {
  if (Number.isNaN(parseInt(index, 10))) {
    throw new Error(`Expected a number, got ${typeof index}`);
  }
  if (!Array.isArray(array)) {
    throw new Error(`Expected an array, got ${typeof array}`);
  }
  const arrayLength = array.length;
  const absoluteIndex = Math.abs(index);
  if ((index < 0 && absoluteIndex > arrayLength)
    || (index >= 0 && absoluteIndex > arrayLength - 1)) {
    throw new Error(`Index ${index} doesn't exist in [${array}]`);
  }

  let newIndex = 0;
  newIndex = index < 0 ? arrayLength + index : index;
  array[newIndex] = newValue;
  return array;
}

export { updateObject };
