import axios from "axios";

// ----------------assigning details for the starship-----------
export const fetchApi = async () => {
  const endPoint = "https://swapi.dev/api/starships/9/";
  const data = await axios.get(endPoint).then((res) => {
    const name: string = res.data.name;
    const Class: string = res.data.starship_class;
    const model: string = res.data.model;
    const crew: string = res.data.crew;
    interface Starship {
      starship: {};
      crew: string;
    }
    const starship: Starship = {
      starship: { name, class: Class, model },
      crew,
    };
    return starship;
  });
  return data;
};

// ------------finding out people resident on planet Alderaan-------------
const Api = async () => {
  const endPoint = "https://swapi.dev/api/planets/";
  const data = await axios.get(endPoint).then((res) => {
    const Array = res.data.results;
    Array.forEach((item: { name: string; residents: [0]; url: string }) => {
      const planet: string = "Alderaan";
      if (item.name === planet) {
        console.log("found name match");
        // console.log(item.name);
        // console.log(item.residents);
        // console.log(item.url);
      }
      const ans = item.residents[0];
      return ans;
    });
  });
  console.log(data);

  return data;
};
// -----------assinging boolean if princess Liea was one the residents-------------
export const isTrue = async () => {
  const endPoint: string = "https://swapi.dev/api/people/5/";
  const data = await axios.get(endPoint).then((res) => {
    const person: string = res.data.name;
    if (person === person) {
      const Ans: boolean = true;
      const Answer: { isleiaOnPlanet: boolean } = {
        isleiaOnPlanet: Ans,
      };
      return Answer;
    } else {
      const Ans: boolean = false;
      const Answer: { isleiaOnPlanet: boolean } = {
        isleiaOnPlanet: Ans,
      };
      return Answer;
    }
  });
  return data;
};
