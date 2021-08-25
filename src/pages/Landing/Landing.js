import React from 'react'
import classes from './Landing.module.scss'
import SearchForm from '../../components/SearchForm/SearchForm'
import {MainSlider} from '../../components/MainSlider/MainSlider'

export const Landing = () => (
  <section className={classes.Landing}>
    <MainSlider block='landing'/>

    <div className={classes.wrapper}>
      <SearchForm/>

      <p className={classes.text}>
        Лучшие номера для вашей работы,
        отдыха и просто вдохновения
      </p>
    </div>
  </section>
)