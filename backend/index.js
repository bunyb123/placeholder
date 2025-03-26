import express from "express";
import cors from "cors";

const app = express();
const port = 8080;

app.use(cors({
    origin: 'http://localhost:5173'
}))
app.get("/", (req, res) => {
  res.send("Example text from backend");
});
// new request VVV
app.get("/posts", (req, res) => {
    res.json({
        posts: [
            {
                title: "Anonymous",
                content: "post from backend!!!",
            },
        ],
    });
})
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});