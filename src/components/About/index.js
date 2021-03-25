import React, { useEffect } from "react";
import {
  AboutContainer,
  AboutWrapper,
  AboutRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  TopLineText,
  Heading,
  Subtitle,
  ImgWrap,
  Img,
} from "./AboutElements";
import Aos from "aos";
import "aos/dist/aos.css";

const About = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  darkText,
  firstParagraph,
  secondParagraph,
  headline,
  img,
  alt,
}) => {
  useEffect(() => Aos.init({}), []);
  return (
    <>
      <AboutContainer lightBg={lightBg} id={id}>
        <AboutWrapper data-aos="fade-up">
          <AboutRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <Heading lightText={lightText}>{headline}</Heading>
                <TopLine>
                  &#x2015; <TopLineText>{topLine}</TopLineText> &#x2015;
                </TopLine>
                <Subtitle darkText={darkText}>
                  {firstParagraph} <br />
                  <br /> {secondParagraph}
                </Subtitle>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </AboutRow>
        </AboutWrapper>
      </AboutContainer>
    </>
  );
};

export default About;
