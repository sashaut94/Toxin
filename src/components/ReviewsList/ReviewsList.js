import React from 'react'
import classes from './ReviewsList.module.scss'
import {ItemTitle} from '../ItemTitle/ItemTitle'
import {ReviewsItem} from './ReviewsItem/ReviewsItem'
import {setEnding} from '../../formFramework/formFramework'

export const ReviewsList = props => {
  return (
    <section className={classes.ReviewsList}>
      <h3 className={classes.title}>
        <ItemTitle>
          Отзывы посетителей номера
        </ItemTitle>

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