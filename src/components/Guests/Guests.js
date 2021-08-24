import React from 'react'
import DropdownToggle from '../DropdownToggle/DropdownToggle'
import {CounterList} from '../CounterList/CounterList'
import {DropdownButtons} from '../DropdownButtons/DropdownButtons'
import {connect} from 'react-redux'
import {setEnding} from '../../formFramework/formFramework'
import {closeDropdown} from '../../store/actions/actionCreator'
import DropdownWrapper from '../DropdownWrapper/DropdownWrapper'
import {Dropdown} from '../Dropdown/Dropdown'

const Guests = props => {
  const guests = Object.values(props.filters).filter(item => item.field === 'guests')
  const [adults, children, babies] = guests
  const adultsWithChildrenAmount = adults.value + children.value
  const babiesAmount = babies.value
  const value = `${adultsWithChildrenAmount > 0 ? setEnding(adultsWithChildrenAmount, ['гость', 'гостя', 'гостей']) : ''}
  ${adultsWithChildrenAmount > 0 && babiesAmount > 0 ? ', ' : ''}
  ${babiesAmount > 0 ? setEnding(babiesAmount, ['младенец', 'младенца', 'младенцев']) : ''}`

  return (
    <DropdownWrapper block='guests'>
      <DropdownToggle
        label='Гости'
        withBorder
        placeholder='Сколько гостей'
        value={value.trim() === '' ? null : value}
        dropdownId={props.dropdownId}
        open={props.dropdowns.guests}
      />
      <Dropdown
        isOpen={props.dropdowns.guests}
        block='guests'
      >
        <CounterList
          counters={guests}
        >
          <DropdownButtons
            remove={adultsWithChildrenAmount + babiesAmount !== 0}
            // onClear={() => {
            // }}
            onApply={() => {
              props.closeDropdown(props.dropdowns, 'guests')
            }}
          />
        </CounterList>
      </Dropdown>
    </DropdownWrapper>
  )
}

function mapStateToProps(state) {
  return {
    dropdowns: state.search.dropdowns,
    filters: state.search.filters
  }
}

function mapDispatchToProps(dispatch) {
  return {
    closeDropdown: (currentState, dropdown) => dispatch(closeDropdown(currentState, dropdown)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Guests)