import React from 'react'
import classes from './RoomDescriptionList.module.scss'
import {RoomDescriptionItem} from "./RoomDescriptionItem/RoomDescriptionItem"
import {Text} from '../Text/Text'

export const RoomDescriptionList = props => {
  return (
    <div className={classes.RoomDescriptionList}>
      <h3 className={classes.title}>
        <Text type='h2'>
          Сведения о номере
        </Text>
      </h3>

      <ul className={classes.list}>
        {
          props.descriptions.map(description => (
            <RoomDescriptionItem
              key={description.id}
              id={description.id}
              title={description.title}
              description={description.description}
            />
          ))
        }
      </ul>
    </div>
  )
}