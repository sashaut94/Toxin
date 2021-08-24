import React from 'react'
import classes from './Bottom.module.scss'
import {Container} from "../../Container/Container";

const socials = [
  {
    id: 1,
    name: 'twitter',
    to: 'https://twitter.com/'
  },
  {
    id: 2,
    name: 'facebook',
    to: 'https://www.facebook.com/'
  },
  {
    id: 3,
    name: 'instagram',
    to: 'https://www.instagram.com/'
  }
]

export const Bottom = props => {
  return (
    <div className={`${classes.Bottom} ${classes[props.border]}`}>
      <Container>
        <div className={classes.inner}>
          <p className={classes.copyright}>
            Copyright © 2018 Toxin отель. Все права защищены.
          </p>

          <ul className={classes.list}>
            {
              socials.map(social => (
                  <li
                    className={classes.item}
                    key={social.id}
                  >
                    <a
                      className={`${classes[social.name]} ${classes.link}`}
                      href={social.to}
                      target='_blank'
                      rel="noreferrer"
                    >
                  <span className='visually-hidden'>
                    {social.name}
                  </span>
                    </a>
                  </li>
                )
              )
            }
          </ul>
        </div>
      </Container>
    </div>
  )
}