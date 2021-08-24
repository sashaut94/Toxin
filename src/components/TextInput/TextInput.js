import React from 'react'
import classes from './TextInput.module.scss'
import {Label} from '../Label/Label'
import {Text} from '../Text/Text'
import {ArrowButton} from '../ArrowButton/ArrowButton'
import {connect} from 'react-redux'
import {changeInput} from '../../store/actions/registrationActions'

const TextInput = props => {

  const cls = [classes.TextInput]
  if (props.type) cls.push(classes[props.type])
  if (props.block) cls.push(classes[props.block])

  return (
    <div className={cls.join(' ')}>
      {
        props.label && <p className={classes.label}>
          <Label
            isFooter={props.isFooter}
          >
            {props.label}
          </Label>
        </p>
      }
      {
        props.description && <p className={classes.text}>
          <Text>
            {props.description}
          </Text>
        </p>
      }

      <p className={classes.wrapper}>
        <input
          className={classes.input}
          type="text"
          placeholder={props.placeholder}
          value={props.value}
          onChange={(e) => props.changeInput(e, props.textInputs, props.id)}
        />

        {
          props.hasButton && <ArrowButton
            inInput={true}
          />
        }
      </p>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    textInputs: state.registration.textInputs
  }
}

function mapDispatchToProps(dispatch) {
  return {
    changeInput: (e, state, id) => dispatch(changeInput(e, state, id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TextInput)
