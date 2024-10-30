const handleRequest = (req, res) => {
  const { url, method } = req;

  console.log(`Got a ${method} request on ${url}.`);

  //näytä tehtävät
  if ("GET" === method && "/api/todo" === url) {
    res.writeHead(200, {
      "Content-Type": "application/json",
    });
    res.end("{status:OK}");
  }
  //näytä yksi tehtävä

  //luo uusi tehtävä

  //muokkaa tehtävää

  //poista tehtävä
};

module.exports = handleRequest;
