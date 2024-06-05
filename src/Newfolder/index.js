import {CharacterCountList, ResultText, SpanText} from './style'

const CharacterCount = props => {
  const {eachCharDetails} = props
  const {character} = eachCharDetails
  const count = character.length
  return (
    <CharacterCountList>
      <ResultText>
        {character} : <SpanText>{count}</SpanText>
      </ResultText>
    </CharacterCountList>
  )
}

export default CharacterCount
