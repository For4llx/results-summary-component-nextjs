import styled from 'styled-components'

const ResultsScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(${props => props.theme.violetBlue}, ${props => props.theme.persianBlue});
  width: 200px;
  height: 200px;
  border-radius: 232px;
`;

const ResultsScoreResult = styled.p`
  color: ${props => props.theme.white};
  font-size: ${props => props.theme.xl};
  font-weight: bold;
`;

const ResultsScoreMax = styled.p`
  opacity: 50%;
  color: ${props => props.theme.lightLavender};
  font-size: ${props => props.theme.body};
  font-weight: bold;
`;

interface IResultsScore {
  score: number
}

const ResultsScore = ({ score }: IResultsScore) => {
  return (
    <ResultsScoreContainer role={"resultsscore"}>
        <ResultsScoreResult>{score}</ResultsScoreResult>
        <ResultsScoreMax>of 100</ResultsScoreMax>
    </ResultsScoreContainer>
  )
}

export default ResultsScore
