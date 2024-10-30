const responseJSON = require("./utils");
const TaskController = require("./controllers/TaskController");

let controller = new TaskController();

const handleRequest = (req, res) => {
  const { url, method } = req;

  console.log(`Got a ${method} request on ${url}.`);

  //näytä tehtävät
  if (method === "GET" && url === "/api/todo") {
    controller.index(req, res);
  } else if (method === "GET" && url.match(/\/api\/todo\/([0-9]+)/)) {
    // /api/todo/id id on numero
    controller.show(req, res);
  } else {
    responseJSON(res, 404, { message: "Route not found." });
  }
  //näytä yksi tehtävä

  //luo uusi tehtävä

  //muokkaa tehtävää

  //poista tehtävä
};

module.exports = handleRequest;
