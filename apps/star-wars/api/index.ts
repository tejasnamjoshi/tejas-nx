import axios from 'axios';

const BASE_URL = 'https://swapi.dev/api';

export interface IFilm {
  title: string;
  url: string;
}

export interface IVehicle {
  name: string;
  url: string;
  model: string;
  manufacturer: string;
  crew: string;
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
export const fetchSingleVehicle: FetchSingleVehicle = async (id: string) => {
  const response = await axios.get(`${BASE_URL}/vehicles/${id}`);
  return response.data;
};
