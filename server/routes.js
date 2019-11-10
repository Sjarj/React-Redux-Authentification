module.exports = expressServer => {
  expressServer.get("/", (req, res, next) => {
    res.send({ serverData: ["Stratocaster", "Gibson", "Ibanez"] });
  });
};
