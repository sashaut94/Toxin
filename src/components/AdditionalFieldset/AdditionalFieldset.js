import React from 'react'
import CheckBox from '../CheckBox/CheckBox'
import {connect} from 'react-redux'
import DropdownToggle from '../DropdownToggle/DropdownToggle'
import DropdownWrapper from '../DropdownWrapper/DropdownWrapper'
import {DropdownItem} from '../DropdownItem/DropdownItem'

const AdditionalFieldset = props => {
  return (
    <DropdownWrapper block='additional'>
      <DropdownToggle
        dropdownId={'additional'}
        label='дополнительные удобства'
        open={props.dropdowns.additional}
      />

      <DropdownItem
        isOpen={props.dropdowns.additional}
        block='additional'
      >
        {
          props.additionalServices.map(checkbox => (
            <CheckBox
              key={checkbox.id}
              id={checkbox.id}
              label={`${checkbox.label} (+${checkbox.price} рублей)`}
              checked={checkbox.checked}
              field={checkbox.field}
            />
          ))
        }
      </DropdownItem>
    </DropdownWrapper>
  )
}

function mapStateToProps(state) {
  return {
    additionalServices: state.search.additionalServices,
    dropdowns: state.search.dropdowns
  }
}

export default connect(mapStateToProps)(AdditionalFieldset)
