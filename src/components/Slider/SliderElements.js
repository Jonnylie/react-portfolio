import styled from "styled-components";

export const SliderContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
`;

export const SliderContent = styled.div`
  transform: translateX(-${(props) => props.translate}px);
  transition: transform ease-out ${(props) => props.transition}s;
  height: 100%;
  width: ${(props) => props.width}px;
  display: flex;
`;

export const Slide = styled.div`
  height: 100;
  width: ${(props) => (props.width ? `${props.width}px` : "100%")};
  background-image: url(${(props) => props.content});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  order: ${(props) => (props.order ? props.order : 0)};
`;

export const Arrow = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  ${(props) => (props.direction === "right" ? `right: 25px` : `left: 25px`)};
  height: 30px;
  width: 30px;
  justify-content: center;
  background: white;
  border-radius: 50%;
  cursor: pointer;
  align-items: center;
  transition: transform ease-in 0.1s;
  &:hover {
    transform: scale(1.1);
  }
  img {
    transform: translateX(
      ${(props) => (props.direction === "left" ? "-2" : "2")}px
    );
    &:focus {
      outline: 0;
    }
  }
`;

export const Dot = styled.span`
  padding: ${({ activeSlide }) => (activeSlide ? "6px" : "6px")};
  ${({ activeSlide }) => (activeSlide ? "width: 30px" : "")};
  ${({ activeSlide }) => (activeSlide ? "height: 5px" : "")};
  margin-right: 10px;
  cursor: pointer;
  border-radius: ${({ activeSlide }) => (activeSlide ? "15px" : "50%")};
  background: ${({ activeSlide }) => (activeSlide ? "#F5554F" : "white")};
`;

export const Dots = styled.div`
  position: absolute;
  bottom: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
