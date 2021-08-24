import React from 'react'
import classes from './ReviewsItem.module.scss'
import {Text} from '../../Text/Text'
import {LikeButton} from './LikeButton/LikeButton'

export const ReviewsItem = props => {
  return (
    <div className={classes.ReviewsItem}>
      <div className={classes.header}>
        <p
          className={classes.avatar}
          style={{backgroundImage: `url(/images/${props.avatar}.png)`}}
        >
        </p>

        <p className={classes.info}>
          <Text>
            {props.user}
            <span className={classes.timesAgo}>
              {props.timesAgo}
          </span>
          </Text>
        </p>
      </div>

      <div className={classes.bottom}>
        <LikeButton
          liked={props.liked}>
          {props.likes}
        </LikeButton>

        <p className={classes.comment}>
          <Text>
            {props.comment}
          </Text>
        </p>
      </div>
    </div>
  )
}
