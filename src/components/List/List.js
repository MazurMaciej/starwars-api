import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Item from '../Item/Item';

const Statment = styled.h2`
  align-items: center;
  color: #fff;
  display: flex;
  justify-content: center;
  font-family: Gotham-fat;
  font-size: 3rem;
  height: calc(90vh - 3rem);
  margin: 0;
  text-transform: uppercase;
  width: 100%;
`;

const PageTitle = styled.h1`
  align-items: center;
  border-bottom: .15rem dotted white;
  color: #fff;
  display: flex;
  justify-content: center;
  font-family: Gotham-fat;
  font-size: 5rem;
  margin: 0;
  padding: 2rem 0;
  text-transform: uppercase;
  width: 100%;
`;

const WrapperPage = styled.div`
  background-color: rgba(0,0,0,.85);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const List = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setIsError] = useState(false);

  useEffect(() => {
    fetch('https://swapi.co/api/people/')
      .then(response => response.json())
      .then(response => {
        setData(response.results)
        setIsLoading(false);
      })
      .catch(error => {
        setIsError(true);
        console.log(`Content is available, error: ${error}`);
      });
  }, [data])

  return (
    <WrapperPage>
      <PageTitle>starwars - heroes</PageTitle>
      {error ? (<Statment>Sorry, content is available, try again later . . .</Statment>) : (isLoading && <Statment>Wait,  I'm loading StarWars heroes for you . . . </Statment>)}
      {data.map(({ name, birth_year, gender, hair_color, eye_color, height, mass }) =>
        <Item
          key={name}
          name={name}
          birth={birth_year}
          gender={gender}
          height={height}
          hair={hair_color}
          eye={eye_color}
          mass={mass}
        />)}
    </WrapperPage >
  )
};

export default List
