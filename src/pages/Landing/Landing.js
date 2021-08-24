import React from 'react'
import classes from './Landing.module.scss'
import {Text} from '../../components/Text/Text'
import SearchForm from '../../components/SearchForm/SearchForm'
import {MainSlider} from '../../components/MainSlider/MainSlider'

export const Landing = () => (
  <section className={classes.Landing}>
    <MainSlider block='landing'/>

    <div className={classes.wrapper}>
      <SearchForm/>

      <p className={classes.text}>
        <Text>
          Лучшие номера для вашей работы,
          отдыха и просто вдохновения
        </Text>
      </p>
    </div>
  </section>
)