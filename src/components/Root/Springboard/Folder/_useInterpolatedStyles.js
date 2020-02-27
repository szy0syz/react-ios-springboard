import { useRef } from 'react';
import { useSpring } from 'react-spring';

const getMiddle = element => {
  let middleLeft = 0,
    middleTop = 0;
  if (element) {
    //* 方法返回元素的大小及其相对于视口的位置
    const wrapperBoundingClientRect = element.getBoundingClientRect();
    middleLeft = wrapperBoundingClientRect.width / 2;
    middleTop = wrapperBoundingClientRect.height / 2;
  }

  return { middleLeft, middleTop };
};

const getRelativeRect = (element, wrapper) => {
  let height =0,
  left = 0,
  top = 0,
  width = 0;

  if (element && wrapper) {
    const elementBoundingClientRect = element.getBoundingClientRect();
    const wrapperBoundingClientRect = wrapper.getBoundingClientRect();
    height = elementBoundingClientRect.height;
    top = elementBoundingClientRect.top - wrapperBoundingClientRect.top;
    left = elementBoundingClientRect.left - wrapperBoundingClientRect.left;
    width = elementBoundingClientRect.width;

  }
  return { height, left, top, width };
}

const useInterpolatedStyles = ({ folderIconsRef, parentRef, isOpened }) => {
  const mainspring = useSpring({
    openAmount: isOpened ? 1 : 0,
  });

  const folderIconsRectRef = useRef({});
  const parentRectRef = useRef({});
};

export default useInterpolatedStyles;
