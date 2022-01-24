import React, {FC} from 'react';
import { Calendar } from 'antd';
import {IEvent} from "../store/reducer/event/IEvent";
import {Moment} from "moment";
import {formatDate} from "../utils/date";

interface EventProps {
    events: IEvent[]
}


const eventCalendar: FC<EventProps> = (props) => {
    function dateCellRender(value: Moment) {
        const formdata = formatDate(value.toDate());
        const currentdayEvents = props.events.filter(ev=> ev.date === formdata)
        return (
           <div>
               {currentdayEvents.map((ev,index)=>
                   <div key={index}>{ev.description}</div>
               )}
           </div>
        );
    }
    return (
        <Calendar dateCellRender={dateCellRender}/>

    );
};

export default eventCalendar;