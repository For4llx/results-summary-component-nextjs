import FadeIn from '@/components/animation/FadeIn'
import { useState } from 'react'
import styled from 'styled-components'
import average from '../../../utils/average'
import sum from '../../../utils/sum'
import Results from './components/Results'
import Summary from './components/Summary'
import useFetchCategories from './hooks/useFetchCategories'

const ResultSummaryContainer = styled.section`
  display: flex;
  background-color: ${(props) => props.theme.white};
  border-radius: 32px;
  box-shadow: 0px 30px 60px hsl(224, 82%, 58%, 15%);
  @media screen and (max-width: 640px) {
    flex-direction: column;
  }
`

const ResultSummary = () => {
  const [score, setScore] = useState<number>(0)
  const {
    isLoadingCategories,
    categories,
    isErrorCategories,
    isSuccessCategories,
  } = useFetchCategories()

  if (isLoadingCategories) {
    return 'Loading...'
  }

  if (isErrorCategories) {
    return 'Error'
  }

  if (isSuccessCategories) {
    const quantityOfScore = categories.length
    const scores = categories.map((category) => category.score)
    const sumOfScores = sum(...scores)
    const score = average(sumOfScores, quantityOfScore)

    return (
      <FadeIn translateY="2rem" animationDuration="1s">
        <ResultSummaryContainer>
          <Results score={score} />
          <Summary categories={categories} />
        </ResultSummaryContainer>
      </FadeIn>
    )
  }
}

export default ResultSummary
