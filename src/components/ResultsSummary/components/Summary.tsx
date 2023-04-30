import styled from 'styled-components'
import { ICategory } from '@/interfaces'
import SummaryCategoryList from './SummaryCategoryList'

const SummaryContainer = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
  width: 368px;
  padding: 2.5rem;
`

const SummaryHeading = styled.h1`
  color: ${props => props.theme.darkFrayBlue};
  font-size: ${props => props.theme.m};
`

const SummaryButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.white};
  background-image: linear-gradient(${props => props.theme.darkFrayBlue}, ${props => props.theme.darkFrayBlue});
  padding: 1rem;
  border-radius: 128px;
  cursor: pointer;
  &:hover {
    font-weight: 800;
    background-image: linear-gradient(${props => props.theme.lightSlateBlue}, ${props => props.theme.lightRoyalBlue});

  }
`

interface ISummary {
    categories : Array<ICategory>
}

const Summary = ({ categories }: ISummary) => {
  return (
        <SummaryContainer role={"summary"}>
            <SummaryHeading>Summary</SummaryHeading>
            <SummaryCategoryList categories={categories} />
            <SummaryButton>Continue</SummaryButton>
        </SummaryContainer>
    )
}

export default Summary
