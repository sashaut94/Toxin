import React from 'react'
import DropdownWrapper from '../DropdownWrapper/DropdownWrapper'
import DropdownToggle from '../DropdownToggle/DropdownToggle'
import {DropdownItem} from '../DropdownItem/DropdownItem'
import {CounterList} from '../CounterList/CounterList'
import {DropdownButtons} from '../DropdownButtons/DropdownButtons'

export const Dropdown = props => {
  return <div>
    <DropdownWrapper block={props.block}>
      <DropdownToggle
        label={props.label}
        withBorder={props.withBorder}
        placeholder={props.placeholder}
        value={props.value.trim() === '' ? null : props.value}
        dropdownId={props.dropdownId}
        open={props.dropdowns.guests}
      />
      <DropdownItem
        isOpen={props.dropdowns.guests}
        block={props.block}
      >
        {
          props.children
        }
      </DropdownItem>
    </DropdownWrapper>
  </div>
}
