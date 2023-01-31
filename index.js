const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("public"));

app.get("/mensaje", (_,res)=>{
    res.send("Hola desde la ruta mensaje")
})
app.get("/saludar", (_, res) => {
  res.send("hola");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
