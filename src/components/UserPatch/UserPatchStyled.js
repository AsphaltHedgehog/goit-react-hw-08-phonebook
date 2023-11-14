import styled from 'styled-components';

export const StyledContainer = styled.div`
  align-items: center;
  display: flex;
  gap: 25px;
`;

export const StyledEmailText = styled.p`
  color: #ffffffe0;
  font-weight: bold;
`;

export const StyledLogoutButton = styled.button`
  height: 30px;
  padding: 2px 15px;
  border: none;
  background-color: turquoise;
  border-radius: 4px;
  transition: transform 250ms ease-in;
  outline: none;
  cursor: pointer;
  &:hover {
    transform: scale(1.2);
  }
`;