import Express from "express";

const app = Express();

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}/`);
});
