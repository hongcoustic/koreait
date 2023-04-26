import axios from "axios";

// mysql tbl_posts로 부터 게시글 목록을 가져오는 함수
export const FETCH_BOARDS = async () => {
    return await axios.get('http://localhost:3001/boards');
}

// mysql tbl_posts로 부터 게시글 한 개를 가져와 주는 함수
export const FETCH_BOARD = async (postId) => {
    return await axios.get(`http://localhost:3001/boards/${postId}`);
}