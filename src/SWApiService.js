export default class SWApiService {
  _apiBase = 'https://swapi.co/api/';
  _imgUrlBase = 'https://starwars-visualguide.com/assets/img';

  getResourse = async (url) => {
    const result = await fetch(`${this._apiBase}${url}`);
    if (!result.ok) {
      throw new Error(`Ошибка запроса ${result.status}`);
    }
    const body = await result.json();
    return body;
  };

  getAllPeople = async () => {
    const people = await this.getResourse('people/');
    return people.results.map(this._transformHumanData);
  };

  getPerson = async (id) => {
    const human = await this.getResourse(`people/${id}/`);
    return this._transformHumanData(human);
  };

  getAllPlanets = async () => {
    const planets = await this.getResourse('planets/');
    return planets.results.map(this._transformPlanetData);
  };

  getPlanet = async (id) => {
    const planet = await this.getResourse(`planets/${id}/`);
    return this._transformPlanetData(planet);
  };

  getAllStarships = async () => {
    const starships = await this.getResourse('starships/');
    return starships.results.map(this._transformStarshipData);
  };

  getStarship = async (id) => {
    const starship = await this.getResourse(`starships/${id}/`);
    return this._transformStarshipData(starship);
  };

  getPersonImg = ({ id }) => `${this._imgUrlBase}/characters/${id}.jpg`;

  getPlanetImg = ({ id }) => `${this._imgUrlBase}/planets/${id}.jpg`;

  getStarShipImg = ({ id }) => `${this._imgUrlBase}/starships/${id}.jpg`;

  _idRegExp = (item) => {
    const idRegExp = /\/([0-9]*)\/$/;
    return +item.url.match(idRegExp)[1];
  };

  _transformPlanetData = (planet) => {
    return {
      id: this._idRegExp(planet),
      name: planet.name,
      population: planet.population,
      diametr: planet.diameter,
      rotationPeriod: planet.rotation_period,
      climat: planet.climate,
      orbitalPeriod: planet.orbital_period,
    };
  };

  _transformHumanData = (human) => {
    return {
      id: this._idRegExp(human),
      name: human.name,
      height: human.height,
      gender: human.gender,
      birthYear: human.birth_year,
    };
  };

  _transformStarshipData = (starship) => {
    return {
      id: this._idRegExp(starship),
      name: starship.name,
      model: starship.model,
      cost: starship.cost_in_credits,
      hyperdriveRating: starship.hyperdrive_rating,
    };
  };
}
