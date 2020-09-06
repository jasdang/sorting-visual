import React from 'react';
import Bar from './bar';
import styled from 'styled-components';

const BarListContainer = styled.div`
  width: 1200px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const BarList = (props) => {
  const barList = props.values.map((value, id) => {
    return (
      <Bar
        height={value}
        color={props.colors[id]}
        key={Math.floor(Math.random() * 100000000000)}
      />
    );
  });

  return <BarListContainer>{barList}</BarListContainer>;
};

export default BarList;
