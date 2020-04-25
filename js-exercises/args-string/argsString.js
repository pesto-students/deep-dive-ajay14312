const argsString = (message, args) => {
  if (!Array.isArray(args)) {
    throw new TypeError(`Expected an array, got ${typeof args}`);
  }
  if (typeof message !== 'string') {
    throw new TypeError(`Expected a string, got ${typeof message}`);
  }
  const messsageList = message.split('{}');
  let argsIndex = 0;
  let modifiedMessage = message;

  for (const item of messsageList) {
    const argumentsItem = args[argsIndex];
    if (item === '' && argumentsItem) {
      modifiedMessage = modifiedMessage.replace('{}', argumentsItem);
      argsIndex++;
    }
  }

  return modifiedMessage;
};

export { argsString };
