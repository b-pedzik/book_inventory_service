let repository;

const addStock = (req, res, next) => {
  repository.getStock(req.body.isbn)
    .then((data) => {
      if (data) {
        throw Error('ISBN exists');
      }
    })
    .then(() => {
      repository.stockUp(req.body.isbn, req.body.count);
      res.status(200);
      res.json(req.body);
    })
    .catch(next);
};

const getStock = (req, res) => {
  res.format({
    html: () => {
      repository.getStock(req.params.isbn)
        .then((stock) => {
          res.status(200);
          res.render(`<div>Count: ${stock.count}</div>`);
        })
        .catch(() => {
          res.status(404);
          res.end();
        });
    },
    json: () => {
      repository.getStock(req.params.isbn)
        .then((stock) => {
          res.status(200);
          res.json({ count: stock.count });
        })
        .catch(() => {
          res.status(404);
          res.end();
        });
    }
  });
};

const getAll = (req, res) => {
  repository.findAll()
    .then(results => {
      res.status(200);
      res.json(results);
    });
};

module.exports = (repo) => {
  repository = repo;

  return {
    addStock,
    getStock,
    getAll
  };
};
