import React from 'react'
import TextInput from '../TextInput/TextInput'
import classes from './SignForm.module.scss'
import {Toggle} from '../Toggle/Toggle'
import {Fieldset} from '../Fieldset/Fieldset'
import {connect} from 'react-redux'
import {FormWrapper} from '../FormWrapper/FormWrapper'
import LoginData from '../LoginData/LoginData'
import {SignButtons} from './SignButtons/SignButtons'
import {RadioInput} from '../RadioInput/RadioInput'
import {changeToggle, toggleRadio} from '../../store/actions/registrationActions'

const SignForm = props => {
  const isRegistration = props.path === '/registration'
  const fullName = Object.values(props.textInputs).filter(item => item.field === 'fullName')
  const dateOfBirth = Object.values(props.textInputs).filter(item => item.field === 'dateOfBirth')
  return (
    <div className={classes.SignForm}>
      <FormWrapper
        title={isRegistration ? 'Регистрация аккаунта' : 'Войти'}
      >
        {
          isRegistration && fullName.map(item => (
            <TextInput
              key={item.id}
              id={item.id}
              placeholder={item.placeholder}
              value={item.value}
            />
          ))
        }

        {
          isRegistration && <Fieldset
            flex={true}
            block='registration'
          >
            {
              props.radios.map(radio => (
                <RadioInput
                  key={radio.id}
                  id={radio.id}
                  label={radio.label}
                  checked={radio.checked}
                  name='gender'
                  onChange={() => {
                    props.toggleRadio(props.radios, radio.id)
                  }}
                />
              ))
            }
          </Fieldset>
        }

        {
          isRegistration && dateOfBirth.map(item => (
            <TextInput
              key={item.id}
              id={item.id}
              type='dateOfBirth'
              label='Дата рождения'
              value={item.value}
              placeholder={item.placeholder}
            />
          ))
        }

        <LoginData label={isRegistration}/>

        {
          isRegistration && <Toggle
            label={props.specialOffers.label}
            id={props.specialOffers.id}
            checked={props.specialOffers.checked}
            block='registration'
            onChange={() => props.changeToggle((props.specialOffers))}
          />
        }

        <SignButtons
          withArrow={isRegistration ? 'Зарегистрироваться' : 'Войти'}
          white={isRegistration ? 'Войти' : 'Создать'}
          text={isRegistration ? 'Уже есть аккаунт на Toxin' : 'Нет аккаунта на Toxin?'}
          to={isRegistration ? '/signin' : '/registration'}
        />
      </FormWrapper>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    state: state.registration,
    radios: state.registration.radios,
    specialOffers: state.registration.specialOffers,
    textInputs: state.registration.textInputs
  }
}

function mapDispatchToProps(dispatch) {
  return {
    changeToggle: (state) => dispatch(changeToggle(state)),
    toggleRadio: (state, id) => dispatch(toggleRadio(state, id))
    // setTextField: (newState) => dispatch(setTextField(newState))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignForm)