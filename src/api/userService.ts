import axios, {AxiosResponse} from "axios";
import {Iuser} from "../store/reducer/auth/Iuser";

export default class userService{
    static async getUsers(): Promise<AxiosResponse<Iuser[]>> {
        return axios.get<Iuser[]>('./user.json')
    }
}