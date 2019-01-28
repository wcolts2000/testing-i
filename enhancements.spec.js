const enhancer = require("./enhancements");

describe("enhancement library", () => {
  describe("succeed() method", () => {
    test("should take in an object and return an enhanced object", () => {
      //   const item = {
      //     originalName: "Lambda Shield",
      //     name: "[+8] Lambda Shield",
      //     durability: 90,
      //     enhancement: 8
      //   };
      //   const expected = {
      //     originalName: "Lambda Shield",
      //     name: "[+9] Lambda Shield",
      //     durability: 90,
      //     enhancement: 9
      //   };

      //   const actual = enhancer.succeed(item);

      //   expect(actual).toEqual(expected);
      //   expect(actual.enhancement).toBe(9);
      //   expect(actual.name).toBe("[+9] Lambda Shield");
      expect(enhancer.succeed()).toBe(null);
    });
  });
  describe("fail() method", () => {
    test("should take in an object and return a object with failed enhancement", () => {
      expect(enhancer.fail()).toBe(null);
    });
  });
  describe("repair() method", () => {
    test("should take in an object and return a object with failed enhancement", () => {
      expect(enhancer.repair()).toBe(null);
    });
  });
});
