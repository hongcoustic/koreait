let postList = [
    {page:10},
    {page:1},
    {page:16},
    {page:17},
    {page:5},
    {page:78},
    {page:46}

];

console.log('정렬 전 postList : ', postList);

// 첫번째 반복 : 2번째 요소와 그 이전 요소들 크기 비교 1 10 -> -1
// 두번째, 세번째 반복 : 3번째 요소와 그 이전 요소들 (2번, 1번 요소) 크기 비교
// 16 1 -> 1, 16 10 -> 1
// 17 과 그 이전 요소들(16, 10) 검사
// 17 10 -> 1, 17 16 -> 1


postList.sort((a, b)=>{
    console.log('sort 안의 함수, a:', a, 'b: ', b);
    // a는 뒤 요소, b는 앞 요소 -> 뒤쪽요소.page 는 큰 값들이 들어있다. 요소.page 오름차순 정렬
    return a.page - b.page;
});
console.log('정렬 후 postList : ', postList);

let nameList = [
    'apple',
    'abcdeffff',
    'a',
    'banana'
];

nameList.sort((a, b)=>{return a.length - b.length});
console.log(nameList);

postList = [
    {createdAt:'2023-04-01'},
    {createdAt:'2023-03-01'},
    {createdAt:'2023-07-01'},
    {createdAt:'2023-04-15'}
];

postList.sort((a, b)=>{
    return new Date(a.createdAt) - new Date(b.createdAt)
});

console.log(postList);

console.log(new Date('2023-05-02') - new Date('2023-05-01'));
