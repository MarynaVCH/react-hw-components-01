import styled from 'styled-components';

export const Section = styled.section`
  background: linear-gradient(blue, 10%, pink);
`;

export const Title = styled.h2`
  text-align: center;
`;

export const StatList = styled.ul`
  list-style: none;
  display: flex;
  padding-left: 0;
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border: 0.1px solid rgb(131, 42, 112);
  width: 42px;
  height: 42px;
  margin: 0 2px 2px 0;
`;
