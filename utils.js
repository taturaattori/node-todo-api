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
  });
  res.end(JSON.stringify(payload));
};

module.exports = { getRequestData, responseJSON };
