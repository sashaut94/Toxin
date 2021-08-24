import React from 'react'
import classes from './Footer.module.scss'
import {Container} from '../Container/Container'
import {Logo} from '../Logo/Logo'
import {Text} from '../Text/Text'
import {FooterLinks} from './FooterLinks/FooterLinks'
import TextInput from '../TextInput/TextInput'
import {Bottom} from './Bottom/Bottom'

const blocks = [
  {
    id: 1,
    title: 'Навигация',
    links: [
      {
        id: 1,
        text: 'О нас',
        pathTo: '/about'
      },
      {
        id: 2,
        text: 'Новости',
        pathTo: '/news'
      },
      {
        id: 3,
        text: 'Служба поддержки',
        pathTo: '/support'
      },
      {
        id: 4,
        text: 'Услуги',
        pathTo: '/services'
      }
    ]
  },
  {
    id: 2,
    title: 'О нас',
    links: [
      {
        id: 1,
        text: 'О сервисе',
        pathTo: '/aboutService'
      },
      {
        id: 2,
        text: 'Наша команда',
        pathTo: '/ourTeam'
      },
      {
        id: 4,
        text: 'Вакансии',
        pathTo: '/vacancies'
      },
      {
        id: 5,
        text: 'Инвесторы',
        pathTo: '/investors'
      }
    ]
  },
  {
    id: 3,
    title: 'Служба поддержки',
    links: [
      {
        id: 1,
        text: 'Соглашения',
        pathTo: '/agreements'
      },
      {
        id: 2,
        text: 'Сообщества',
        pathTo: '/community'
      },
      {
        id: 3,
        text: 'Связь с нами',
        pathTo: '/contactUs'
      }
    ]
  }
]

export const Footer = () => (
  <footer className={classes.Footer}>
    <Container>
      <div className={classes.inner}>
        <div className={classes.logo}>
          <Logo isText={true}/>

          <p>
            <Text>
              Бронирование номеров в лучшем
              отеле 2019 года по версии
              ассоциации «Отельные взгляды»
            </Text>
          </p>
        </div>

        {
          blocks.map(block => <FooterLinks
            key={block.id}
            title={block.title}
            links={block.links}
          />)
        }

        <TextInput
          title='Подписка'
          block='footer'
          hasButton={true}
          description='Получайте специальные предложения и новости сервиса'
          placeholder='Email'
        />
      </div>
    </Container>

    <Bottom border='border'/>
  </footer>
)
