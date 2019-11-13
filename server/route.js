module.exports = expressServer => {
  expressServer.get("/", (req, res, next) => {
    res.send({ servData: "Ibanez" });
  });
};
