import axios from "axios";

class Starship {
  // ------------Finding starship Url-------------

  async starshipUrl(endPoint: string, person: string) {
    const data = await axios.get(endPoint).then((res) => {
      const Array: [] = res.data.results;
      let startshipUrl: { starship: string } = { starship: "" };
      Array.forEach((item: { name: string; starships: [0]; url: string }) => {
        const name: string = person;
        if (item.name === name) {
          console.log("found name match");
          startshipUrl.starship = `${item.starships[0]}`;
        }
      });
      return startshipUrl.starship;
    });

    return data;
  }

  // ------------Pulling out the details of the starship-------------

  async Starship(endPoint: string) {
    const data = await axios.get(endPoint).then((res) => {
      const nameOfStarship: string = res.data.name;
      const model: string = res.data.model;
      const Class: string = res.data.starship_class;
      interface Starship {
        starship: {
          name: string;
          class: string;
          model: string;
        };
      }
      const starship: Starship = {
        starship: {
          name: nameOfStarship,
          class: Class,
          model,
        },
      };
      return starship.starship;
    });

    return data;
  }

  // ----------------Pulling out the details of the starship crew -----------

  async Crew(endPoint: string, starship: string) {
    const data: number = await axios.get(endPoint).then((res) => {
      const Array: [] = res.data.results;
      let crewNum: number = 0;
      Array.forEach((item: { name: string; crew: string }) => {
        const starshipName = starship;
        if (item.name === starshipName) {
          const crew = item.crew;
          crewNum = Number(crew.replace(/,/g, ""));
        }

        return crewNum;
      });
      return crewNum;
    });
    return data;
  }

  // ------------Finding out people resident on planet-------------

  async princessUrl(endPoint: string, Planet: string) {
    const data = await axios.get(endPoint).then((res) => {
      const Array: [] = res.data.results;
      let thePrincess = { princess: "" };
      Array.forEach((item: { name: string; residents: [0]; url: string }) => {
        const planet: string = Planet;
        if (item.name === planet) {
          const ans = item.residents[0];
          thePrincess.princess = `${ans}`;
          return ans;
        }
      });
      return thePrincess.princess;
    });

    return data;
  }

  // -----------Assinging boolean value if princess Liea was in Alderaan-------------

  async foundResident(endPoint: string, person: string) {
    const data = await axios.get(endPoint).then((res) => {
      const person: string = res.data.name;
      const foundPerson: string = person;
      if (person === foundPerson) {
        const Ans: boolean = true;
        const Answer: { isleiaOnPlanet: boolean } = {
          isleiaOnPlanet: Ans,
        };
        return Answer.isleiaOnPlanet;
      } else {
        const Ans: boolean = false;
        const Answer: { isleiaOnPlanet: boolean } = {
          isleiaOnPlanet: Ans,
        };
        return Answer.isleiaOnPlanet;
      }
    });
    return data;
  }
}

export const details = new Starship();
