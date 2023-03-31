const { gql } = require("@apollo/client");

export const CREATE_NEW_BOARD = gql`
    mutation createBoard($writer: String, $title: String, $contents: String) { #변수 이름과 타입 적는 곳
        createBoard(
            writer: $writer,
            title: $title,
            contents: $contents
            #실제 전달되는 변수들
        ){
            _id
            number
            message
        }
    }
`;