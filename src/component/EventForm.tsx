import React, {FC, useState} from 'react';
import {Button, DatePicker, Form, Input, Row, Select} from "antd";
import {rules} from "../utils/rules";
import {Iuser} from "../store/reducer/auth/Iuser";
import {IEvent} from "../store/reducer/event/IEvent";
import {Moment} from "moment";
import {formatDate} from "../utils/date";
import {useACtions, useTypedSelector} from "../useTypedSelector";

interface EventsFromProps {
    guests: Iuser[],
    submit: (events: IEvent)=> void
}


const EventForm: FC<EventsFromProps> = (props) => {
    const {user} = useTypedSelector(state => state.auth)
    const [events, SetEvents] = useState<IEvent>({
        author: '',
        date: '',
        description:'',
        guest: ''
    } as IEvent)
    const DescriptionHandle = (e: any) => {
        SetEvents({...events, description: e.target.value})
    }
    const GuestsHandle = (guest: string) => {
       SetEvents({...events, guest})
    }
    const DAteHandle = (date: Moment | null) => {
        if (date){
            SetEvents({...events, date: formatDate(date.toDate())})
        }

    }
    const submit = () => {
        props.submit({...events, author: user.username })
    }
    return (
        <Form  onFinish={submit}>
            <Form.Item
                label="description"
                name="description"
                rules={[rules.required('required!!!')]}>
                <Input
                    onChange={DescriptionHandle}
                    value={events.description}/>

            </Form.Item>
            <Form.Item  label="date picker"
                            name="date"
                            rules={[rules.required('required!!!'), rules.isDateAfter("don't pick a date was after today'")]}>
                <DatePicker onChange={(date)=>DAteHandle(date)} />
            </Form.Item>
            <Form.Item
                label="choose a guest"
                name="user"
                rules={[rules.required('required!!!')]}
            >
                <Select onChange={GuestsHandle}>
                {props.guests.map(guest=>
                    <Select.Option key={guest.username} value={guest.username}>
                        {guest.username}
                    </Select.Option>
                )  }
                </Select>
            </Form.Item>

            <Row justify={"end"}>
                <Form.Item>
                    <Button   type="primary" htmlType="submit">
                        Create
                    </Button>
                </Form.Item>
            </Row>

        </Form>
    );
};

export default EventForm;