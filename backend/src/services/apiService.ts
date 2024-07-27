let currentBias: string = '';
let grid: string[][] = [];

/* biasCount: 20 as default */
const biasCount = 20;

const shuffleArray = function (array: string[]) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

export const generateGrid = (): string[][] => {
  let charPool: string[] = getCharPool();
  shuffleArray(charPool);

  grid = Array.from({ length: 10 }, () => Array.from({ length: 10 }, () => charPool.pop() as string));

  return grid;
};

const getCharPool = (): string[] => {
  const charPool: string[] = [];

  for (let i = 1; i <= 100; i++) {
    const char = currentBias && i <= biasCount ? currentBias : getRandomChar(currentBias);
    charPool.push(char);
  }

  return charPool;
};

export const generateCode = (): string => {
  if (grid.length === 0) {
    return '';
  }

  const secStr = new Date().getSeconds().toString().padStart(2, '0');

  const indexOne = parseInt(secStr[0]);
  const indexTwo = parseInt(secStr[1]);

  const char1 = grid[indexOne][indexTwo];
  const char2 = grid[indexTwo][indexOne];

  const count1 = countCharInGrid(char1);
  const count2 = countCharInGrid(char2);

  return `${normalizeCount(count1)}${normalizeCount(count2)}`;
};

export const setBias = (bias: string) => {
  currentBias = bias;
};

const getRandomChar = (removeChar?: string | null): string => {
  let chars = 'abcdefghijklmnopqrstuvwxyz';
  if (removeChar) {
    chars = chars.replace(new RegExp(removeChar, 'g'), '');
  }
  return chars.charAt(Math.floor(Math.random() * chars.length));
};

const countCharInGrid = (char: string): number => {
  return grid.flat().filter(c => c === char).length;
};

const normalizeCount = (count: number): number => {
  while (count > 9) {
    count = Math.floor(count / 2);
  }
  return count;
};
