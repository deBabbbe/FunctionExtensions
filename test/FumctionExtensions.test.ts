import { times } from "../src/FumctionExtensions";

describe("times", () => {
  test("executes 10 times", () => {
    let str = "";
    times(10, (t) => (str += t));
    expect(str).toEqual("0123456789");
  });

  test("executes 4 times", () => {
    let str = "";
    times(4, (t) => (str += t));
    expect(str).toEqual("0123");
  });

  // test("executes 10 times", () => {
  //   let str = "";
  //   const func = (t: Number) => (str += t);
  //   10.times(func)
  //   expect(str).toEqual("0123456789");
  // });
});
