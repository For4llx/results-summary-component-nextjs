import styled from 'styled-components'
import { keyframes } from 'styled-components'

const fadeIn = (translateX: string, translateY: string) => keyframes`
    from
    {
        transform: translateY(${translateY});
        transform: translateX(${translateX});
        opacity: 0;
    }
    to
    {
        transform: translateY(0);
        opacity: 1;
    }
`

interface FadeIn {
  animationName?: string
  animationDuration?: string
  animationTimingFunction?: string
  animationDelay?: string
  animationIterationCount?: string
  animationDirection?: string
  animationFillMode?: string
  animationPlayState?: string
  translateX?: string
  translateY?: string
}

const FadeIn = styled.div<FadeIn>`
  opacity: 0;
  animation-name: ${(props) =>
    fadeIn(props.translateX || '0', props.translateY || '0')};
  animation-duration: ${(props) => props.animationDuration};
  animation-timing-function: ${(props) => props.animationTimingFunction};
  animation-delay: ${(props) => props.animationDelay};
  animation-iteration-count: ${(props) => props.animationIterationCount};
  animation-direction: ${(props) => props.animationDirection};
  animation-fill-mode: forwards;
`

export default FadeIn
