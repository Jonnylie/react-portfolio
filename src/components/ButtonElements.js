import styled from 'styled-components';
import { Link } from 'react-scroll';

export const Button = styled(Link)`
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
    /* transition: all 0.2s ease-in-out; */

    &:hover {
        /* transition: all 0.2s ease-in-out; */
        transition: 0.2s ease-in-out;
        background: ${({ primary }) => (primary ? '#fff' : '')};
        color: ${({ dark }) => (dark ? '#010606' : '#ea342e')};
    }

    @media screen and (min-width: 1101px){
    margin-left: ${({ imgStart }) => (imgStart ? '75px' : '259px')};
  }
    
`;