import styled from 'styled-components'

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentHeading = styled.h1`
  font-size: ${props => props.theme.l};
  color: ${props => props.theme.white};
  margin-bottom: 0.875rem;
`;

const ContentParagraph = styled.p`
  font-size: ${props => props.theme.body};
  color: ${props => props.theme.lightLavender};
  text-align: center;
`;

const ResultsContent = () => {
  return (
    <ContentContainer>
        <ContentHeading>Great</ContentHeading>
        <ContentParagraph>
            Your performance exceed 65% of 
            the people conducting the test here!
        </ContentParagraph>
    </ContentContainer>
  )
}

export default ResultsContent
