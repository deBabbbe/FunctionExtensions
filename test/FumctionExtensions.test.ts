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

describe("forAll", () => {
  test("loops over all elements", () => {
    let str = "";
    const list = ["a", "b", "c"];

    list.forAll((entry) => (str += entry));

    expect(str).toEqual("abc");
  });

  test("loops over all elements, different type", () => {
    let str = "";
    const list = [1, 2, 3, 4, 5];

    list.forAll((entry) => (str += entry));

    expect(str).toEqual("12345");
  });
});
