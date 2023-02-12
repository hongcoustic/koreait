// 브라우저상의 모든 element(태그들...) 들이 모두 로딩 되고 난 후,
// 실행시키고자 하는 함수를 전달한다.
window.onload = function(){
    let cardTemplate = document.querySelector('#temp-card');
    // console.log(cardTamplate.innerHTML);

    // html 은 실질적으로 추가하고자 하는 요소.
    let html = cardTemplate.innerHTML;

    let li = document.createElement('li');
    li.innerHTML = html;

    // 추가할 ul 태그 찾아오기
    let ul = document.querySelector('.list')

    // ul.appendChild(li);
    // console.log(ul);

    // ul.appendChild(li.cloneNode(true));
    // ul.appendChild(li.cloneNode(true));
    // ul.appendChild(li.cloneNode(true));
    // ul.appendChild(li.cloneNode(true));

    const data = request.getPostList();

    data.forEach(els => {
        let newNode = li.cloneNode(true); // 나중에 ul 태그 자식으로 추가할 노드
        let temp = newNode.innerHTML;
        temp = temp.replace('{pIcon}', els.pIcon);
        temp = temp.replace('{pTitle}', els.pTitle);
        temp = temp.replace('{pContent}', els.pContent);
        temp = temp.replace('{pImage}', els.pImage);
        temp = temp.replace('{pCompany}', els.pCompany);
        temp = temp.replace('{pText}', els.pText);
        temp = temp.replace('{pDetail}', els.pDetail);
        newNode.innerHTML = temp;

        ul.appendChild(newNode);

    })

}

