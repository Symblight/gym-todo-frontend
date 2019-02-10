import uuid from 'uuid'


const WEEK_LENGTH = 7
const UUID = 5

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

export const weekdays = [
  {
    defaultName: 'Sunday',
    abbreviation: 'S',
  },
  {
    defaultName: 'Monday',
    abbreviation: 'M',
  },
  {
    defaultName: 'Tuesday',
    abbreviation: 'T',
  },
  {
    defaultName: 'Wednesday',
    abbreviation: 'W',
  },
  {
    defaultName: 'Thursday',
    abbreviation: 'T',
  },
  {
    defaultName: 'Friday',
    abbreviation: 'F',
  },
  {
    defaultName: 'Saturday',
    abbreviation: 'S',
  },
]

export const getMonth = (index) => months[index]

export const daysInMonth = (month, year) => new Date(year, month, 0).getDate()

export const getAbbreviationWeek = () => weekdays.map((day) => day.abbreviation)

export const todayDayWeek = (month, year) => {
  const dayNumber = new Date().getDate()

  if (new Date(year, month, dayNumber).toDateString() === new Date().toDateString()) {
    return new Date().getDay()
  }

  return false
}

const getDaysMonth = (year, month) => ({
  lastDay: new Date(year, month + 1, 0),
  firstDay: new Date(year, month, 1),
})

export const getNumberOfWeek = (year, month) => {
  const firstOfMonth = new Date(year, month - 1, 1)
  const lastOfMonth = new Date(year, month, 0)
  const used = firstOfMonth.getDay() + lastOfMonth.getDate()

  return Math.ceil(used / WEEK_LENGTH)
}

export const getWeeksForMonth = (year, month) => {
  const currentMonthDays = getDaysMonth(year, month)
  const previewMonthDays = getDaysMonth(year, month - 1)

  const weeks = [[]]

  let currentWeek = weeks[0]

  if (currentMonthDays.firstDay.getDay() !== 0) {
    const sizeDays = previewMonthDays.lastDay.getDate()
    const preiviewDay = previewMonthDays.lastDay.getDay()
    const size = (sizeDays - preiviewDay)

    for (let index = size; index <= sizeDays; index++) {
      currentWeek.push({
        id: uuid(UUID),
        day: new Date(year, month - 1, index),
        isToday: false,
        currentMonth: false,
        articles: [],
      })
    }
  }

  const firstOfMonth = new Date(year, month, 1)
  let currentDate = firstOfMonth

  while (currentDate.getMonth() === month) {
    if (currentWeek.length === WEEK_LENGTH) {
      currentWeek = []
      weeks.push(currentWeek)
    }

    currentWeek.push({
      id: uuid(UUID),
      day: currentDate,
      isToday: new Date().toDateString() === currentDate.toDateString(),
      currentMonth: true,
      articles: [],
    })
    currentDate = new Date(year, month, currentDate.getDate() + 1)
  }

  while (currentWeek.length < WEEK_LENGTH) {
    currentWeek.push({
      id: uuid(UUID),
      day: currentDate,
      isToday: false,
      currentMonth: false,
      articles: [],
    })

    currentDate = new Date(year, month + 1, currentDate.getDate() + 1)
  }

  return weeks
}
