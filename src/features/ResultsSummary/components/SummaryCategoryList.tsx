import styled from 'styled-components'
import { ICategory } from '@/interfaces'
import SummaryCategory from './SummaryCategory'
import FadeIn from '../../../components/animation/FadeIn';

const CategoryListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`

const CategoryItem = styled.li`
  width: 100%;
`

interface ICategoryList {
    categories : Array<ICategory>
}

const SummaryCategoryList = ({ categories }: ICategoryList) => {
    const categoryList = categories.map((category, index) => 
        <CategoryItem role={"listitem"} key={index}>
          <FadeIn
            translateX='2rem'
            animationDelay='5s'
            animationDuration={(400 * (index + 1)).toString() + "ms"}
          >
            <SummaryCategory
              category={category}
              color={
                index % 4 === 0 ? "red" :
                index % 4 === 1 ? "orange" :
                index % 4 === 2 ? "green" :
                "blue"}
            />
          </FadeIn>
        </CategoryItem>)

  return (
    <CategoryListContainer role={"categorylist"}>
        {categoryList}
    </CategoryListContainer>
  )
}

export default SummaryCategoryList
