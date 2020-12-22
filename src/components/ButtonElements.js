import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom'

export const Button = styled(LinkRouter)`
    border-radius: ${({ primary }) => (primary ? '50px' : '10px')};
    background: ${({ primary }) => (primary ? '#01BF71' : '#212121')};
    white-space: nowrap;
    padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
    color: ${({ dark }) => (dark ? '#010606' : '#F5554F')};
    font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;

    &:hover {
        background: ${({ primary }) => (primary ? '#fff' : '')};
        color: ${({ dark }) => (dark ? '#010606' : '#ea342e')};
    }

    @media screen and (min-width: 1101px){
    margin-left: ${({ imgStart }) => (imgStart ? '75px' : '189px')};
  }
    
`;

export const Button2 = styled(LinkRouter)`
    border-radius: ${({ primary }) => (primary ? '50px' : '10px')};
    background: ${({ primary }) => (primary ? '#01BF71' : '#212121')};
    white-space: nowrap;
    padding: ${({ big }) => (big ? '14px 48px' : '12px 15px')};
    color: ${({ dark }) => (dark ? '#010606' : '#F5554F')};
    font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    font-size: 20px;
    
    &:hover {
        background: ${({ primary }) => (primary ? '#fff' : '')};
        color: ${({ dark }) => (dark ? '#010606' : '#ea342e')};
    }   

    @media screen and (min-width: 1101px){
        margin-left: ${({ gitIconMarginLeft }) => (gitIconMarginLeft ? '20px' : '75px')};
    }

    @media screen and (max-width: 1100px){
        margin-left: ${({ gitIconMarginLeft }) => (gitIconMarginLeft ? '20px' : '')};
    }
`;