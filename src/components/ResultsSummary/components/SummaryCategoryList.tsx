import styled from 'styled-components'
import { ICategory } from '@/interfaces'
import SummaryCategory from './SummaryCategory'

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
          <SummaryCategory
            category={category}
            color={
              index % 4 === 0 ? "red" :
              index % 4 === 1 ? "orange" :
              index % 4 === 2 ? "green" :
              "blue"}
          />
        </CategoryItem>)

  return (
    <CategoryListContainer role={"categorylist"}>
        {categoryList}
    </CategoryListContainer>
  )
}

export default SummaryCategoryList
