import styled from 'styled-components';

export const CastStyled = styled.div`
  display: block;
`;

export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: -15px;
  padding: 0;
`;

export const CastItem = styled.li`
  width: calc((100% - 300px) / 10);
  margin: 15px;
`;

export const ActorName = styled.p`
  font-size: 12px;
  margin-bottom: 5px;
  font-weight: bold;
`;

export const Character = styled.p`
  font-size: 12px;
`;
