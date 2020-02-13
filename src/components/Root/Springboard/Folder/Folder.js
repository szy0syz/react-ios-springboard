import React from 'react';
import styled from 'styled-components';

import fackbookIcon from './facebook-logo.png';
import whatsappIcon from './whatsapp-logo.png';
import messengerIcon from './messenger-logo.png';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-flow: column nowrap;
  user-select: none;

  :hover {
    cursor: pointer;
  }
`;

const FolderName = styled.span`
  color: white;
  margin-top: 0.5rem;
`;

const FolderIcons = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 1rem;
  box-sizing: border-box;
  display: grid;
  grid-gap: 0.25rem;
  grid-template-columns: repeat(3, 1fr);

  padding: 0.5rem;
  height: 5rem;
  width: 5rem;
`;

const AppIcon = styled.img`
  border-radius: 0.25rem;
  height: auto;
  width: 100%;
`;

const Folder = ({ folder, onOpen: pushOpen }) => {
  return (
    <Wrapper onClick={() => pushOpen()}>
      <FolderIcons>
        <AppIcon src={fackbookIcon} />
        <AppIcon src={whatsappIcon} />
        <AppIcon src={messengerIcon} />
      </FolderIcons>
      <FolderName>{folder.name}</FolderName>
    </Wrapper>
  );
};

export default Folder;
