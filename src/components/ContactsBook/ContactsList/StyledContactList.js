import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;  
  gap: 15px;
`;

export const StyledContactItem = styled.li`
  display: flex;
  align-items: center;  
  gap: 25px;
  font-size: 18px;
  font-weight: 400;
`;

export const StyledButton = styled.button`
  padding: 10px 15px;
  border: none;
  background-color: turquoise;
  border-radius: 4px;
  transition: transform 250ms ease-in;

  outline: none;

  &:hover,
  &:focus {
    cursor: pointer;
    transform: scale(1.2);
  }
`;

