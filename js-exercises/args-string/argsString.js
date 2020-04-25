const argsString = (message, args) => {
  const messsageList = message.split('{}');
  let argsIndex = 0;
  let modifiedMessage = message;

  for (const item of messsageList) {
    if (item === '' && args[argsIndex]) {
      modifiedMessage = modifiedMessage.replace('{}', args[argsIndex]);
      argsIndex++;
    }
  }

  return modifiedMessage;
};

export { argsString };
