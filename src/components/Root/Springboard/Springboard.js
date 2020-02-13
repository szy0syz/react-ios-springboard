import React from 'react';
import styled from 'styled-components';

import Folder from './Folder'
import ios11DefaultWallpaper from './ios-11-default-wallpaper.jpg';

const Wrapper = styled.div`
  background: url(${ios11DefaultWallpaper});
  background-position: center;
  background-size: auto 100%;

  width: 60rem;
  height: 60rem;
`;

const Springboard = ({ folders }) => {
  return <Wrapper>
    {folders.map(folder => (
      <Folder key={folder.id}/>
    ))}
  </Wrapper>;
};

export default Springboard;
