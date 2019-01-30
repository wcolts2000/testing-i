const enhancer = require("./enhancements");

// SUCCEED
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
    });

    test("if no item passed it should return null", () => {
      expect(enhancer.succeed()).toBe(null);
    });

    test("should return the correct string in the name if enhancement is above 15", () => {
      const enhance15 = {
        actualName: "sword",
        type: "weapon",
        enhancement: 15
      };
      const enhancePRI = {
        actualName: "sword",
        type: "weapon",
        enhancement: 16
      };
      const enhanceDUO = {
        actualName: "sword",
        type: "weapon",
        enhancement: 17
      };
      const enhanceTRI = {
        actualName: "sword",
        type: "weapon",
        enhancement: 18
      };
      const enhanceTET = {
        actualName: "sword",
        type: "weapon",
        enhancement: 19
      };
      expect(enhancer.succeed(enhance15).enhancement).toBe(16);
      expect(enhancer.succeed(enhance15).name).toBe('["PRI"] sword');
      expect(enhancer.succeed(enhancePRI).enhancement).toBe(17);
      expect(enhancer.succeed(enhancePRI).name).toEqual('["DUO"] sword');
      expect(enhancer.succeed(enhanceDUO).name).toBe('["TRI"] sword');
      expect(enhancer.succeed(enhanceTRI).name).toBe('["TET"] sword');
      expect(enhancer.succeed(enhanceTET).name).toBe('["PEN"] sword');
    });

    it('should throw an error if it is at maxed enhancement of "PEN', () => {
      const actual = { type: "armor", enhancement: "PEN" };
      expect(() => enhancer.succeed(actual)).toThrow();
    });
  });

  // FAIL
  describe("fail() method", () => {
    const below14 = { durability: 90, enhancement: 13 };
    const over14 = { durability: 90, enhancement: 14 };
    const enhanceDUO = {
      actualName: "sword",
      type: "weapon",
      enhancement: 17
    };
    const enhanceTRI = {
      actualName: "sword",
      type: "weapon",
      enhancement: 18
    };
    const enhanceTET = {
      actualName: "sword",
      type: "weapon",
      enhancement: 19
    };
    const enhancePEN = {
      actualName: "sword",
      type: "weapon",
      enhancement: 20
    };

    test("it should decrease durability of item by 5 if enhancement is between 0 and 14", () => {
      expect(enhancer.fail(below14).durability).toBe(85);
    });

    test("it should decrease durability of item by 10 if enhancement is 14 or over", () => {
      expect(enhancer.fail(over14).durability).toBe(80);
    });

    test("if enhancement level is over 16 it should decrease enhancement level by 1 and update name accordingly", () => {
      expect(enhancer.fail(enhanceDUO).enhancement).toBe(16);
      expect(enhancer.fail(enhanceDUO).name).toBe('["PRI"] sword');
      expect(enhancer.fail(enhanceTRI).name).toBe('["DUO"] sword');
      expect(enhancer.fail(enhanceTET).name).toBe('["TRI"] sword');
      expect(enhancer.fail(enhancePEN).name).toBe('["TET"] sword');
    });

    it("if item enhancement level is lower than 15, can't enhance if durability is below 25", () => {
      const disqualified = { enhancement: 14, durability: 24 };
      expect(() => enhancer.fail(disqualified).toThrow());
    });
    it("if item enhancement level is equal to or over 15, can't enhance if durability is below 10", () => {
      const disqualified = { enhancement: 15, durability: 9 };
      expect(() => enhancer.fail(disqualified).toThrow());
    });
  });

  // REPAIR
  describe("repair() method", () => {
    test("should take in an object and return a object with durability restored to 100", () => {
      const actual = enhancer.repair({ name: "Shield", durability: 0 });
      const actual99 = enhancer.repair({ name: "Shield", durability: 99 });
      expect(actual.durability).toBe(100);
      expect(actual99.durability).toBe(100);
    });
  });
  it("should throw an error if it is already at 100 durability", () => {
    const actual100 = { name: "Shield", durability: 100 };
    expect(() => enhancer.repair(actual100)).toThrow();
  });
});
