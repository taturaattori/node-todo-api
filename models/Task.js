let data = require("./data");

class Task {
  // kaikki tehtävät
  all() {
    return data;
  }
  // etsii halutun tehtävän halutulla id:llä
  find(id) {
    let task = data.find((task) => task.id === parseInt(id));

    if (!task) {
      throw new Error(`Task with id ${id} was not found.`);
    }

    return task;
  }
}

module.exports = Task;
