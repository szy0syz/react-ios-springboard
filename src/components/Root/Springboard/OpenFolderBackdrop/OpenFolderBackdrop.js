import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  backdrop-filter: blur(20px);
  height: 100%;
  top: 0;
  left: 0;
  width: 100%;
  position: absolute;
`;

const OpenFolderBackdrop = ({isVisible}) => {
  return isVisible ? <Wrapper /> : null;
};

export default OpenFolderBackdrop;
