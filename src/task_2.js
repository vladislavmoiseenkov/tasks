const getRandomValue = () => {
  const max = 100, min = 0;

  return Math.round(Math.random() * (max - min) + min);
};

export function getArray() {
  let arr = [];

  do {
    const value = getRandomValue();

    !arr.includes(value) ? arr.push(value) : null;
  } while (arr.length < 50);

  return arr.sort((a, b) => a - b);
};
