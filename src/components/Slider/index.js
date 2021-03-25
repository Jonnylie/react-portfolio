import React, { useState, useRef, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import {
  SliderContainer,
  SliderContent,
  Slide,
  Arrow,
  Dots,
  Dot,
} from "./SliderElements";
import leftArrow from "../../images/left-arrow.svg";
import rightArrow from "../../images/right-arrow.svg";
import Title from "../Title";

const getWidth = () => window.innerWidth;

/**
 * @function Slider
 */
const Slider = (props) => {
  const { slides } = props;
  const handlers = useSwipeable({
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () => prevSlide(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  // Array with elem being the flexbox order of each slide.
  // Exemple with 3 slides [Slide 1, Slide 2, Slide 3] :
  // For a smooth transition when on Slide 1 we need to place them like [Slide 3, Slide 1, Slide 2]
  // To do that we create an order Array with value : [0,1,-1]
  // Each elem of the slides will take the elem from order with same index
  const slideOrder = slides.map((_slide, i) => {
    if (i <= Math.floor(slides.length / 2)) return i;
    return i - slides.length;
  });

  const [state, setState] = useState({
    activeSlide: 0,
    translate: getWidth() * Math.floor((slides.length - 1) / 2),
    transition: 1,
    orders: slideOrder,
  });

  // Var to block spamming next/prev slide
  const [isTransition, setTransition] = useState(false);
  const { activeSlide, translate, orders, transition } = state;

  const autoPlayRef = useRef();
  const transitionRef = useRef();
  const resizeRef = useRef();

  useEffect(() => {
    autoPlayRef.current = nextSlide;
    transitionRef.current = smoothTransition;
    resizeRef.current = handleResize;
  });

  useEffect(() => {
    const play = () => {
      autoPlayRef.current();
    };

    const smooth = () => {
      transitionRef.current();
    };

    const resize = () => {
      resizeRef.current();
    };

    let isMounted = true;
    let interval = setInterval(play, props.autoPlay * 1000);
    const transitionEnd = window.addEventListener("transitionend", () => {
      if (isMounted) {
        setTransition(false);
        smooth();
        clearInterval(interval);
        interval = setInterval(play, props.autoPlay * 1000);
      }
    });
    const onResize = window.addEventListener("resize", resize);

    return () => {
      clearInterval(interval);
      window.removeEventListener("transitionend", transitionEnd);
      window.removeEventListener("resize", onResize);
    };
  }, [props.autoPlay]);

  const handleResize = () => {
    setState({ ...state, translate: getWidth(), transition: 0 });
  };

  useEffect(() => {
    if (transition === 0) setState({ ...state, transition: 0.45 });
  }, [transition]);

  const smoothTransition = () => {
    let _orders = slideOrder;

    //To change position after transition end
    //Need just to offset each value to the right activeSlide number of times
    // Ex :
    // ActiveSlide=0, Slide displayed: [Slide3, slide1(active slide), slide2], order : [0,1,-1]
    // ActiveSlide=1, Slide displayed: [Slide1, slide2(active slide), slide3], order : [-1,0,1]
    // ActiveSlide=2, Slide displayed: [Slide2, slide3(active slide), slide1], order : [1,-1,0]
    for (let i = 0; i < activeSlide; i++) {
      _orders.unshift(_orders.pop());
    }

    setState({
      ...state,
      orders: _orders,
      transition: 0,
      translate: getWidth() * Math.floor((slides.length - 1) / 2),
    });
  };

  const nextSlide = () => {
    if (!isTransition) {
      setTransition(true);
      setState({
        ...state,
        translate: translate + getWidth(),
        activeSlide: activeSlide === slides.length - 1 ? 0 : activeSlide + 1,
      });
    }
  };

  const prevSlide = () => {
    if (!isTransition) {
      setTransition(true);
      setState({
        ...state,
        translate: 0,
        activeSlide: activeSlide === 0 ? slides.length - 1 : activeSlide - 1,
      });
    }
  };

  const dotsSlideJump = (dotIndex) => {
    if (!isTransition && dotIndex !== activeSlide) {
      setTransition(true);
      setState({
        ...state,
        translate: translate + getWidth() * orders[dotIndex],
        activeSlide: dotIndex,
      });
    }
  };

  return (
    <SliderContainer {...handlers}>
      <SliderContent
        translate={translate}
        transition={transition}
        width={getWidth() * slides.length}
      >
        {slides.map((slide, i) => (
          <Slide content={slide} key={i} width={getWidth()} order={orders[i]} />
        ))}
      </SliderContent>
      <Title />

      <Arrow direction="left" onClick={prevSlide}>
        <img src={leftArrow} />
      </Arrow>
      <Arrow direction="right" onClick={nextSlide}>
        <img src={rightArrow} />
      </Arrow>
      <Dots>
        {slides.map((slide, i) => (
          <Dot
            key={slide + i}
            onClick={() => dotsSlideJump(i)}
            activeSlide={activeSlide === i}
          />
        ))}
      </Dots>
    </SliderContainer>
  );
};

export default Slider;
