module.exports = {
  succeed,
  fail,
  repair
};

function succeed(item) {
  if (!item) return null;
  return {
    actualName: item.actualName,
    name: `[+${item.enhancement + 1}] ${item.actualName}`,
    durability: item.durability,
    enhancement: item.enhancement + 1
  };
}

function fail(item) {
  return null;
}

function repair(item) {
  return null;
}
