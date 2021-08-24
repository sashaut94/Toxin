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
  },
  {
    id: 2,
    text: 'Услуги',
    pathTo: '/services',
    dropdown: {},
  },
  {
    id: 3,
    text: 'Вакансии',
    pathTo: '/vacancies',
  },
  {
    id: 4,
    text: 'Новости',
    pathTo: '/news',
  },
  {
    id: 5,
    text: 'Соглашения',
    pathTo: 'agreements',
    dropdown: {},
  }
]

export const Header = () => (
  <header>
    <Container>
      <div className={classes.Header}>
        <Logo/>

        <nav className={classes.navigation}>
          <NavList
            links={links}
            block='header'
          />
        </nav>

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
      </div>
    </Container>
  </header>

)