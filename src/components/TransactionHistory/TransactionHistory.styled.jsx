import styled from 'styled-components';

export const Table = styled.table`
  border: 0.1px solid rgb(131, 42, 112);
  width: 100%;
  text-align: center;
  box-shadow: 0 0 10px rgba(155, 79, 128, 1);
`;

export const Title = styled.th`
  padding: 5px;
  background: linear-gradient(blue, 10%, pink);
`;

export const Data = styled.td`
  padding: 2px;
  background: linear-gradient(white, 80%, pink);
  &:not(:last-child) {
    border-right: 1px solid rgb(131, 42, 112);
  }
`;
