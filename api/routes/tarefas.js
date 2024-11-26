module.exports = (app) => {
<<<<<<< HEAD
  const controllerFactory = require("../controllers/tarefas");
  const controller = controllerFactory();

  app.route("/api/tarefas")
    .get(async (req, res, next) => {
      try {
        await controller.findAll(req, res);
      } catch (err) {
        next(err);
      }
    })
    .post(async (req, res, next) => {
      try {
        await controller.create(req, res);
      } catch (err) {
        next(err);
      }
    });

  app.route("/api/tarefas/:uuid")
    .get(async (req, res, next) => {
      try {
        await controller.find(req, res);
      } catch (err) {
        next(err);
      }
    });

  app.route("/api/tarefas/update_priority/:uuid")
    .put(async (req, res, next) => {
      try {
        await controller.update_priority(req, res);
      } catch (err) {
        next(err);
      }
    });

  app.route("/api/tarefas/:uuid")
    .delete(async (req, res, next) => {
      try {
        await controller.delete(req, res);
      } catch (err) {
        next(err);
      }
    });
=======
  const controller = require("../controllers/tarefas")();

  app.route("/api/tarefas").get(controller.findAll).post(controller.create);
  app.route("/api/tarefas/:uuid").get(controller.find);
  app
    .route("/api/tarefas/update_priority/:uuid")
    .put(controller.update_priority);
  app.route("/api/tarefas/:uuid").delete(controller.delete);
>>>>>>> 8364914 (Primeiro commit no branch pr-cicd)
};
