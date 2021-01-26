import axios from 'axios';

const BASE_URL = 'https://swapi.dev/api';

export interface IFilm {
  title: string;
  url: string;
  director: string;
  producer: string;
  episode_id: string;
  opening_crawl: string;
}

export interface IVehicle {
  name: string;
  url: string;
  model: string;
  manufacturer: string;
  crew: string;
}

export interface IStarship {
  name: string;
  url: string;
  model: string;
  manufacturer: string;
  crew: string;
  hyperdrive_rating: string;
  starship_class: string;
}

export interface IPlanet {
  name: string;
  orbital_period: string;
  terrain: string;
  url: string;
  climate: string;
}

type FetchAllFilms = () => Promise<{ results: IFilm[] }>;
export const fetchAllFilms: FetchAllFilms = async () => {
  const response = await axios.get(`${BASE_URL}/films/`);
  return response.data;
};

type FetchSingleFilm = (id: string) => Promise<{ results: IFilm }>;
export const fetchSingleFilm: FetchSingleFilm = async (id) => {
  const response = await axios.get(`${BASE_URL}/films/${id}`);
  return response.data;
};

type FetchAllVehicles = () => Promise<{ results: IVehicle[] }>;
export const fetchVehicles: FetchAllVehicles = async () => {
  const response = await axios.get(`${BASE_URL}/vehicles`);
  return response.data;
};

type FetchSingleVehicle = (id: string) => Promise<IVehicle>;
export const fetchSingleVehicle: FetchSingleVehicle = async (id) => {
  const response = await axios.get(`${BASE_URL}/vehicles/${id}`);
  return response.data;
};

type FetchAllStarships = () => Promise<{ results: IStarship[] }>;
export const fetchAllStarships: FetchAllStarships = async () => {
  const response = await axios.get(`${BASE_URL}/starships`);
  return response.data;
};

type FetchSingleStarship = (id: string) => Promise<IStarship>;
export const fetchSingleStarship: FetchSingleStarship = async (id) => {
  const response = await axios.get(`${BASE_URL}/starships/${id}`);
  return response.data;
};

export const fetchAllPlanets = async () => {
  const response = await axios.get<{ results: IPlanet[] }>(
    `${BASE_URL}/planets`
  );
  return response.data;
};

export const fetchSinglePlanet = async (id: string) => {
  const response = await axios.get<IPlanet>(`${BASE_URL}/planets/${id}`);
  return response.data;
};
