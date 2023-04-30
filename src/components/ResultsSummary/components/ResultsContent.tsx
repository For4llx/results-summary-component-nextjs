import styled from 'styled-components'

const ResultsContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ResultsContentHeading = styled.h1`
  font-size: ${props => props.theme.l};
  color: ${props => props.theme.white};
  margin-bottom: 0.875rem;
`;

const ResultsContentParagraph = styled.p`
  font-size: ${props => props.theme.body};
  color: ${props => props.theme.lightLavender};
  text-align: center;
`;

const ResultsContent = () => {
  return (
    <ResultsContentContainer role={"resultscontent"}>
        <ResultsContentHeading>Great</ResultsContentHeading>
        <ResultsContentParagraph>
            Your performance exceed 65% of 
            the people conducting the test here!
        </ResultsContentParagraph>
    </ResultsContentContainer>
  )
}

export default ResultsContent
