import styled from 'styled-components'

const ContainerCategoryName = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

const CategoryNameHeading = styled.h2`
  font-size: ${props => props.theme.body};
  font-weight: 500;
`

interface ISummaryCategoryName {
    category: string
    icon: string
}

const SummaryCategoryName = ({ icon, category }: ISummaryCategoryName) => {
  return (
      <ContainerCategoryName role={"categoryname"}>
        <img 
          src={icon}
          alt={category}
        />
        <CategoryNameHeading>{category}</CategoryNameHeading>
      </ContainerCategoryName>
  )
}

export default SummaryCategoryName
