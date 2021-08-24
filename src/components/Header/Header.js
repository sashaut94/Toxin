import React from 'react'
import classes from './Header.module.scss'
import {Container} from '../Container/Container'
import {Logo} from '../Logo/Logo'
import {NavList} from '../NavList/NavList'
import {Button} from '../Button/Button'

const links = [
  {
    id: 1,
    text: 'О нас',
    pathTo: '/about',
    isNav: true
  },
  {
    id: 2,
    text: 'Услуги',
    pathTo: '/services',
    dropdown: {},
    isNav: true
  },
  {
    id: 3,
    text: 'Вакансии',
    pathTo: '/vacancies',
    isNav: true
  },
  {
    id: 4,
    text: 'Новости',
    pathTo: '/news',
    isNav: true
  },
  {
    id: 5,
    text: 'Соглашения',
    pathTo: 'agreements',
    dropdown: {},
    isNav: true
  }
]

export const Header = () => (
  <Container>
    <header className={classes.Header}>
      <Logo
        isText={true}
      />

      <NavList
        links={links}
        block='header'
      />

      <div className={classes.buttons}>
        <Button
          type='white'
          block='header'
          to='/signIn'
          isLink
        >
          Войти
        </Button>

        <Button
          type='purple'
          block='header'
          to='/registration'
          isLink
        >
          Зарегистрироваться
        </Button>
      </div>
    </header>
  </Container>
)