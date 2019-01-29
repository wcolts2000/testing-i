module.exports = {
  succeed,
  fail,
  repair
};

const enhancements = { 16: "PRI", 17: "DUO", 18: "TRI", 19: "TET", 20: "PEN" };

function succeed(item) {
  if (!item) return null;
  if (item.enhancement === "PEN") {
    throw new Error({ error: "weapon fully enhanced" });
  }
  if (item.type !== "armor" && item.type !== "weapon") {
    return console.error({ error: "can only enhance weapons and armor" });
  }
  if (item.enhancement < 15) {
    return {
      actualName: item.actualName,
      name: `[+${item.enhancement + 1}] ${item.actualName}`,
      type: item.type,
      durability: item.durability,
      enhancement: item.enhancement + 1
    };
  }
  if (item.enhancement >= 15) {
    let num = item.enhancement + 1;
    return {
      actualName: item.actualName,
      name: `["${enhancements[num]}"] ${item.actualName}`,
      type: item.type,
      durability: item.durability,
      enhancement: num
    };
  }
}

function fail(item) {
  if (item.enhancement < 15 && item.durability < 25) {
    return;
  }
  if (item.enhancement === 17) {
    return {
      ...item,
      enhancement: item.enhancement - 1,
      name: `["PRI"] ${item.actualName}`
    };
  }
  if (item.enhancement === 18) {
    return {
      ...item,
      enhancement: item.enhancement - 1,
      name: `["DUO"] ${item.actualName}`
    };
  }
  if (item.enhancement === 19) {
    return {
      ...item,
      enhancement: item.enhancement - 1,
      name: `["TRI"] ${item.actualName}`
    };
  }
  if (item.enhancement === 20) {
    return {
      ...item,
      enhancement: item.enhancement - 1,
      name: `["TET"] ${item.actualName}`
    };
  }
  if (item.enhancement < 14) {
    return { ...item, durability: item.durability - 5 };
  }
  if (item.enhancement >= 14) {
    return { ...item, durability: item.durability - 10 };
  }
}

function repair(item) {
  if (item.durability === 100) {
    throw new Error("Already in excellent condition, no need to repair");
  }
  return { ...item, durability: 100 };
  // return null;
}
