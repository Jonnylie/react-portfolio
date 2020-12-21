import React from 'react'
import Typewriter from "typewriter-effect";
import styled from 'styled-components'

const MyTitle = styled.h1`
  position: absolute;
  width: 100%;
  top: 50%;
  margin-top: -75px;
  text-align: center;
  strong {
    font-size: 1.25em;
  }
  div {
    color: ${props => props.theme.textColor};
    text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.4);
    font-weight: 100;
    letter-spacing: 7px;
    .main {
      font-size: 50px;
      @media screen and (max-width:768px) {
          font-size: 26px;
      }

      @media screen and (max-width:768px) {
          font-size: 22px;
      }
      
    }
    .sub {
      font-size: 27px;
      letter-spacing: 2px;
    }
  }
`;

const Title = () => {
    return (
        <div>
            <MyTitle>
                <div className='parent'>
                    <div className='child'>
                        <div className='main'>
                            Hi, I am a
                        <br />
                            <span>
                                <strong>Jonny Lie</strong>
                            </span>
                        </div>
                        <div className="sub"></div>
                        <Typewriter
                            options={{
                                strings: ['Full Stack Developer', 'Mobile Developer', 'Gamer'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </div>
                </div>
            </MyTitle>
        </div>
    )
}

export default Title
