import React from 'react'
import classes from './LoginData.module.scss'
import {Label} from '../Label/Label'
import TextInput from '../TextInput/TextInput'
import {connect} from 'react-redux'

const LoginData = props => {
  const loginData = Object.values(props.textInputs).filter(item => item.field === 'loginData')

  return (
    <fieldset className={classes.LoginData}>
      {
        props.label && <p className={classes.label}>
          <Label>
            Данные для входа в сервис
          </Label>
        </p>
      }

      {
        loginData.map(item => (
          <TextInput
            key={item.id}
            id={item.id}
            placeholder={item.placeholder}
            value={item.value}
          />
        ))
      }
    </fieldset>
  )
}

function mapStateToProps(state) {
  return {
    textInputs: state.registration.textInputs
  }
}

export default connect(mapStateToProps)(LoginData)
