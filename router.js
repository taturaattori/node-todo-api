const responseJSON = require("./utils");
const TaskController = require("./controllers/TaskController");

const handleRequest = (req, res) => {
  const { url, method } = req;

  console.log(`Got a ${method} request on ${url}.`);

  //näytä tehtävät
  if (method === "GET" && url === "/api/todo") {
    TaskController.index(req, res);
  }
  //näytä yksi tehtävä
  else if (method === "GET" && url.match(/\/api\/todo\/([0-9]+)/)) {
    // /api/todo/id id on numero
    TaskController.show(req, res);
  }
  //muokkaa tehtävän tilaa
  else if (method === "PATCH" && url.match(/\/api\/todo\/([0-9]+)/)) {
    TaskController.update(req, res);
  }
  //poista tehtävä
  else if (method === "DELETE" && url.match(/\/api\/todo\/([0-9]+)/)) {
    TaskController.delete(req, res);
  }
  //luo uusi tehtävä
  else if (method === "POST" && url === "/api/todo") {
    TaskController.add(req, res);
  } else {
    responseJSON(res, 404, { message: "Route not found." });
  }
};

module.exports = handleRequest;
