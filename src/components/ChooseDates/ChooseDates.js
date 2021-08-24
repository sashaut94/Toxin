import React from 'react'
import Guests from "../Guests/Guests"
import DropdownDataPicker from '../DropdownDatapicker/DropdownDatapicker'

export const ChooseDates = () => (
  <>
    <DropdownDataPicker
      amount={2}
      dropdownId='dataPicker'
    />
    <Guests
      dropdownId='guests'
    />
  </>
)
