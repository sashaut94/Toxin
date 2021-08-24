import React from 'react'
import CheckBox from '../CheckBox/CheckBox'
import {Fieldset} from '../Fieldset/Fieldset'
import {connect} from 'react-redux'

const AvailableFieldset = (props) => {
  const available = Object.values(props.filters).filter(item => item.field === 'available')
  return (
    <Fieldset legend='доступность'>
      {
        available.map(checkbox => (
          <CheckBox
            key={checkbox.id}
            id={checkbox.id}
            type='withDescription'
            label={checkbox.label}
            description={checkbox.description}
            checked={checkbox.checked}
          />
        ))
      }
    </Fieldset>
  )
}

function mapStateToProps(state) {
  return {
    filters: state.search.filters
  }
}

export default connect(mapStateToProps)(AvailableFieldset)
