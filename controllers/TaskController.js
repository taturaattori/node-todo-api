const Task = require("../models/Task");
let task = new Task();

const { getRequestData, responseJSON } = require("../utils");

class TaskController {
  //näytä tehtävät - index
  static index(req, res) {
    try {
      const data = task.all();
      responseJSON(res, 200, data);
    } catch (e) {
      console.log(e);
      responseJSON(res, 404, { message: e.message });
    }
  }
  //näytä yksi tehtävä - show
  static show(req, res) {
    try {
      const id = req.url.split("/")[3];
      const data = task.find(id);
      responseJSON(res, 200, data);
    } catch (e) {
      console.log(e);
      responseJSON(res, 404, { message: e.message });
    }
  }
  //luo uusi tehtävä - add
  static async add(req, res) {
    try {
      const data = await getRequestData(req);
      const taskObject = await JSON.parse(data);
      const newTask = task.add(taskObject);
      responseJSON(res, 200, newTask);
    } catch (e) {
      console.log(e);
      responseJSON(res, 404, { message: e.message });
    }
  }
  //muokkaa tehtävää - update
  static update(req, res) {
    try {
      const id = req.url.split("/")[3];
      const data = task.complete(id);
      responseJSON(res, 200, data);
    } catch (e) {
      console.log(e);
      responseJSON(res, 404, { message: e.message });
    }
  }
  //poista tehtävä - delete
  static delete(req, res) {
    try {
      const id = req.url.split("/")[3];
      const data = task.delete(id);
      responseJSON(res, 200, data);
    } catch (e) {
      console.log(e);
      responseJSON(res, 404, { message: e.message });
    }
  }
}

module.exports = TaskController;
