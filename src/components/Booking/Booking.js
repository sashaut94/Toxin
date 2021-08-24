import React from 'react'
import classes from './Booking.module.scss'
import {FormWrapper} from '../FormWrapper/FormWrapper'
import {RoomInfo} from '../RoomInfo/RoomInfo'
import {Button} from '../Button/Button'
import {Text} from '../Text/Text'
import {connect} from 'react-redux'
import {setEnding} from '../../formFramework/formFramework'
import {ChooseDates} from '../ChooseDates/ChooseDates'
import {getRandom} from '../../createRooms/createRooms'

const Booking = props => {
  const days = new Date(props.endDate - props.startDate) / 1000 / 60 / 60 / 24

  const additional = props.additionalServices
    .filter(item => item.checked)
    .reduce((acc, current) => acc += current.price, 0)

  const paymentForRoom = props.currentRoom.price * days

  return (
    <div className={classes.Booking}>
      <FormWrapper>
        <RoomInfo
          number={props.currentRoom.number}
          category={props.currentRoom.category ? props.currentRoom.category : null}
          price={props.currentRoom.price}
          isBooking={true}
        />

        <ChooseDates
          withGuests={true}
        />

        <ul className={classes.list}>
          {
            days > 0 && <li className={classes.item}>
              <Text
                block='booking'
              >
                {props.currentRoom.price}₽ х {setEnding(days, ['сутки', 'суток', 'суток'])}
              </Text>
              <Text>
                {paymentForRoom}₽
              </Text>
            </li>
          }

          <li className={classes.item}>
            <Text
              block='booking'
              type='withClue'
            >
              Сбор за услуги: скидка {getRandom(2179, 6735)}₽
            </Text>
            <Text>
              0₽
            </Text>
          </li>

          <li className={classes.item}>
            <Text
              block='booking'
              type='withClue'
            >
              Сбор за дополнительные услуги
            </Text>
            <Text>
              {additional}₽
            </Text>
          </li>

          <li className={classes.item}>
            <Text type='h2'>
              Итого
            </Text>
            <span className={classes.dotted}/>
            <Text type='h2'>
              {paymentForRoom + additional}₽
            </Text>
          </li>

        </ul>
        <Button
          type='withArrow'
          block='booking'
          isLink={true}
          to='/paymentPage'
        >
          забронировать
        </Button>
      </FormWrapper>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    startDate: state.search.startDate,
    endDate: state.search.endDate,
    currentRoom: state.search.currentRoom,
    additionalServices: state.search.additionalServices
  }
}

export default connect(mapStateToProps)(Booking)