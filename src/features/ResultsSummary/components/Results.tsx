import styled from 'styled-components'
import ResultsScore from './ResultsScore'
import ResultsContent from './ResultsContent'

const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.188rem;
  background-image: linear-gradient(
    ${(props) => props.theme.lightSlateBlue},
    ${(props) => props.theme.lightRoyalBlue}
  );
  border-radius: 32px;
  padding: 2.5rem;
  max-width: 368px;
`

const ResultsHeading = styled.h1`
  color: ${(props) => props.theme.lightLavender};
  font-size: ${(props) => props.theme.m};
`

interface IResults {
  score: number
}

export default function Results({ score }: IResults) {
  return (
    <ResultsContainer role={'results'}>
      <ResultsHeading>Your Result</ResultsHeading>
      <ResultsScore score={score} />
      <ResultsContent />
    </ResultsContainer>
  )
}
