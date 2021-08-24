import React from 'react'
import {Layout} from './hoc/Layout/Layout'
import {Landing} from './pages/Landing/Landing'
import {Sign} from './pages/Sign/Sign'
import {Route} from 'react-router-dom'
import SearchRoom from './pages/SearchRoom/SearchRoom'
import Room from './pages/Room/Room'
import './index.scss'
import {Plug} from "./components/Plug/Plug";

const routes = [
  {path: '/registration', Component: Sign},
  {path: '/signIn', Component: Sign},
  {path: '/rooms/:id', Component: Room},
  {path: '/rooms', Component: SearchRoom, exact: true},
  {path: '/', Component: Landing, exact: true},
]

const plugs = [
  {path: '/about', title: 'О нас'},
  {path: '/services', title: 'Услуги'},
  {path: '/vacancies', title: 'Вакансии'},
  {path: '/news', title: 'Новости'},
  {path: '/agreements', title: 'Соглашения'},
  {path: '/support', title: 'Служба поддержки'},
  {path: '/aboutService', title: 'О сервисе'},
  {path: '/ourTeam', title: 'Наша команда'},
  {path: '/investors', title: 'Инвесторы'},
  {path: '/community', title: 'Сообщество'},
  {path: '/contactUs', title: 'Связь с нами'},
]

function App() {
  return (
    <Layout>
      {
        routes.map(({path, Component, exact}) => (
          <Route
            key={path}
            path={path}
            component={Component}
            exact={exact || false}
          />
        ))
      }
      {
        plugs.map(plug => (
          <Route
            key={plug.path}
            path={plug.path}
            render={() => <Plug title={plug.title}/>}
          />
        ))
      }
    </Layout>
  )
}

export default App
