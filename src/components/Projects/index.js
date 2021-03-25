import React, { useEffect } from "react";
import { Button, Button2 } from "../ButtonElements";
import {
  AboutContainer,
  AboutWrapper,
  AboutRow,
  Title,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle1,
  Subtitle2,
  ImgWrap,
  Img,
  BtnWrap,
} from "./ProjectsElements";
import { AiFillGithub } from "react-icons/ai";
import { RiGooglePlayFill } from "react-icons/ri";
import Aos from "aos";
import "aos/dist/aos.css";

const Projects = ({
  id,
  lightBg,
  imgStart,
  topLine,
  lightText,
  darkText,
  firstParagraph,
  headline,
  img,
  alt,
  primary,
  dark,
  imgStart2,
  topLine2,
  topLine3,
  firstParagraph2,
  firstParagraph3,
  img2,
  alt2,
  img3,
  alt3,
  techStacks,
  techStacks2,
  techStacks3,
  pathName,
  pathName2,
  pathName3,
  googlePlayPathName3,
  gitPathName,
  gitPathName2,
  topLine4,
  firstParagraph4,
  techStacks4,
  img4,
  alt4,
  pathName4,
  gitPathName4,
  topLine5,
  firstParagraph5,
  techStacks5,
  img5,
  alt5,
  gitPathName5,
  gitIconMarginLeft,
  gitIconMarginLeft2,
}) => {
  useEffect(() => Aos.init({}), []);
  return (
    <>
      <AboutContainer lightBg={lightBg} id={id}>
        <AboutWrapper>
          <Title>Projects</Title>
          <AboutRow imgStart={imgStart}>
            <Column1 data-aos="fade-right">
              <ImgWrap>
                <Img src={img} alt={alt} imgStart={imgStart} />
              </ImgWrap>
            </Column1>
            <Column2 data-aos="fade-left">
              <TextWrapper>
                <Heading imgStart={imgStart} lightText={lightText}>
                  {headline}
                </Heading>
                <TopLine imgStart={imgStart}>{topLine}</TopLine>
                <Subtitle1 darkText={darkText} imgStart={imgStart}>
                  {firstParagraph}
                </Subtitle1>
                <Subtitle2 imgStart={imgStart}>{techStacks}</Subtitle2>
                <BtnWrap>
                  <Button
                    to={{ pathname: pathName }}
                    target="_blank"
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    imgStart={imgStart}
                  >
                    Visit project
                  </Button>
                  <Button2
                    to={{ pathname: gitPathName }}
                    target="_blank"
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    imgStart={imgStart2}
                    gitIconMarginLeft={gitIconMarginLeft}
                  >
                    <AiFillGithub />
                  </Button2>
                </BtnWrap>
              </TextWrapper>
            </Column2>
          </AboutRow>
          <AboutRow imgStart={imgStart2}>
            <Column1 data-aos="fade-right">
              <ImgWrap>
                <Img src={img2} alt={alt2} imgStart={imgStart2} />
              </ImgWrap>
            </Column1>
            <Column2 data-aos="fade-left">
              <TextWrapper>
                <Heading imgStart={imgStart2} lightText={lightText}>
                  {headline}
                </Heading>
                <TopLine imgStart={imgStart2}>{topLine2}</TopLine>
                <Subtitle1 darkText={darkText} imgStart={imgStart2}>
                  {firstParagraph2}
                </Subtitle1>
                <Subtitle2 imgStart={imgStart}>{techStacks2}</Subtitle2>
                <BtnWrap>
                  <Button
                    to={{ pathname: pathName2 }}
                    target="_blank"
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    imgStart={imgStart2}
                  >
                    Visit Project
                  </Button>
                  <Button2
                    to={{ pathname: gitPathName2 }}
                    target="_blank"
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    imgStart={imgStart2}
                    gitIconMarginLeft={gitIconMarginLeft}
                  >
                    <AiFillGithub />
                  </Button2>
                </BtnWrap>
              </TextWrapper>
            </Column2>
          </AboutRow>
          <AboutRow imgStart={imgStart}>
            <Column1 data-aos="fade-right">
              <ImgWrap>
                <Img src={img5} alt={alt5} imgStart={imgStart} />
              </ImgWrap>
            </Column1>
            <Column2 data-aos="fade-left">
              <TextWrapper>
                <Heading imgStart={imgStart} lightText={lightText}>
                  {headline}
                </Heading>
                <TopLine imgStart={imgStart}>{topLine5}</TopLine>
                <Subtitle1 darkText={darkText} imgStart={imgStart}>
                  {firstParagraph5}
                </Subtitle1>
                <Subtitle2 imgStart={imgStart}>{techStacks5}</Subtitle2>
                <BtnWrap>
                  <Button2
                    to={{ pathname: gitPathName5 }}
                    target="_blank"
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    imgStart={imgStart}
                    gitIconMarginLeft={gitIconMarginLeft2}
                  >
                    <AiFillGithub />
                  </Button2>
                </BtnWrap>
              </TextWrapper>
            </Column2>
          </AboutRow>

          <AboutRow imgStart={imgStart2}>
            <Column1 data-aos="fade-right">
              <ImgWrap>
                <Img src={img4} alt={alt4} imgStart={imgStart2} />
              </ImgWrap>
            </Column1>
            <Column2 data-aos="fade-left">
              <TextWrapper>
                <Heading imgStart={imgStart2} lightText={lightText}>
                  {headline}
                </Heading>
                <TopLine imgStart={imgStart2}>{topLine4}</TopLine>
                <Subtitle1 darkText={darkText} imgStart={imgStart2}>
                  {firstParagraph4}
                </Subtitle1>
                <Subtitle2 imgStart={imgStart}>{techStacks4}</Subtitle2>
                <BtnWrap>
                  <Button
                    to={{ pathname: pathName4 }}
                    target="_blank"
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    imgStart={imgStart2}
                  >
                    Visit Project
                  </Button>
                  <Button2
                    to={{ pathname: gitPathName4 }}
                    target="_blank"
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    imgStart={imgStart2}
                    gitIconMarginLeft={gitIconMarginLeft}
                  >
                    <AiFillGithub />
                  </Button2>
                </BtnWrap>
              </TextWrapper>
            </Column2>
          </AboutRow>
          <AboutRow imgStart={imgStart}>
            <Column1 data-aos="fade-right">
              <ImgWrap>
                <Img src={img3} alt={alt3} imgStart={imgStart} />
              </ImgWrap>
            </Column1>
            <Column2 data-aos="fade-left">
              <TextWrapper>
                <Heading imgStart={imgStart} lightText={lightText}>
                  {headline}
                </Heading>
                <TopLine imgStart={imgStart}>{topLine3}</TopLine>
                <Subtitle1 darkText={darkText} imgStart={imgStart}>
                  {firstParagraph3}
                </Subtitle1>
                <Subtitle2 imgStart={imgStart}>{techStacks3}</Subtitle2>
                <BtnWrap>
                  <Button
                    to={{ pathname: pathName3 }}
                    target="_blank"
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    imgStart={imgStart}
                  >
                    See demo
                  </Button>
                  <Button2
                    to={{ pathname: googlePlayPathName3 }}
                    target="_blank"
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    imgStart={imgStart2}
                    gitIconMarginLeft={gitIconMarginLeft}
                  >
                    <RiGooglePlayFill />
                  </Button2>
                </BtnWrap>
              </TextWrapper>
            </Column2>
          </AboutRow>
        </AboutWrapper>
      </AboutContainer>
    </>
  );
};

export default Projects;
