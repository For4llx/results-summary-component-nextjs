import { ICategory } from '@/interfaces';
import styled from 'styled-components'
import Results from './Results'
import Summary from './Summary';

const ResultSummaryContainer = styled.section`
  display: flex;
  background-color: ${props => props.theme.white};
  border-radius: 32px;
  box-shadow: 0px 30px 60px hsl(224, 82%, 58%, 15%);
`;

interface IResultsSummary {
  categories: Array<ICategory>
  score: number
}

const ResultSummary = ({ categories, score }: IResultsSummary) => {

  return (
    <ResultSummaryContainer>
        <Results score={score} />
        <Summary categories={categories} />
    </ResultSummaryContainer>
  )
}

export default ResultSummary
