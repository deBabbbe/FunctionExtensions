export function times(count: number, func: (idx: Number) => void): void {
  for (let i = 0; i < count; i++) {
    func(i);
  }
}

declare global {
  interface Number {
    times(func: (idx: Number) => void): void;
  }

  interface Array<T> {
    forAll(func: (entry: T) => void): void;
  }
}

Number.prototype.times = (func: (idx: Number) => void): void =>
  times(Number(this), func);

Array.prototype.forAll = function (func: (entry: any) => void): void {
  this.forEach((element) => func(element));
};
