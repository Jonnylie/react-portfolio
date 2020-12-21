import styled from 'styled-components'

export const AboutContainer = styled.div`
  padding-top: 100px;
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? '#f9f9f9' : '#010606')};

  @media screen and (max-width: 768px){
    padding: 100px 0
  }
`

export const AboutWrapper = styled.div`
  display: grid;
  z-index: 1;
  min-height: 1300px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`

export const AboutRow = styled.div`
  display: grid;
  margin-bottom: 100px;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

  @media screen and (max-width: 1100px) {
    grid-template-areas: ${({ imgStart }) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)}
  }
`

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`
export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`
export const Title = styled.h1`
  margin-bottom: 50px;
  font-size: 32px;
  line-height: 1.1;
  font-weight: 500;
  color: #f7f8fa;
  text-align: center;

  @media screen and (max-width: 480px){
      font-size: 24px;
  }
`

export const TextWrapper = styled.div`
    max-width:  555px; 
    padding-top: 0;
    /* padding-bottom: 60px; */
    position: relative;
`
export const TopLine = styled.h3`
    max-width: 340px;
    color: #F5554F;
    font-size: 1.5rem;
    font-weight: 500;
    /* letter-spacing: 1.4px; */
    margin-bottom: 16px;

    @media screen and (min-width: 1101px){
    text-align: ${({ imgStart }) => (imgStart ? 'left' : 'right')};
    margin-left: ${({ imgStart }) => (imgStart ? '75px' : '85px')};
  }
`
export const Heading = styled.h5`
  max-width: 340px;
  margin-bottom: 24px;
  font-size: 1rem;
  line-height: 1.1;
  font-weight: 500;
  color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#010606')};

  @media screen and (max-width: 480px){
      font-size: 32px;
  }

  @media screen and (min-width: 1101px){
    text-align: ${({ imgStart }) => (imgStart ? 'left' : 'right')};
    margin-left: ${({ imgStart }) => (imgStart ? '75px' : '85px')};
  }
`

export const Subtitle2 = styled.p`
  max-width: 340px;
  margin-bottom: 20px;
  font-size: 12px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? '#010606' : '#fff')};
  @media screen and (min-width: 1101px){
    margin-left: ${({ imgStart }) => (imgStart ? '75px' : '-17.5px')};
  }
`

export const Subtitle1 = styled.p` 
  box-shadow: 0 10px 30px -15px #212121;
  padding: 1.25rem 1.25rem 2.25rem;
  border-radius: 5px;
  background-color: #212121;
  margin-bottom: 20px;
  font-size: 16px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? '#010606' : '#fff')};
  @media screen and (min-width: 1101px){
    margin-left: ${({ imgStart }) => (imgStart ? '75px' : '-17.5px')};
    width: 440px;
  }
  @media screen and (max-width: 768px){
    max-width: 555px;
  }
`
export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`
export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`
export const Img = styled.img`
  width: 100%;
  margin-bottom: 10px;
  padding-right: 0;
  @media screen and (min-width: 1101px){
    margin-left: ${({ imgStart }) => (imgStart ? '-75px' : '75px')};
  }
`

