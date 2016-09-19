const diItems = {};

module.exports = {
  getItem(item) {
    return diItems[item];
  },
  setItem(item, object) {
    diItems[item] = object;
  }
};
