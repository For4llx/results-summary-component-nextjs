import { ICategory } from '@/interfaces'
import styled from 'styled-components'

const CategoryEmphasis = styled.em`
  font-size: ${props => props.theme.body};
  color: ${props => props.theme.darkFrayBlue};
  font-weight: bold;
`

const ContainerCategoryScore = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

const CategoryScoreMax = styled.p``

interface ISummaryCategoryScore {
    score: number
}

const SummaryCategoryScore = ({ score }: ISummaryCategoryScore) => {
  return (
      <ContainerCategoryScore role={"categoryscore"}>
        <CategoryEmphasis>{score}</CategoryEmphasis>
        <CategoryScoreMax> / 100</CategoryScoreMax>
      </ContainerCategoryScore>
  )
}

export default SummaryCategoryScore
