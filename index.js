import express from "express";
import cors from "cors";
import formRouter from "./routes/form.route.js";

const app = express();
const PORT = process.env.Port || 4000;
app.use(cors());
app.use(express.json());
app.get("/", function (request, response) {
  response.send("Home");
});
app.use("/form", formRouter);

app.listen(PORT, () => console.log(`The server started in: ${PORT} `));
