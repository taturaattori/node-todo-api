const Task = require("../models/Task");
let task = new Task();

const responseJSON = require("../utils");

class TaskController {
  //näytä tehtävät - index
  index(req, res) {
    try {
      const data = task.all();
      responseJSON(res, 200, data);
    } catch (e) {
      console.log(e);
      responseJSON(res, 404, { message: e.message });
    }
  }
  //näytä yksi tehtävä - show
  //luo uusi tehtävä - add
  //muokkaa tehtävää - update
  //poista tehtävä - delete
}

module.exports = TaskController;