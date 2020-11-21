/* eslint-disable prettier/prettier */
import React, { useState, useEffect, FormEvent } from 'react';
import { allCharacters, searchCharacter } from '../../services/api';

import { Container, Content, Form } from './styles';

import Header from '../../components/Header';

interface CharactersProps {
  id: string;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  comics: [];
}

const DashboardHeros: React.FC = () => {
  const [newHeroRepository, setNewHeroRepository] = useState('');
  const [heroRepositories, setHeroRepositories] = useState<CharactersProps[]>(
    [],
  );
  const [heroRepositoriesLocal, setHeroRepositoriesLocal] = useState<
    CharactersProps[]
  >(() => {
    const storageRepositories = localStorage.getItem(
      '@HerosDashboard:repositories',
    );

    if (storageRepositories) {
      return JSON.parse(storageRepositories);
    }
    return [];
  });

  useEffect(() => {
    allCharacters
      .get('')
      .then(response => {
        const res = response.data;
        setHeroRepositories(res.data.results);
      })
  }, []);

  useEffect(() => {
    localStorage.setItem(
      '@HerosDashboard:repositories',
      JSON.stringify(heroRepositoriesLocal),
    );
  }, [heroRepositoriesLocal]);

  async function handleAddHeroRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    searchCharacter(newHeroRepository)
      .get('')
      .then(response => {
        const character = response.data;

        setHeroRepositoriesLocal([
          character.data.results[0],
          ...heroRepositories,
        ]);
        setNewHeroRepository('');
      });
  }

  return (
    <>
      <Header />
      <Form onSubmit={handleAddHeroRepository}>
        <input
          value={newHeroRepository}
          onChange={event => setNewHeroRepository(event.target.value)}
          placeholder="Digite o nome do herói por exemplo Spider-Man"
        />
        <button type="submit">Pesquisar</button>
      </Form>
      <Container>
        {heroRepositoriesLocal.length !== 0
          ? heroRepositoriesLocal.map(hero => (
            <Content key={hero.id}>
              <img
                src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
                alt={hero.name}
              />
              <div>
                <strong>{hero.name}</strong>
                <p>{hero.description}</p>
              </div>
            </Content>
            ))
          : heroRepositories.map(hero => (
            <Content key={hero.id}>
              <img
                src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
                alt={hero.name}
              />
              <div>
                <strong>{hero.name}</strong>
                <p>{hero.description}</p>
              </div>
            </Content>
            ))}
      </Container>
    </>
  );
};

export default DashboardHeros;
