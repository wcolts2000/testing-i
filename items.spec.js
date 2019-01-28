const item = require("./items");

describe("item library", () => {
  describe("item object", () => {
    test("should return an object", () => {
      expect(typeof item).toBe("object");
    });
  });
  describe("item should have keys actualName, name, type, and enhancement", () => {
    test("should return an object with keys actualName, name, type, and enhancements", () => {
      const itemTemplate = {
        actualName: "",
        name: "",
        type: "",
        enhancement: 100
      };
      expect(item.item).toMatchObject(itemTemplate);
    });
  });
});
