const enhancer = require("./enhancements");

describe("enhancement library", () => {
  describe("succeed(item) method", () => {
    test("should take in an object and return an enhanced object", () => {
      const item = {
        actualName: "Lambda Shield",
        name: "[+8] Lambda Shield",
        type: "armor",
        durability: 90,
        enhancement: 8
      };
      const expected = {
        actualName: "Lambda Shield",
        name: "[+9] Lambda Shield",
        type: "armor",
        durability: 90,
        enhancement: 9
      };

      const actual = enhancer.succeed(item);

      expect(actual).toEqual(expected);
      expect(actual.enhancement).toBe(9);
      expect(actual.name).toBe("[+9] Lambda Shield");
      expect(enhancer.succeed()).toBe(null);
    });
  });
  describe("fail() method", () => {
    test("should take in an object and return a object with failed enhancement", () => {
      expect(enhancer.fail()).toBe(null);
    });
  });
  describe("repair() method", () => {
    test("should take in an object and return a object with durability restored to 100", () => {
      const actual = enhancer.repair({ name: "Shield", durability: 0 });
      const actual99 = enhancer.repair({ name: "Shield", durability: 99 });
      expect(actual.durability).toBe(100);
      expect(actual99.durability).toBe(100);
    });
    it("should throw an error if it is already at 100 durability", () => {
      const actual100 = { name: "Shield", durability: 100 };
      expect(() => enhancer.repair(actual100)).toThrow();
    });
  });
});
