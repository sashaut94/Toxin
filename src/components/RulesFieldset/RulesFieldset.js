import React from 'react'
import CheckBox from '../CheckBox/CheckBox'
import {Fieldset} from '../Fieldset/Fieldset'
import {connect} from 'react-redux'

const RulesFieldset = props => {
  const rules = Object.values(props.filters).filter(item => item.field === 'rules')
  return (
    <Fieldset
      legend='правила дома'
    >
      {
        rules.map(checkbox => (
          <CheckBox
            key={checkbox.id}
            id={checkbox.id}
            label={checkbox.label}
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

export default connect(mapStateToProps)(RulesFieldset)
