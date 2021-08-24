import React from 'react'
import classes from './Diagram.module.scss'
import {Doughnut} from 'react-chartjs-2'
import {ItemTitle} from "../ItemTitle/ItemTitle"
import {Text} from "../Text/Text";

export const Diagram = props => {

  const data = canvas => {
    const ctx = canvas.getContext('2d');
    const gradientFabulous = ctx.createLinearGradient(0, 0, 0, 120);
    gradientFabulous.addColorStop(0, '#FFE39C');
    gradientFabulous.addColorStop(1, '#FFBA9C');
    const gradientGood = ctx.createLinearGradient(0, 0, 0, 120);
    gradientGood.addColorStop(0, '#6FCF97');
    gradientGood.addColorStop(1, '#66D2EA');
    const gradientSatisfactorily = ctx.createLinearGradient(0, 0, 0, 120);
    gradientSatisfactorily.addColorStop(0, '#BC9CFF');
    gradientSatisfactorily.addColorStop(1, '#8BA4F9');
    const gradientDisappointed = ctx.createLinearGradient(0, 0, 0, 120);
    gradientDisappointed.addColorStop(0, '#919191');
    gradientDisappointed.addColorStop(1, '#3D4975');

    return {
      datasets: [{
        backgroundColor: [
          gradientSatisfactorily,
          gradientGood,
          gradientFabulous,
          gradientDisappointed
        ],
        label: 'impressions',
        data: props.rating,
      }],
    };
  }

  return (
    <div className={classes.Diagram}>
      <h3 className={classes.title}>
        <ItemTitle>
          Впечатления от номера
        </ItemTitle>
      </h3>

      <div className={classes.diagram}>
        <div className={classes.wrapper}>
          <Doughnut
            options={{
              responsive: true,
              maintainAspectRatio: true,
              cutout: '90%',
              width: '135px',
              height: '135px',
              events: []
            }}
            data={data}/>

          <p className={classes.votes}>
          <span className={classes.amount}>
            {props.total}
          </span>
            <span className={classes.text}>
                голосов
        </span>
          </p>
        </div>

        <ul className={classes.list}>
          <li className={`${classes.item} ${classes.fabulous}`}>
            <Text>
              Великолепно
            </Text>
          </li>

          <li className={`${classes.item} ${classes.good}`}>
            <Text>
              Хорошо
            </Text>
          </li>

          <li className={`${classes.item} ${classes.satisfactorily}`}>
            <Text>
              Удовлетворительно
            </Text>
          </li>

          <li className={`${classes.item} ${classes.disappointed}`}>
            <Text>
              Разочарован
            </Text>
          </li>
        </ul>
      </div>
    </div>
  )
}

