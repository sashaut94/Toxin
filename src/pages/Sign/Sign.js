import React from 'react'
import classes from './Sign.module.scss'
import {MainSlider} from '../../components/MainSlider/MainSlider'
import SignForm from '../../components/SignForm/SignForm'

export const Sign = props => {
  return (
    <section className={classes.Sign}>
      <SignForm path={props.match.path}/>
      <MainSlider block='sign'/>
    </section>
  )
}