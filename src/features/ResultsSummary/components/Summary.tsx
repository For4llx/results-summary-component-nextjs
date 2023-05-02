import styled from 'styled-components'
import { ICategory } from '@/interfaces'
import SummaryCategoryList from './SummaryCategoryList'
import FadeIn from '../../../components/animation/FadeIn'

const SummaryContainer = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.75rem;
  width: 368px;
  padding: 2.5rem;
`

const SummaryHeading = styled.h1`
  color: ${(props) => props.theme.darkFrayBlue};
  font-size: ${(props) => props.theme.m};
`

const SummaryButton = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.white};
  background-image: linear-gradient(
    ${(props) => props.theme.darkFrayBlue},
    ${(props) => props.theme.darkFrayBlue}
  );
  padding: 1rem;
  border-radius: 128px;
  cursor: pointer;
  font-weight: 800;
  width: 100%;
  z-index: 1;

  &:hover {
    &:after {
      opacity: 1;
    }
  }

  &:after {
    content: '';
    transition: opacity 400ms;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: linear-gradient(
      ${(props) => props.theme.lightSlateBlue},
      ${(props) => props.theme.lightRoyalBlue}
    );
    width: 100%;
    height: 100%;
    border-radius: 128px;
    opacity: 0;
    z-index: -1;
  }
`

interface ISummary {
  categories: Array<ICategory>
}

const Summary = ({ categories }: ISummary) => {
  return (
    <SummaryContainer role={'summary'}>
      <SummaryHeading>Summary</SummaryHeading>
      <SummaryCategoryList categories={categories} />
      <FadeIn
        animationDuration="400ms"
        animationTimingFunction="ease-out"
        animationDelay="6s"
      >
        <SummaryButton>Continue</SummaryButton>
      </FadeIn>
    </SummaryContainer>
  )
}

export default Summary
