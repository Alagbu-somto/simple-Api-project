import express, { Request, Response } from "express";
import { fetchApi, isTrue } from "./api";
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/information", async (req: Request, res: Response) => {
  const data = await fetchApi();
  const Ans = await isTrue();

  class theResponse {
    starship: {};
    crew: number;
    isleiaOnPlanet: boolean;
    constructor(starship: {}, crew: number, isleiaOnPlanet: boolean) {
      this.starship = starship;
      this.crew = crew;
      this.isleiaOnPlanet = isleiaOnPlanet;
    }
  }
  const Response = new theResponse(
    data.starship,
    data.crew,
    Ans.isleiaOnPlanet
  );

  return res.send(Response);
});

app.listen(5000, () => {
  console.log("server is running");
});
