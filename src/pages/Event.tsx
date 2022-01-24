import React, {FC, useEffect, useState} from 'react';
import {Button, Layout, Modal, Row} from "antd";
import EventCalendar from "../component/EventCalendar";
import EventForm from "../component/EventForm";
import {useACtions, useTypedSelector} from "../useTypedSelector";
import {IEvent} from "../store/reducer/event/IEvent";

const Event: FC = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const {fetchGuests, createEvent,fetchEvents} = useACtions()
    const {guests, events} = useTypedSelector(state => state.event)
    const {user} = useTypedSelector(state => state.auth)
    useEffect(()=>{
        fetchGuests()
        fetchEvents(user.username)
    },[])
    const showModal = () => {setIsModalVisible(true)};
    const handleOk = () => {
        setIsModalVisible(false);
    };
    // {JSON.stringify(events)}

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    const addEvents = (events: IEvent) => {
        setIsModalVisible(false)
        createEvent(events)
    }
    return (
        <Layout>

        <EventCalendar events={events}/>
            <Row justify={"center"}>
                <Button onClick={showModal}>
                    Add Event
                </Button>
            </Row>
            <Modal title="Add Events" visible={isModalVisible} onOk={handleOk} footer={null} onCancel={handleCancel}>
                <EventForm submit={events => addEvents(events) }  guests={guests} />
            </Modal>
        </Layout>
    );
};

export default Event;