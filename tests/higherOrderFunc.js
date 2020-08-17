const secondOrder = (a) => () => {
  const b = 56;
  console.log(`a = ${a} , b = ${b}`);
};

secondOrder(23)();
