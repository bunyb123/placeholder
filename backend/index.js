import express from "express";
import cors from "cors";

const app = express();
const port = 8080;

app.use(cors({
    origin: 'http://localhost:5173'
}))
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});