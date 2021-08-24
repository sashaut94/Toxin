import axios from 'axios'

export const getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const fillRules = (obj) => {
  let start = getRandom(1, 24)
  let end = start - 1
  if (start < 10) start = '0' + start
  if (end < 10) end = '0' + end
  return [
    {
      id: 1,
      text: obj.petsAllowed ? 'Можно с питомцами' : 'Нельзя с питомцами',
    },
    {
      id: 2,
      text: obj.canInviteGuests ? 'Можно пригласить гостей' : 'Без вечеринок и мероприятий',
    },
    {
      id: 3,
      text: obj.canSmoke ? 'Можно курить' : 'Нельзя курить',
    },
    {
      id: 4,
      text: `Время прибытия — после ${start}:00 а выезд до ${end}:00`,
    }
  ]
}

const fillArray = (min, max, inputArr, isReviews = false) => {
  const outputArr = []
  const uniqueArr = []
  const amount = getRandom(min, max)

  for (let i = 0; i < amount; i++) {
    let random = getRandom(0, inputArr.length - 1)

    while (i !== 0 && uniqueArr.includes(random)) {
      random = getRandom(0, inputArr.length - 1)
    }

    const obj = {...inputArr[random]}

    if (isReviews) {
      obj.id = i + 1
      obj.likes = getRandom(1, 999)
      obj.isLiked = getRandom(1, 100) > 80
    }

    outputArr.push(obj)
    uniqueArr.push(random)
  }
  return outputArr
}

const fillImpressions = () => {
  const impressions = {
    fabulous: 0,
    good: 0,
    satisfactorily: 0,
    disappointed: 0
  }
  let keys = Object.keys(impressions)
  for (let i = 0; i < 4; i++) {
    impressions[keys[i]] = getRandom(0, 120)
  }
  return impressions
}

const reviews = [
  {
    user: 'Мурад Сарафанов',
    comment: ' Великолепный матрас на кровати в основной спальне! А пуфик вообще потрясающий. И стены, действительно,\n' +
      'шумоподавляющие. Выкрикивал комплименты повару — никто не жаловался из соседей.',
    avatar: 'image'
  },
  {
    user: 'Патрисия Стёклышкова',
    comment: 'Обслуживание на высоте! Всё аккуратно, чисто. Завтраки в номер советую заказать, каждый день новое блюдо и десерт как комплимент',
    avatar: 'image1'
  },
  {
    user: 'Абдуллаев Руфат',
    comment: 'Огромное спасибо! У Вас чудесный отель: чистота, красота, приветливость, расположение и вкуснющие завтраки. Спасибо! Продолжайте совершенствоваться.',
    avatar: 'image'
  },
  {
    user: 'Иванова Татьяна',
    comment: 'Большое спасибо за все! Все очень понравилось! Обязательно приедем к Вам еще!',
    avatar: 'image1'
  },
  {
    user: 'Оверин Александр',
    comment: 'Отлично, супер, безупречно..! Отличный улыбчивый, отзывчивый персонал. Чистые, уютные комнаты. Приезжать будем только сюда. Огромное спасибо!',
    avatar: 'image'
  }
]

const images = [
  {id: 1},
  {id: 2},
  {id: 3},
  {id: 4},
  {id: 5},
  {id: 6},
  {id: 7},
  {id: 8},
  {id: 9},
  {id: 10},
  {id: 11},
  {id: 12},
]

const information = [
  {
    id: 'comfort',
    title: 'Комфорт',
    description: 'Шумопоглощающие стены'
  },
  {
    id: 'convenience',
    title: 'Удобство',
    description: 'Окно в каждой из спален'
  },
  {
    id: 'cosiness',
    title: 'Уют',
    description: 'Номер оснащён камином'
  }
]

export const createRooms = (number) => {
  const rooms = []
  for (let i = 0; i < number; i++) {
    const room = {}
    room.id = `room${i + 1}`
    room.number = i + 1
    if (Math.random() >= 0.8) room.category = 'Люкс'
    room.price = Math.round(getRandom(9990, 2400) / 10) * 10
    room.rate = getRandom(0, 5)
    room.images = fillArray(4, 4, images)
    room.impressions = fillImpressions()
    room.information = fillArray(1, 3, information)
    room.reviews = fillArray(1, 5, reviews, true)
    room.maxGuests = getRandom(1, 10)
    room.hallWidth = getRandom(60, 120)
    room.helperForTheDisabled = getRandom(1, 100) > 80
    room.canSmoke = getRandom(1, 100) > 90
    room.petsAllowed = getRandom(1, 100) > 80
    room.canInviteGuests = getRandom(1, 100) > 70
    room.rules = fillRules(room)
    room.bedrooms = getRandom(1, 5)
    room.beds = getRandom(1, 10)
    room.bathrooms = getRandom(0, 2)
    rooms.push(room)
  }
  axios.post(`https://toxin-dc7e8-default-rtdb.europe-west1.firebasedatabase.app/.json`, rooms)
}
