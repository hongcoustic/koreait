import styled from "@emotion/styled"

export const ListWrap = styled.div`
    width: 1000px;
    display: flex;
    flex-direction: column;

`;
export const Row = styled.div`
    display: flex;
    height: 80px;
    
`;

export const RowItem = styled.div`
    text-align: ${
        ({type})=>type !== 'title' && 'center'
    };

    padding: 10px;
    border: 1px solid black;
    &:hover{
        cursor: ${({type})=> type === 'title' && 'pointer'};
    }

    ${
        ({type})=> type === 'number' && {
            'flex-basis' : '100px'
        }
    }
    ${
        ({type})=> type === 'title' && {
            'flex-basis' : '400px'
        }
    }
    ${
        ({type})=> type === 'date' && {
            'flex-basis' : '200px'
        }
    }
    ${
        ({type})=> type === 'writer' && {
            'flex-basis' : '200px'
        }
    }
`;

// export const BoardNumber = styled.div`
//     text-align: center;
// `;

// export const BoardTitle = styled.div`

// `;

// export const BoardDate = styled.div`
//     text-align: center;

// `;

// export const BoardWriter = styled.div`
//     text-align: center;

// `;