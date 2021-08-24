import React from 'react'
import classes from './LoginData.module.scss'
import TextInput from '../TextInput/TextInput'
import {connect} from 'react-redux'
import {Text} from '../Text/Text'

const LoginData = props => {
  const loginData = Object.values(props.textInputs).filter(item => item.field === 'loginData')

  return (
    <fieldset className={classes.LoginData}>
      {
        props.label && <p className={classes.label}>
          <Text type='h3'>
            Данные для входа в сервис
          </Text>
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
