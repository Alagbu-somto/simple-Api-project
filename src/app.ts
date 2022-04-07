import express, { Request, Response } from "express";
import { fetchApi, isTrue } from "./api";
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/information", async (req: Request, res: Response) => {
  const data = await fetchApi();
  const Ans = await isTrue();
  interface Response {
    startship: {};
    crew: string;
    isleiaOnPlanet: boolean;
  }
  const ourResponse: Response = {
    startship: data.starship,
    crew: data.crew,
    isleiaOnPlanet: Ans.isleiaOnPlanet,
  };
  return res.send(ourResponse);
});

app.listen(5000, () => {
  console.log("server is running");
});
