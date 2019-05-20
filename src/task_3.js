import { getArray } from './task_2';

export function getMax() {
  const arr = getArray();

  let maxEven = 0, maxOdd = 0;
  arr.forEach(item => {
    if (item % 2 === 0 && item > maxEven) {
      maxEven = item;
    } else if (item % 2 !== 0 && item > maxOdd) {
      maxOdd = item;
    }
  });

  return { maxOdd, maxEven };
};
