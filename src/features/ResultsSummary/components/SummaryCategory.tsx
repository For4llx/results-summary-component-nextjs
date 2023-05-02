import { ICategory } from '@/interfaces'
import styled from 'styled-components'
import SummaryCategoryName from './SummaryCategoryName'
import SummaryCategoryScore from './SummaryCategoryScore'

const CategoryContainer = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background-color: ${(props) =>
    props.color === 'red'
      ? 'hsl(0, 100%, 67%, 5%)'
      : props.color === 'orange'
      ? 'hsl(39, 100%, 56%, 5%)'
      : props.color === 'green'
      ? 'hsl(166, 100%, 37%, 5%)'
      : props.color === 'blue'
      ? 'hsl(234, 85%, 45%, 5%)'
      : null};
  color: ${(props) =>
    props.color === 'red'
      ? props.theme.lightRed
      : props.color === 'orange'
      ? props.theme.orangeyYellow
      : props.color === 'green'
      ? props.theme.greenTeal
      : props.color === 'blue'
      ? props.theme.cobaltBlue
      : null};
  border-radius: 12px;
  transition: 400ms;
  &:hover {
    transform: scale(1.15);
  }
`

interface ISummaryCategory {
  category: ICategory
  color: string
}

const SummaryCategory = ({ category, color }: ISummaryCategory) => {
  return (
    <CategoryContainer color={color} role={'category'}>
      <SummaryCategoryName icon={category.icon} category={category.category} />
      <SummaryCategoryScore score={category.score} />
    </CategoryContainer>
  )
}

export default SummaryCategory
