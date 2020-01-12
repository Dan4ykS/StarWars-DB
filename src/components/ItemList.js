import logicForList from './UploadLogicForComp';
import SWApiService from '../SWApiService';
import RenderItemList from './RenderItemList';

const swapi = new SWApiService();

const { getAllPeople, getAllPlanets, getAllStarships } = swapi;

const PersonsList = logicForList(getAllPeople, RenderItemList);

const StarshipsList = logicForList(getAllStarships, RenderItemList);

const PlanetsList = logicForList(getAllPlanets, RenderItemList);

export { PersonsList, StarshipsList, PlanetsList };
