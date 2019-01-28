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
  return null;
}
