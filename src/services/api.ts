import axios, { AxiosInstance } from 'axios';
import md5 from 'js-md5'

const PUBLIC_KEY = '3c0749dcc5f4d1bdbe26612cb348b2e3';
const PRIVATE_KEY = '11fe6ad8e3575ba53fe695ad360cff1a0093aa57';

const timestamp = Number(new Date())

const hash = md5.create();
hash.update(timestamp + PRIVATE_KEY + PUBLIC_KEY).hex()

export const allCharacters = axios.create({
  baseURL: `https://gateway.marvel.com/v1/public/characters?ts=${timestamp}&apikey=${PUBLIC_KEY}&hash=${hash}`,
});

export function searchCharacter(name: string) : AxiosInstance{
  return axios.create({
    baseURL: `https://gateway.marvel.com/v1/public/characters?ts=${timestamp}&name=${name}&apikey=${PUBLIC_KEY}&hash=${hash}`,
  });
} 
