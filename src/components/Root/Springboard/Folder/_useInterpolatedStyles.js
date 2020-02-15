import { useSpring } from 'react-spring';

const getMiddle = element => {
  let middleLeft = 0,
    middleTop = 0;
  if (element) {
  }

  return { middleLeft, middleTop };
};

const useInterpolatedStyles = ({ folderIconsRef, parentRef, isOpened }) => {
  const mainspring = useSpring({
    openAmount: isOpened ? 1 : 0,
  });
};

export default useInterpolatedStyles;
