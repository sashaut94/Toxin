import React from 'react'
import classes from './ReviewsList.module.scss'
import {ReviewsItem} from './ReviewsItem/ReviewsItem'
import {setEnding} from '../../formFramework/formFramework'
import {Text} from '../Text/Text'

export const ReviewsList = props => {
  return (
    <section className={classes.ReviewsList}>
      <h3 className={classes.title}>
        <Text type='h2'>
          Отзывы посетителей номера
        </Text>

        <span className={classes.amount}>
          {setEnding(props.reviews.length, ['отзыв', 'отзыва', 'отзывов'])}
        </span>
      </h3>

      <div>
        {
          props.reviews.map(review => (
            <ReviewsItem
              key={review.id}
              user={review.user}
              timesAgo={review.timesAgo}
              likes={review.likes}
              comment={review.comment}
              avatar={review.avatar}
              liked={review.isLiked}
            />
          ))
        }
      </div>
    </section>
  )
}