import React from 'react';
import styled from 'styled-components';
import { animated, useSpring } from 'react-spring';

const Wrapper = styled(animated.div)`
  /* backdrop-filter: blur(20px); */
  height: 100%;
  left: 0;
  pointer-events: none;
  position: absolute;
  top: 0;
  width: 100%;

  :hover {
    cursor: pointer;
  }
`;

const MAXIMUM_BLUR = 20;
const MINIMUM_OPEN_AMOUNT_ON_SHOW = 0.1;
const MINIMUM_OPEN_AMOUNT_ON_HIDE = 0.9;

const OpenFolderBackdrop = ({ isVisible, onClose: pushClose }) => {
  const spring = useSpring({
    openAmount: isVisible ? 1 : 0,
  });

  const style = {
    backdropFilter: spring.openAmount.interpolate(openAmount => `blur(${openAmount * MAXIMUM_BLUR}px)`),
    opacity: spring.openAmount,
    pointerEvents: spring.openAmount.interpolate(openAmount =>
      (isVisible && openAmount >= MINIMUM_OPEN_AMOUNT_ON_SHOW) ||
      (!isVisible && openAmount >= MINIMUM_OPEN_AMOUNT_ON_HIDE)
        ? 'auto'
        : 'none'
    ),
  };

  return <Wrapper onClick={() => pushClose()} style={style} />;
};

export default OpenFolderBackdrop;
