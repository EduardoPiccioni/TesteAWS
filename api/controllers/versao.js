module.exports = () => {
  const controller = {};

<<<<<<< HEAD
  controller.get = async (req, res) => {
    const responseString = `Bia ${process.env.VERSAO_API || "2.0.0"}`;
    res.send(responseString);
  };

=======
  controller.get = (req, res) => {
    const responseString = `Bia ${process.env.VERSAO_API || "2.0.0"}`;
    res.send(responseString);
  };
>>>>>>> 8364914 (Primeiro commit no branch pr-cicd)
  return controller;
};
