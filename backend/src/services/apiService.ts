let currentBias: string = '';
let grid: string[][] = [];

export const generateGrid = (): string[][] => {
  grid = Array(10).fill(null).map(() => 
    Array(10).fill(null).map(() => getRandomChar())
  );

  if (currentBias) {
    applyBias();
  }

  return grid;
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

const getRandomChar = (): string => {
  const chars = 'abcdefghijklmnopqrstuvwxyz';
  return chars.charAt(Math.floor(Math.random() * chars.length));
};

const applyBias = () => {
  const biasCount = Math.floor(0.2 * 100);

  for (let i = 0; i < biasCount; i++) {
    const x = Math.floor(Math.random() * 10);
    const y = Math.floor(Math.random() * 10);
    grid[x][y] = currentBias;
  }
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
