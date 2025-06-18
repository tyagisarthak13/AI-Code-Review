import dotenv from "dotenv";
import app from "./src/app.js";

dotenv.config();

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
