module.exports = () => {
  const controller = {};

<<<<<<< HEAD
<<<<<<< HEAD
  controller.get = async (req, res) => {
    const responseString = `Bia ${process.env.VERSAO_API || "2.0.1"}`;
    res.send(responseString);
  };

=======
=======
>>>>>>> 83649143cc91188e0f3a7534ff54971c594552c4
  controller.get = (req, res) => {
    const responseString = `Bia ${process.env.VERSAO_API || "2.0.0"}`;
    res.send(responseString);
  };
<<<<<<< HEAD
>>>>>>> 8364914 (Primeiro commit no branch pr-cicd)
=======
>>>>>>> 83649143cc91188e0f3a7534ff54971c594552c4
  return controller;
};
