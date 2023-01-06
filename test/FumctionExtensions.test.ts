import { times } from "../src/FumctionExtensions";

describe("times", () => {
  test("executes 10 times", () => {
    let str = "";
    times(10, (t) => (str += t));
    expect(str).toEqual("0123456789");
  });

  test("executes 4 times", () => {
    let str = "";
    const number = 4;
    number.times((t) => (str += t));
    expect(str).toEqual("0123");
  });
});
