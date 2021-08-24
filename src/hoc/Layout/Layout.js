import React from 'react'
import classes from './Layout.module.scss'
import {Header} from '../../components/Header/Header'
import {Footer} from '../../components/Footer/Footer'

export const Layout = props => {
  return (
    <>
      <Header/>
      <main className={classes.main}>
        {props.children}
      </main>
      <Footer/>
    </>
  )
}