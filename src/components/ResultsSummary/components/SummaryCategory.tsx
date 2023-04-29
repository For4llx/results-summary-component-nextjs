import { ICategory } from '@/interfaces'
import styled from 'styled-components'
import SummaryCategoryName from './SummaryCategoryName'
import SummaryCategoryScore from './SummaryCategoryScore'

const CategoryContainer = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background-color: ${props => props.color === "red" ? "hsl(0, 100%, 67%, 5%)" : props.color === "orange" ? "hsl(39, 100%, 56%, 5%)" : props.color === "green" ? "hsl(166, 100%, 37%, 5%)" : props.color === "blue" ? "hsl(234, 85%, 45%, 5%)" : null};
  color: ${props => props.color === "red" ? props.theme.lightRed : props.color === "orange" ? props.theme.orangeyYellow : props.color === "green" ? props.theme.greenTeal : props.color === "blue" ? props.theme.cobaltBlue : null};
  border-radius: 12px;
`

const CategoryIconAndName = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

const CategoryHeading = styled.h2`
  font-size: ${props => props.theme.body};
  font-weight: 500;
`

const CategoryEmphasis = styled.em`
  font-size: ${props => props.theme.body};
  color: ${props => props.theme.darkFrayBlue};
  font-weight: bold;
`

const CategoryScore = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

interface ISummaryCategory {
    category: ICategory
    color: string
}

const SummaryCategory = ({ category, color }: ISummaryCategory) => {
  return (
    <CategoryContainer color={color}>
        <SummaryCategoryName 
            icon={category.icon}
            category={category.category}
        />
      <SummaryCategoryScore score={category.score} />
    </CategoryContainer>
  )
}

export default SummaryCategory
