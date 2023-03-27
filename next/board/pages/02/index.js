import { useRef, useState } from "react";

const ApiPage = () => {
    const id = useRef(null);
    const [user, setUser] = useState(null);
    const onButtonClick = () => {
        console.log(id.current.value);
        fetch(`https://koreanjson.com/users/${id.current.value}`)
        .then(resp => resp.json())
        .then(newUser => setUser(newUser));
    }
    const renderUser = () => {
        if(user === null) return(<p>검색할 사용자 id를 입력!</p>);
        return(
            <>
                <h2>{user.name}</h2>
                <h3>{user.email}</h3>
                <h4>{user.phone}</h4>
            </>
        );
    }

    return (
        <>
           <h1>API 페이지</h1>
           <input ref={id} placeholder="아이디 입력" />
           <button onClick={onButtonClick}>확인</button>
           {renderUser()}
        </>
    
    );
}

export default ApiPage;