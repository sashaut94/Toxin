import React from 'react'
import classes from './AdditionalList.module.scss'
import {connect} from 'react-redux'

const AdditionalList = props => {
  return (
    <ul className={classes.AdditionalList}>

    </ul>
  )
}

export default connect()(AdditionalList)