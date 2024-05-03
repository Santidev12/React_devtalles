/* eslint-disable no-unused-vars */
import { Calendar } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'

import { addHours } from 'date-fns'

import { Navbar, CalendarEvent } from '../'
import { localizer, getMessagesES } from '../../helpers'

const events = [{
  title: 'Cumpleaños del jefe',
  notes: 'Hay que comprar el pastel',
  start: new Date(),
  end: addHours( new Date(), 1 ),
  bgColor: '#fafafa',
  user: {
    _id: '123',
    name: 'Santi'
  }
}]

export const CalendarPage = () => {

  const eventStyleGetter = ( event, start, end, isSelected ) => {

    const style = {
      backgroundColor: '#347CF7',
      borderRadius: '5px',
      opacity: '0.8',
      color: 'white'
    }

    return {style};
  }

  const onDoubleClick = ( event ) => {
    console.log({ doubleClick: event });
  }

  const onSelect = ( event ) => {
    console.log({ click: event });
  }

  const onViewChange = ( event ) => {
    console.log({ viewChanged: event });
  }

  return (
    <>
      <Navbar />

        <Calendar
          culture='es'
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 'calc( 100vh - 80px )' }}
          messages={ getMessagesES() }
          eventPropGetter={ eventStyleGetter }
          components={{
            event: CalendarEvent
          }}
          onDoubleClickEvent={ onDoubleClick }
          onSelectEvent={ onSelect }
          onView={ onViewChange }
        />
  </>
  )
}