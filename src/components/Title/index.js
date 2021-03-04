import React from "react";
import Typewriter from "typewriter-effect";
import styled from "styled-components";

const MyTitle = styled.h1`
  position: absolute;
  width: 50%;
  left: 25%;
  right: 25%;
  top: 50%;
  margin-top: -75px;
  text-align: center;
  strong {
    font-size: 2em;
  }
  div {
    color: ${(props) => props.theme.textColor};
    text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.4);
    font-weight: 100;
    letter-spacing: 3px;
    .main {
      @media screen and (max-width: 768px) {
        strong {
          font-size: 1em;
        }
      }
    }
    .sub {
      font-size: 0.75em;
      @media screen and (max-width: 768px) {
        font-size: 0.5em;
      }
    }
  }
`;

const Title = () => {
  return (
    <div>
      <MyTitle>
        <div className="parent">
          <div className="child">
            <div className="main">
              <span>
                <strong>Jonny Lie</strong>
              </span>
            </div>
            <span className="sub">
              I am a
              <Typewriter
                options={{
                  strings: [
                    "Full Stack Developer",
                    "Mobile Developer",
                    "Gamer",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </div>
        </div>
      </MyTitle>
    </div>
  );
};

export default Title;
