import React from 'react'
import {setEnding} from '../../formFramework/formFramework'
import {CounterList} from '../CounterList/CounterList'
import {connect} from 'react-redux'
import DropdownToggle from "../DropdownToggle/DropdownToggle";
import DropdownWrapper from "../DropdownWrapper/DropdownWrapper";
import {Dropdown} from "../Dropdown/Dropdown";

const ComfortableFieldset = props => {
  const comfortable = Object.values(props.filters).filter(item => item.field === 'comfortable')
  const [bedrooms, beds, bathrooms] = comfortable
  let bedroomsText = bedrooms.value !== 0 ? setEnding(bedrooms.value, ['спальня', 'спальни', 'спален']) : null
  let bedsText = beds.value !== 0 ? setEnding(beds.value, ['кровать', 'кровати', 'кроватей']) : null
  let bathroomsText = bathrooms.value !== 0 ? setEnding(bathrooms.value, ['ванная', 'ванные', 'ванных']) : null
  let arr = []
  if (bedroomsText) arr.push(bedroomsText)
  if (bedsText) arr.push(bedsText)
  if (bathroomsText) arr.push(bathroomsText)
  let comfortValue = ''

  for (let i = 0; i < arr.length; i++) {
    comfortValue += i !== 2 ? arr[i] : ''
    if (i === 0 && arr.length > 1) comfortValue += ', '
    if (i === 1) comfortValue += '...'
  }

  return (
    <DropdownWrapper block='comfort'>
      <DropdownToggle
        label='Удобства номера'
        withBorder={true}
        placeholder={'Выберите удобства'}
        dropdownId={'comfort'}
        value={comfortValue.trim().length > 0 ? comfortValue : null}
        open={props.dropdowns['comfort']}
      />
      <Dropdown
        isOpen={props.dropdowns.comfort}
        block='comfort'
      >
        <CounterList
          counters={comfortable}
        />
      </Dropdown>
    </DropdownWrapper>
  )
}

function mapStateToProps(state) {
  return {
    filters: state.search.filters,
    dropdowns: state.search.dropdowns
  }
}

export default connect(mapStateToProps)(ComfortableFieldset)