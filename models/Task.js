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
  // muuttaa tehtävän tilaa
  complete(id) {
    let task = data.find((task) => task.id === parseInt(id));

    if (!task) {
      throw new Error(`Task with id ${id} was not found.`);
    }

    task.completed = true;
    return task;
  }
  // poistaa tehtävän
  delete(id) {
    let task = data.find((task) => task.id === parseInt(id));

    if (!task) {
      throw new Error(`Task with id ${id} was not found.`);
    }

    data = data.filter((item) => {
      return item.id !== task.id;
    });

    return `Succesfully removed task with id ${id}`;
  }
}

module.exports = Task;
