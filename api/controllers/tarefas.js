<<<<<<< HEAD
<<<<<<< HEAD
const initializeModels = require("../models");
=======
const { Tarefas } = require("../models");
>>>>>>> 8364914 (Primeiro commit no branch pr-cicd)
=======
const { Tarefas } = require("../models");
>>>>>>> 83649143cc91188e0f3a7534ff54971c594552c4

module.exports = () => {
  const controller = {};

<<<<<<< HEAD
<<<<<<< HEAD
  controller.create = async (req, res) => {
    try {
      const { Tarefas } = await initializeModels();
      let tarefa = {
        titulo: req.body.titulo,
        dia_atividade: req.body.dia,
        importante: req.body.importante,
      };

      const data = await Tarefas.create(tarefa);
      res.send(data);
    } catch (err) {
      res.status(500).send({
        message: err.message || "Deu ruim.",
      });
    }
  };

  controller.find = async (req, res) => {
    try {
      const { Tarefas } = await initializeModels();
      let uuid = req.params.uuid;
      const data = await Tarefas.findByPk(uuid);
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: "Tarefa não encontrada.",
        });
      }
    } catch (err) {
      res.status(500).send({
        message: err.message || "Deu ruim.",
      });
    }
  };

  controller.delete = async (req, res) => {
    try {
      const { Tarefas } = await initializeModels();
      let { uuid } = req.params;
      const result = await Tarefas.destroy({
        where: {
          uuid: uuid,
        },
      });

      if (result) {
        res.send({ message: "Tarefa deletada com sucesso." });
      } else {
        res.status(404).send({
          message: "Tarefa não encontrada.",
        });
      }
    } catch (err) {
      res.status(500).send({
        message: err.message || "Deu ruim.",
      });
    }
  };

  controller.update_priority = async (req, res) => {
    try {
      const { Tarefas } = await initializeModels();
      let { uuid } = req.params;
      await Tarefas.update(req.body, {
        where: {
          uuid: uuid,
        },
      });

      const data = await Tarefas.findByPk(uuid);
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: "Tarefa não encontrada.",
        });
      }
    } catch (err) {
      res.status(500).send({
        message: err.message || "Deu ruim.",
      });
    }
  };

  controller.findAll = async (req, res) => {
    try {
      const { Tarefas } = await initializeModels();
      const data = await Tarefas.findAll();
      res.send(data);
    } catch (err) {
      res.status(500).send({
        message: err.message || "Deu ruim.",
      });
    }
  };

=======
=======
>>>>>>> 83649143cc91188e0f3a7534ff54971c594552c4
  controller.create = (req, res) => {
    let tarefa = {
      titulo: req.body.titulo,
      dia_atividade: req.body.dia,
      importante: req.body.importante,
    };

    Tarefas.create(tarefa)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Deu ruim.",
        });
      });
  };

  controller.find = (req, res) => {
    let uuid = req.params.uuid;
    Tarefas.findByPk(uuid)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Deu ruim.",
        });
      });
  };

  controller.delete = (req, res) => {
    let { uuid } = req.params;

    Tarefas.destroy({
      where: {
        uuid: uuid,
      },
    })
      .then(() => {
        res.send();
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Deu ruim.",
        });
      });
  };

  controller.update_priority = (req, res) => {
    let { uuid } = req.params;

    Tarefas.update(req.body, {
      where: {
        uuid: uuid,
      },
    })
      .then(() => {
        Tarefas.findByPk(uuid).then((data) => {
          res.send(data);
        });
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Deu ruim.",
        });
      });
  };

  controller.findAll = (req, res) => {
    Tarefas.findAll()
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Deu ruim.",
        });
      });
  };
<<<<<<< HEAD
>>>>>>> 8364914 (Primeiro commit no branch pr-cicd)
=======
>>>>>>> 83649143cc91188e0f3a7534ff54971c594552c4
  return controller;
};
