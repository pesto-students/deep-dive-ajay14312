const deepCopyObject = (objToCopy) => {
  if (typeof objToCopy !== 'object' || objToCopy === null) {
    return objToCopy;
  }
  const copyObject = Array.isArray(objToCopy) ? [] : {};
  const objectOwnDescriptors = Object.getOwnPropertyDescriptors(objToCopy);

  for (const key of Object.getOwnPropertyNames(objToCopy)) {
    const value = objToCopy[key];
    if (typeof value === 'object') {
      copyObject[key] = deepCopyObject(value);
    } else {
      Object.defineProperty(copyObject, key, objectOwnDescriptors[key]);
    }
  }

  return copyObject;
};

export { deepCopyObject };
