import express, { Request, Response } from "express";
import { fetchApi, isTrue, theStarship } from "./api";
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/information", async (req: Request, res: Response) => {
  const Crew = await fetchApi();
  const Ans = await isTrue();
  const Starship = await theStarship();

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
  const Response = new theResponse(Starship.starship, Crew, Ans.isleiaOnPlanet);

  return res.send(Response);
});

app.listen(5000, () => {
  console.log("server is running");
});
