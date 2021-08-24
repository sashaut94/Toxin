import React from 'react'
import classes from './RoomPreview.module.scss'
import {SimpleSlider} from '../Slider/Slider'
import {RoomInfo} from '../RoomInfo/RoomInfo'
import {RateButton} from '../RateButton/RateButton'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

function SampleNextArrow(props) {
  return (
    <div
      className={props.class}
      onClick={props.onClick}
    />
  )
}

function SamplePrevArrow(props) {
  return (
    <div
      className={props.class}
      onClick={props.onClick}
    />
  )
}

const RoomPreview = props => {
  return (
    <Link
      to={`/rooms/${props.id}`}
      className={classes.RoomPreview}
    >
      <div className={classes.slider}>
        <SimpleSlider
          settings={{
            speed: 1000,
            dots: true,
            appendDots: dots => (
              <div> {dots} </div>
            ),
            customPaging: i => (
              <span
                className={classes.dot}
              />
            ),
            dotsClass: `slick-dots ${classes.dots}`,
            nextArrow: <SampleNextArrow class={classes.next}/>,
            prevArrow: <SamplePrevArrow class={classes.prev}/>,
          }}
        >
          {
            props.slides.map(slide => (
              <img
                key={slide.id}
                className={classes.image}
                width='270px'
                height='151.38px'
                src={`/images/room${slide.id}.jpg`}
                alt={`room${props.id}`}/>
            ))
          }
        </SimpleSlider>
      </div>

      <div className={classes.wrapper}>
        <RoomInfo
          number={props.number}
          category={props.category}
          price={props.price}
        />
        <div className={classes.rate}>
          <RateButton rate={props.rate}/>
          <p className={classes.reviews}>
            {props.reviewsAmount}&nbsp;
            <span className={classes.review}>
            Отзывов
            </span>
          </p>
        </div>
      </div>
    </Link>
  )
}

function mapStateToProps(state) {
  return {
    rooms: state.search.rooms,
    currentRooms: state.search.currentRooms
  }
}

export default connect(mapStateToProps)(RoomPreview)