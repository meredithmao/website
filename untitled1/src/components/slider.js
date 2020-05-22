//useState hook from react
import React, { useState }  from 'react'
import ReactDOM from 'react-dom'
import { css, jsx } from '@emotion/core'
import sliderContent from './sliderContent'
import Slide from "./slide";
import images from "./images";

// function Slider
const Slider = props => {
    const getWidth = () => window.innerWidth

    const {slides} = props
    const firstSlide = slides[0]
    const secondSlide = slides[1]
    const lastSlide = slides[slides.length - 1]

    const [state, setState] = useState({
        translate: 0,
        transition: 0.45,
        _slides: [lastSlide, firstSlide, secondSlide]
    })
    const {translate, transition, _slides} = state

    return (
        <div css={SliderCSS}>
            <sliderContent
                translate={translate}
                transition={transition}
                width={getWidth() * _slides.length}
            >
                {props.slides.map((_slide, i) => (
                    <Slide key={_slide + i} content={_slide} />
                ))}
            </sliderContent>
        </div>
    )
}

const SliderCSS = css`
    position: relative;
    height: 50%;
    width: 100vw;
    margin: 0 auto;
    overflow: hidden;
`
export default Slider

// document.querySelectorAll(".carousel").forEach(domContainer => {
//     ReactDOM.render(<Slider slides={images}/>, domContainer);
// });