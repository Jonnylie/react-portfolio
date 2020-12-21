import React from 'react'
import { Button } from '../ButtonElements'
import { AboutContainer, AboutWrapper, AboutRow, Title, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle1, Subtitle2, ImgWrap, Img, BtnWrap } from './ProjectsElements'

const Projects = ({ id, lightBg, imgStart, topLine, lightText, darkText, firstParagraph, headline, img, alt, primary, dark, lightBg2, imgStart2, topLine2, lightText2, darkText2, firstParagraph2, headline2, img2, alt2, img3, imgStart3, techStacks, techstacks2, techstacks3 }) => {
    return (
        <>
            <AboutContainer lightBg={lightBg} id={id}>

                <AboutWrapper>
                    <Title>Portfolio Projects</Title>
                    <AboutRow imgStart={imgStart}>
                        <Column1>
                            <ImgWrap>
                                <Img src={img} alt={alt} imgStart={imgStart} />
                            </ImgWrap>
                        </Column1>
                        <Column2>
                            <TextWrapper>
                                <Heading imgStart={imgStart} lightText={lightText}>{headline}</Heading>
                                <TopLine imgStart={imgStart}>{topLine}</TopLine>
                                <Subtitle1 darkText={darkText} imgStart={imgStart}>{firstParagraph}</Subtitle1>
                                <Subtitle2 imgStart={imgStart}>{techStacks}</Subtitle2>
                                <BtnWrap>
                                    <Button
                                        primary={primary ? 1 : 0}
                                        dark={dark ? 1 : 0}
                                        imgStart={imgStart}
                                    >
                                        Visit Project
                                    </Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column2>
                    </AboutRow>
                    <AboutRow imgStart={imgStart2}>
                        <Column1>
                            <ImgWrap>
                                <Img src={img2} alt={alt2} imgStart={imgStart2} />
                            </ImgWrap>
                        </Column1>
                        <Column2>
                            <TextWrapper>
                                <Heading imgStart={imgStart2} lightText={lightText}>{headline}</Heading>
                                <TopLine imgStart={imgStart2}>{topLine2}</TopLine>
                                <Subtitle1 darkText={darkText} imgStart={imgStart2}>{firstParagraph}</Subtitle1>
                                <Subtitle2 imgStart={imgStart}>{techStacks}</Subtitle2>
                                <BtnWrap>
                                    <Button
                                        primary={primary ? 1 : 0}
                                        dark={dark ? 1 : 0}
                                        imgStart={imgStart2}
                                    >
                                        Visit Project
                                    </Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column2>
                    </AboutRow>
                    <AboutRow imgStart={imgStart}>
                        <Column1>
                            <ImgWrap>
                                <Img src={img3} alt={alt} imgStart={imgStart} />
                            </ImgWrap>
                        </Column1>
                        <Column2>
                            <TextWrapper>
                                <Heading imgStart={imgStart} lightText={lightText}>{headline}</Heading>
                                <TopLine imgStart={imgStart}>{topLine}</TopLine>
                                <Subtitle1 darkText={darkText} imgStart={imgStart}>{firstParagraph}</Subtitle1>
                                <Subtitle2 imgStart={imgStart}>{techStacks}</Subtitle2>
                                <BtnWrap>
                                    <Button
                                        primary={primary ? 1 : 0}
                                        dark={dark ? 1 : 0}
                                        imgStart={imgStart3}
                                    >
                                        See demo
                                    </Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column2>
                    </AboutRow>
                </AboutWrapper>
            </AboutContainer>
        </>
    )
}

export default Projects
