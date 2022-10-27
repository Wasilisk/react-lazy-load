import axios from "axios";

import { PostType } from "../types";

export class PostsApi {
    static async fetchPosts(pageParam: number) {
        return axios.get<PostType[]>(`http://localhost:3001/posts?_page=${pageParam}&_limit=5`).then(response => {
            return {
                posts: response.data,
                totalCount: response.headers['x-total-count'] || ""
            }
        })
    }
}