const getRequestData = (req) => {
  return new Promise((resolve, reject) => {
    try {
      let body = "";

      req.on("data", (chunk) => {
        body += chunk.toString();
      });

      req.on("end", () => {
        resolve(body);
      });
    } catch (e) {
      reject(e);
    }
  });
};

const responseJSON = (res, status, payload) => {
  res.writeHead(status, {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Origin, Content-Type, Accept",
    "Acces-Control-Allow-Methods": "GET,POST,PATCH,DELETE",
  });
  res.end(JSON.stringify(payload));
};

module.exports = { getRequestData, responseJSON };
