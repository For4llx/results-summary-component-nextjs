import styled from "styled-components";
import { keyframes } from "styled-components";
import { IAnimation } from "@/interfaces";

const fadeIn = keyframes`
    from
    {
        transform: translateX(4rem);
        opacity: 0;
    }
    to
    {
        transform: translateX(0rem);
        opacity: 1;
    }
`

const FadeIn = styled.div<IAnimation>`
    animation-name: ${fadeIn};
    animation-duration: ${props => props.animationDuration};
    animation-timing-function: ${props => props.animationTimingFunction};
    animation-delay: ${props => props.animationDelay};
    animation-iteration-count: ${props => props.animationIterationCount};
    animation-direction: ${props => props.animationDirection};
    animation-fill-mode: ${props => props.animationFillMode};
`

export default FadeIn
