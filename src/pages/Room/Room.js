import React, {useEffect} from 'react'
import classes from './Room.module.scss'
import {RoomDescriptionList} from "../../components/RoomDescriptionList/RoomDescriptionList"
import {Container} from "../../components/Container/Container"
import {ReviewsList} from "../../components/ReviewsList/ReviewsList"
import {RulesList} from "../../components/RulesList/RulesList"
import {Diagram} from "../../components/Diagram/Diagram"
import room1 from '../../images/roomFull1.jpg'
import room2 from '../../images/roomFull2.jpg'
import room3 from '../../images/roomFull3.jpg'
import Booking from "../../components/Booking/Booking"
import {connect} from "react-redux"
import {Loader} from "../../components/Loader/Loader"
import {fetchCurrentRoom} from "../../store/actions/actionCreator"

const Room = props => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
    props.fetchCurrentRoom(props.match.params.id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    Object.keys(props.currentRoom).length !== 0
      ? <div className={classes.Room}>
        <div className={classes.images}>
          <p className={classes.big}>
            <img src={room1} alt="room1"/>
          </p>
          <div className={classes.smalls}>
            <p>
              <img src={room2} alt="room2"/>
            </p>
            <p>
              <img src={room3} alt="room3"/>
            </p>
          </div>
        </div>
        <Container>
          <div className={classes.wrapper}>
            <div className={classes.description}>
              <RoomDescriptionList
                descriptions={props.currentRoom.information}
              />
              <Diagram
                rating={Object.values(props.currentRoom.impressions)}
                total={Object.values(props.currentRoom.impressions).reduce((acc, current) => acc + current, 0)}
              />
              <ReviewsList
                reviews={props.currentRoom.reviews}
              />
              <RulesList
                title='Правила'
                rules={props.currentRoom.rules}
                withMarker={true}
              />
              <RulesList
                title='Отмена'
                rules={[{
                  id: 1,
                  text: 'Бесплатная отмена в течение 48 ч. После этого при отмене не позднее чем за 5 дн. до прибытия вы получите полный возврат за вычетом сбора за услуги.'
                }]}
              />
            </div>
            <Booking/>
          </div>
        </Container>
      </div>
      : <div className={classes.loader}>
        <Loader/>
      </div>
  )
}

function mapStateToProps(state) {
  return {
    currentRoom: state.search.currentRoom
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchCurrentRoom: (id) => dispatch(fetchCurrentRoom(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Room)