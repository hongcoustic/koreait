function login() {
    const email = document.querySelector('#email');
    const pw = document.querySelector('#pass');

    // console.log(email.value);
    // console.log(pw.value);

    if (!email.value || !pw.value) { // email.value === '' || pw.value ===''
        alert('아이디와 패스워드를 반드시 입력해주세요.')
        let fail = document.querySelector('input.input-email');
        let fail2 = document.querySelector('input.input-pass');
        console.log(fail);
        fail.setAttribute('class', 'input-email fail');
        fail2.setAttribute('class', 'input-pass fail');
        return;
    }

    if (request.login(email.value, pw.value) == true) {
        // user_request.js 의 request 객체 login() 함수 사용 결과가 true, 로그인 성공.
        // main 페이지로 이동.
        window.open('./02_facebook_main.html', '_self')
        return;
    }
    // else if(request.login(email.value, pw.value) == '') {
    //     alert('아이디와 패스워드를 입력해주세요.')
    //     return;
    // }

    // 로그인 실패
    alert('아이디 또는 비밀번호가 틀렸습니다.');
    email.value = '';
    pw.value = '';
}