import React, { useParams } from 'react'
import ShowComments from './ShowComments'
import {
  LargeContainer, SmallContainer, SmallerContainer, Title, TitleContainer,
  SummaryContainer, SummaryHead, Summary,
} from './styles'

const SpecificClub = () => {
  const info = { title: 'Club' }
  const { id } = useParams()
  console.log(id)

  return (
    <div style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
    }}
    >
      <LargeContainer>
        <TitleContainer>
          <Title>{ info.title }</Title>
        </TitleContainer>
      </LargeContainer>
      <LargeContainer>
        <SummaryContainer>
          <SummaryHead>Summary:</SummaryHead>
          <Summary>Summary text will go here</Summary>
        </SummaryContainer>
        <SmallContainer>
          <SmallerContainer>
              Rating
          </SmallerContainer>
          <SmallerContainer>
              Tags
          </SmallerContainer>
        </SmallContainer>
      </LargeContainer>
      <ShowComments />
    </div>
  )
}

export default SpecificClub
