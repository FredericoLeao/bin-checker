const express = require("express");
const app = express();
const port = 3030;

app.get("/bin-check/:cardNumber", (req, res) => {
  console.log(`verifying issuer flag for bin ${req.params.cardNumber}`);
  const checkCardFlag = require("./bin-checker");
  const bin = checkCardFlag(req.params.cardNumber);
  if (!bin) {
    res.status(404).json({'msg': 'object not found'});
    return;
  }
  res.status(200)
  res.json({'bin-name': bin.toLowerCase().replace(' ', '-')});
})

app.listen(port, () => {
  console.log(`Express app server initialized on port ${port}`)
});
