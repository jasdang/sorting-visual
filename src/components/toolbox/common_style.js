import styled from 'styled-components';
import {currentTileColor, pivotTileColor} from '../colors';

export const RadioContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 100px);
  justify-content: center;
  grid-gap: 6px;
`;

export const InputRadio = styled.input`
  display: none;
  &:checked + label {
    background: ${pivotTileColor};
  }
`;

export const Label = styled.label`
  display: inline-block;
  border-radius: 2px;
  width: 100%;
  height: 40px;
  padding: 8px;
  background: ${currentTileColor};
  font-weight: normal;
  text-align: center;
  &:hover {
    background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3));
  }
`;
