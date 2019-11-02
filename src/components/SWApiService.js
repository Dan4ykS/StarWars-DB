export default class SWApiService {
  _apiBase = 'https://swapi.co/api/'
  async getResourse(url) {
    const result = await fetch(`${this._apiBase}${url}`);
    if (!result.ok) {
      throw new Error(`Ошибка запроса ${result.status}`)
    }
    const body = await result.json();
    return body;
  }
  async getAllPeople(){
    const result = await this.getResourse('people/');
    return result.results;
  }
  getPerson(id){
    return this.getResourse(`people/${id}/`);
  }
  async getAllPlanets(){
    const result = await this.getResourse('planets/');
    return result.results;
  }
  getPlanet(id){
    return this.getResourse(`planets/${id}/`);
  }
  async getAllStarships(){
    const result = await this.getResourse('starships/');
    return result.results;
  }
  getStarship(id){
    return this.getResourse(`starships/${id}/`);
  }
}