import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { characterInfo } from '../../services/api';

import { Container, Content, Comics, Icon } from './styles';

import Header from '../../components/Header';

interface Params {
  id: string;
}

interface Items {
  name: string;
  resourceURI: string;
}

interface CharactersProps {
  id: string;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  comics: {
    items: Items[];
  };
}

const InfoHero: React.FC = () => {
  const params = useParams<Params>();

  const [info, setInfo] = useState<CharactersProps[]>([]);

  useEffect(() => {
    characterInfo(params.id)
      .get('')
      .then(response => {
        const res = response.data;
        setInfo(res.data.results);
      });
  }, [params.id]);

  return (
    <>
      <Header />
      <Link to="/">
        <Icon />
      </Link>
      <Container>
        {info.map(hero => (
          <Content key={hero.id}>
            <strong>{hero.name}</strong>
            <img
              src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
              alt={hero.name}
            />
            <p>{hero.description}</p>
            <strong>{hero.name} presente nos Quadrinhos abaixo:</strong>
            {hero.comics.items.map(item => (
              <Comics key={item.resourceURI}>
                <p>{item.name}</p>
              </Comics>
            ))}
          </Content>
        ))}
      </Container>
    </>
  );
};

export default InfoHero;
