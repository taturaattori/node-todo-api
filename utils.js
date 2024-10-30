const responseJSON = (res, status, payload) => {
  res.writeHead(status, {
    "Content-Type": "application/json",
  });
  res.end(JSON.stringify(payload));
};

module.exports = responseJSON;
