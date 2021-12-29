import styled from 'styled-components';

export const ProfileCard = styled.div`
  display: grid;
  justify-content: space-between;
  align-items: stretch;
  width: 100%;
  box-shadow: 0 0 10px rgba(155, 79, 128, 1);
`;

export const Image = styled.img`
  height: 160px;
  width: 160px;
  border-radius: 50%;
  border: 5px solid #272133;
  margin-top: 20px;
  box-shadow: 0 10px 50px rgba(235, 25, 110, 1);
`;

export const Username = styled.p`
  margin-top: 15px;
  font-size: 1.5em;
`;

export const Description = styled.div`
  background-color: #222831;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  box-shadow: rgba(0, 0, 0, 0.7);
  color: white;
`;

export const Stats = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 4px;
  list-style: none;

  align-content: center;
  margin: 0;
`;
export const Items = styled.li`
  padding: 15px;
  display: flex;
  flex-direction: column;
`;

export const Quantity = styled.span`
  margin-block-end: auto;
`;
