export function times(count: number, func: (idx: Number) => void): void {
  for (let i = 0; i < count; i++) {
    func(i);
  }
}

declare global {
  interface Number {
    times(func: (idx: Number) => void): void;
  }
}

Number.prototype.times = function (func: (idx: Number) => void): void {
  times(Number(this), func);
};
