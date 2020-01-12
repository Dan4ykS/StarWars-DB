import logicForDetails from './UploadLogicForComp';
import SWApiService from '../SWApiService';
import RenderItemDitails from './RenderItemDetails';

const swapi = new SWApiService();

const { getPerson, getPersonImg, getPlanet, getPlanetImg, getStarShipImg, getStarship } = swapi;

const PersonDetails = logicForDetails(getPerson, RenderItemDitails, getPersonImg, 'person');

const StarshipDetails = logicForDetails(getStarship, RenderItemDitails, getStarShipImg, 'starship');

const PlanetDetails = logicForDetails(getPlanet, RenderItemDitails, getPlanetImg, 'planet');

export { PersonDetails, StarshipDetails, PlanetDetails };
