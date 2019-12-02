import React from 'react';
import styled from 'styled-components';


const ContentBox = styled.div`
  align-items: center;
  border-bottom: .15rem dotted white;
  border-left: .15rem dotted white;
  display: flex;
  flex-direction: column;
  padding-bottom: 2rem;
  width: 33%;
`;

const Header = styled.h2`
  color: #fff;
  font-family: Gotham-fat;
  font-size: 3.5rem;
`;

const SingleAtributte = styled.p`
  color: #fff;
  font-family: Gotham-light;
  font-size: 2rem;
  margin: .5rem;
`;

const Item = ({ name, birth, gender, height, hair, eye, mass }) => (
  <ContentBox>
    <Header>{name}</Header>
    <SingleAtributte>Birth year: {birth}</SingleAtributte>
    <SingleAtributte>Gender: {gender}</SingleAtributte>
    <SingleAtributte>Height: {height}</SingleAtributte>
    <SingleAtributte>Hair color: {hair}</SingleAtributte>
    <SingleAtributte>Eye color: {eye}</SingleAtributte>
    <SingleAtributte>Mass: {mass}</SingleAtributte>
  </ContentBox>
)

export default Item;