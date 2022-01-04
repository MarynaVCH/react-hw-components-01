import styled from 'styled-components';

export const Listfriend = styled.ul`
  list-style: none;
  margin: auto;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 25px;
  padding-left: 20px;
  height: 65px;
  width: 200px;
  border-radius: 10px;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.25);
  border: 0.1px solid rgb(131, 42, 112);
  background: linear-gradient(blue, 10%, pink);
  text-transform: uppercase;

  &:hover {
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.4);
    transform: scale(1.01);
  }
`;

export const Status = styled.span`
  margin-right: 5px;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${props => (props.status ? 'green' : 'red')};
`;

export const Avatar = styled.img`
  margin-right: 10px;
  /* border-radius: 30%; */
`;
