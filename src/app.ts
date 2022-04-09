import express, { Request, Response } from "express";
import { details } from "./oopApi";
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/information", async (req: Request, res: Response) => {
  // ------------Finding Starship-------------

  const endPoint1: string = "https://swapi.dev/api/people/";
  const person: string = "Darth Vader";

  // ------------Details Of The Starship-------------

  const starshipUrl: string = await details.starshipUrl(endPoint1, person);
  const starship: {} = await details.Starship(starshipUrl);

  // ----------------Details Of The Starship Crew -----------

  const endPoint2: string = "https://swapi.dev/api/starships/";
  const starshipName: string = "Death Star";
  const crew = await details.Crew(endPoint2, starshipName);
  const check = parseFloat(crew);

  // ----------------Residents Present -----------

  const endPoint3: string = "https://swapi.dev/api/planets/";
  const planet: string = "Alderaan";

  // ------------ Is The Princess Present In Planet Alderaan -----------

  const resident: string = "Leia Organa";
  const princessUrl: string = await details.princessUrl(endPoint3, planet);
  const foundPrincess: string = await details.foundResident(
    princessUrl,
    resident
  );

  class theResponse {
    starship: {};
    crew: string;
    isleiaOnPlanet: string;
    constructor(starship: {}, crew: string, isleiaOnPlanet: string) {
      this.starship = starship;
      this.crew = crew;
      this.isleiaOnPlanet = isleiaOnPlanet;
    }
  }
  const Response = new theResponse(starship, crew, foundPrincess);

  return res.json(Response);
});

app.listen(5000, () => {
  console.log("server is running");
});
