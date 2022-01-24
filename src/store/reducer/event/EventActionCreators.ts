import {Iuser} from "../auth/Iuser";
import {EventACtionEnum, SetEventsAction, SetGuestsAction} from "./types";
import {IEvent} from "./IEvent";
import {AppDispatch} from "../../index";
import userService from "../../../api/userService";

export const EventActionsCreatorss = {
    setGuests: (payload: Iuser[]): SetGuestsAction => ({type: EventACtionEnum.SET_GUESTS, payload}),
    setEvents: (payload: IEvent[]): SetEventsAction => ({type: EventACtionEnum.SET_EVENTS, payload}),

    fetchGuests : ()=> async (dispatch: AppDispatch)=>{
        try {
        const response = await userService.getUsers()
            dispatch(EventActionsCreatorss.setGuests(response.data))
        }catch (e){
        console.log(e)
        }
    },
    createEvent: (event: IEvent) =>  async (dispatch: AppDispatch) => {
        try {
            const events = localStorage.getItem("events") || '[]'
            const json = JSON.parse(events) as IEvent[];
            json.push(event);
            dispatch(EventActionsCreatorss.setEvents(json));
            localStorage.setItem('events', JSON.stringify(json));
        } catch (e) {
            console.log(e)
        }
    },
    fetchEvents: (username: string) => async (dispatch: AppDispatch) => {
        try {
            const events = localStorage.getItem("events") || '[]'
            const json = JSON.parse(events) as IEvent[];
            const currentUserEvents = json.filter(ev => ev.author === username || ev.guest === username);
            dispatch(EventActionsCreatorss.setEvents(currentUserEvents));
        } catch (e) {
            console.log(e)
        }
    }
}