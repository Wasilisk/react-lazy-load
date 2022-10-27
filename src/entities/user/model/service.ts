import axios from "axios"

import { UserType } from "../types"

export class UserApi {
    static async getUserById(userId: number) {
        return axios.get<UserType[]>(`http://localhost:3001/users?id=${userId}`).then(response => response.data)
    }
}