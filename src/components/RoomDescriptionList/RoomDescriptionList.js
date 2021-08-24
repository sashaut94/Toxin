import React from 'react'
import classes from './RoomDescriptionList.module.scss'
import {ItemTitle} from "../ItemTitle/ItemTitle"
import {RoomDescriptionItem} from "./RoomDescriptionItem/RoomDescriptionItem"

export const RoomDescriptionList = props => {
  return (
    <div className={classes.RoomDescriptionList}>
      <h3 className={classes.title}>
        <ItemTitle>
          Сведения о номере
        </ItemTitle>
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