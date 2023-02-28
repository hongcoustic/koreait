const MapPage = ()=>{
    let ar = ['양홍민', '김철수', '홍길동']
    let id = 0;
    let components = ar.map((value) => <li key={id++}>{value}</li>);
    console.log(components);

    return (
        <>
        <ul>
            {components}
        </ul>
        </>
    );
}

export default MapPage;