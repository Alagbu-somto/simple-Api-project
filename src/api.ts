// import axios from "axios";

// ------------finding starship-------------

// const Starship = async () => {
//   const endPoint: string = "https://swapi.dev/api/people/";
//   const data = await axios.get(endPoint).then((res) => {
//     const Array: [] = res.data.results;
//     let startshipUrl: { starship: string } = { starship: "" };
//     Array.forEach((item: { name: string; starships: [0]; url: string }) => {
//       const name: string = "Darth Vader";
//       if (item.name === name) {
//         console.log("found name match");
//         console.log(item.name);
//         console.log(item.url);
//         startshipUrl.starship = `${item.starships[0]}`;
//       }
//     });
//     return startshipUrl;
//   });

//   return data;
// };

// ------------pulling out the datails of the starship-------------

// export const theStarship = async () => {
//   const foundStarship: { starship: string } = await Starship();
//   const endPoint: string = foundStarship.starship;
//   const data = await axios.get(endPoint).then((res) => {
//     const nameOfStarship: string = res.data.name;
//     const model: string = res.data.model;
//     const Class: string = res.data.starship_class;
//     interface Starship {
//       starship: {
//         name: string;
//         class: string;
//         model: string;
//       };
//     }
//     const starship: Starship = {
//       starship: {
//         name: nameOfStarship,
//         class: Class,
//         model,
//       },
//     };
//     return starship;
//   });

//   return data;
// };

// ----------------pulling out the details of the crew -----------

// export const fetchApi = async () => {
//   const endPoint: string = "https://swapi.dev/api/starships/";
//   const data: string = await axios.get(endPoint).then((res) => {
//     const Array: [] = res.data.results;
//     let crew: string = "";
//     Array.forEach((item: { name: string; crew: string }) => {
//       const starshipName = "Death Star";
//       if (item.name === starshipName) {
//         // console.log(item.name);
//         // console.log(item.crew);
//       }
//       crew = item.crew;
//       return item.crew;
//     });
//     return crew;
//   });
//   console.log(data);
//   return data;
// };

// ------------finding out people resident on planet Alderaan-------------

// const Api = async () => {
//   const endPoint: string = "https://swapi.dev/api/planets/";
//   const data = await axios.get(endPoint).then((res) => {
//     const Array: [] = res.data.results;
//     let thePrincess = { princess: "" };
//     Array.forEach((item: { name: string; residents: [0]; url: string }) => {
//       const planet: string = "Alderaan";
//       if (item.name === planet) {
//         const ans = item.residents[0];
//         thePrincess.princess = `${ans}`;
//         return ans;
//       }
//     });
//     return thePrincess;
//   });

//   return data;
// };

// -----------assinging boolean if princess Liea was in Alderaan-------------

// export const isTrue = async () => {
//   const foundPrincess = await Api();
//   const endPoint: string = foundPrincess.princess;
//   const data = await axios.get(endPoint).then((res) => {
//     const person: string = res.data.name;
//     const princess: string = "Leia Organa";
//     if (person === princess) {
//       const Ans: boolean = true;
//       const Answer: { isleiaOnPlanet: boolean } = {
//         isleiaOnPlanet: Ans,
//       };
//       return Answer;
//     } else {
//       const Ans: boolean = false;
//       const Answer: { isleiaOnPlanet: boolean } = {
//         isleiaOnPlanet: Ans,
//       };
//       return Answer;
//     }
//   });
//   return data;
// };
