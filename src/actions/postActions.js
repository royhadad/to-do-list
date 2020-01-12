import { FETCH_POSTS, NEW_POST } from './types.js';

export function fetchPosts() {
    return function (dispatch) {
        dispatch({
            type: FETCH_POSTS,
            payload: ["aba", "ima", "saba"]
        });
    }
}