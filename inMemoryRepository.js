module.exports = () => {
  let items = [];

  return {
    _items: (state) => {
      items = state;
    },
    stockUp: (isbn, count) => {
      const updated = false;

      items.forEach((item) => {
        if (item.isbn === isbn) {
          item.count = count;
          updated = true;
        }
      });
      if (!updated) {
        items.push({'isbn': isbn, 'count': count});
      }
      return Promise.resolve();
    },
    findAll: () => {
      return Promise.resolve(items);
    },
    getStock: (isbn) => {
      const foundItem = items.find((item) => {
        return (item.isbn == isbn);
      });

      return Promise.resolve(foundItem);
    }
  };
};
