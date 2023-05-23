const express = require("express");
const app = express();
const port = 3030;

app.get("/bin-check/:cardNumber", (req, res) => {
    console.log(`verifying issuer flag for bin ${req.params.cardNumber}`)
    res.send('ok')
})

app.listen(port, () => {
    console.log(`Express app server initialized on port ${port}`)
});
