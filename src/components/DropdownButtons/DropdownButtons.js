import React from 'react'
import classes from './DropdownButtons.module.scss'
import {Button} from "../Button/Button"

export const DropdownButtons = props => {
  return (
    <div className={classes.DropdownButtons}>
      {
        props.remove && <Button
          type='withoutBorder'
          onClick={props.onClear}
        >
          Очистить
        </Button>
      }

      <Button
        type='withoutBorder'
        onClick={props.onApply}
      >
        Применить
      </Button>
    </div>
  )
}