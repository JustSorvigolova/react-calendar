import {Iuser} from "../auth/Iuser";
import {IEvent} from "./IEvent";

export interface EventState{
    guests: Iuser[],
    events: IEvent[],

}
export enum EventACtionEnum{
    SET_GUESTS = 'events/SET_GUESTS',
    SET_EVENTS = 'events/SET_EVENTS'
}
export interface SetGuestsAction {
    type: EventACtionEnum.SET_GUESTS,
    payload: Iuser[]
}
export interface SetEventsAction {
    type: EventACtionEnum.SET_EVENTS,
    payload: IEvent[]
}
export type EventAction = SetGuestsAction | SetEventsAction