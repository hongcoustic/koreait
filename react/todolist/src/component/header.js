const Header = ({subtitle, detail}) => {
    return(
        <>
            <h1>도전 리액트 박살내기!</h1>
            <h2>{subtitle}</h2>
            <p>{detail}</p>
        </>
    );
}

export default Header;