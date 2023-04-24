export function createSteps(num: number): number[] {
  const arr: number[] = [];

  for (let i = 1; i <= num; i++) {
    arr.push(i);
  }

  return arr;
}
