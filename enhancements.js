module.exports = {
  succeed,
  fail,
  repair
};

function succeed(item) {
  if (!item) return null;
  if (item.type !== "armor" && item.type !== "weapon") {
    return console.error({ error: "can only enhance weapons and armor" });
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
