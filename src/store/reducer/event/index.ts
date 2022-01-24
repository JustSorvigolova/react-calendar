import {EventAction, EventACtionEnum, EventState} from "./types";


const init: EventState={
   events: [],
    guests: []
}

export default function Eventreducer(state=init, action: EventAction): EventState{
    switch (action.type) {
        case EventACtionEnum.SET_GUESTS:
            return {...state, guests: action.payload}
        case EventACtionEnum.SET_EVENTS:
            return {...state, events: action.payload}
        default:
            return state
    }
}