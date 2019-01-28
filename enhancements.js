module.exports = {
  succeed,
  fail,
  repair
};

function succeed(item) {
  if (!item) return null;
  if (item.enhancement === "PEN") {
    throw new Error({ error: "weapon fully enhanced" });
  }
  if (item.type !== "armor" && item.type !== "weapon") {
    return console.error({ error: "can only enhance weapons and armor" });
  } else {
    if (item.enhancement === 17) {
      return {
        actualName: item.actualName,
        name: `["TRI"] ${item.actualName}`,
        type: item.type,
        durability: item.durability,
        enhancement: item.enhancement + 1
      };
    } else if (item.enhancement === 18) {
      return {
        actualName: item.actualName,
        name: `["TET"] ${item.actualName}`,
        type: item.type,
        durability: item.durability,
        enhancement: item.enhancement + 1
      };
    } else if (item.enhancement === 19) {
      return {
        actualName: item.actualName,
        name: `["PEN"] ${item.actualName}`,
        type: item.type,
        durability: item.durability,
        enhancement: item.enhancement + 1
      };
    }
    if (item.enhancement === 16) {
      return {
        actualName: item.actualName,
        name: `["DUO"] ${item.actualName}`,
        type: item.type,
        durability: item.durability,
        enhancement: item.enhancement + 1
      };
    }
    if (item.enhancement > 15) {
      return {
        actualName: item.actualName,
        name: `[+${item.enhancement + 1}] ${item.actualName}`,
        type: item.type,
        durability: item.durability,
        enhancement: item.enhancement + 1
      };
    }

    if (item.enhancement === 15) {
      return {
        actualName: item.actualName,
        name: `["PRI"] ${item.actualName}`,
        type: item.type,
        durability: item.durability,
        enhancement: item.enhancement + 1
      };
    } else {
      return {
        actualName: item.actualName,
        name: `[+${item.enhancement + 1}] ${item.actualName}`,
        type: item.type,
        durability: item.durability,
        enhancement: item.enhancement + 1
      };
    }
  }
}

function fail(item) {
  return null;
}

function repair(item) {
  if (item.durability === 100) {
    throw new Error("Already in excellent condition, no need to repair");
  }
  return { ...item, durability: 100 };
  // return null;
}
