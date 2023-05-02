import styled from 'styled-components'
import FadeIn from '../../../components/animation/FadeIn';

const ResultsContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ResultsContentHeading = styled.h1`
  font-size: ${props => props.theme.l};
  color: ${props => props.theme.white};
  margin-bottom: 0.875rem;
`;

const ResultsContentParagraph = styled.p`
  font-size: ${props => props.theme.body};
  color: ${props => props.theme.lightLavender};
  text-align: center;
`;

const ResultsContent = () => {
  return (
    <ResultsContentContainer role={"resultscontent"}>
        <FadeIn 
          translateY={"2rem"}
          animationDuration={"400ms"}
          animation-timing-function={"ease-out"}
          animationDelay={"3.5s"}
        >
          <ResultsContentHeading>Great</ResultsContentHeading>
        </FadeIn>
        <FadeIn 
          translateY={"2rem"}
          animationDuration={"400ms"}
          animationDelay={"4s"}
          animation-timing-function={"ease-out"}
          animation-fill-mode={"forward"}
        >
          <ResultsContentParagraph>
              Your performance exceed 65% of 
              the people conducting the test here!
          </ResultsContentParagraph>
        </FadeIn>
    </ResultsContentContainer>
  )
}

export default ResultsContent
