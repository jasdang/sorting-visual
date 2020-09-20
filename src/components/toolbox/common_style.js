import styled from 'styled-components';
import {currentTileColor, pivotTileColor} from '../colors';

export const RadioContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
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
  width: 80px;
  padding: 8px;
  background: ${currentTileColor};
  font-weight: normal;
  text-align: center;
  &:hover {
    border: 1px solid ${currentTileColor};
  }
`;
