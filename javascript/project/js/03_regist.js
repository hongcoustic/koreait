function regist(){
    let lastName = document.querySelector('input[name="lastname"]'); // 성
    let firstName = document.querySelector('input[name="firstname"]'); // 이름
    let email = document.querySelector('input[name="reg_email"]'); // 휴대폰 or 이메일
    let pw = document.querySelector('input[name="reg_pass"]'); // 패스워드
    let birthYear = document.querySelector('input[name="birthday_year"]'); // 생년
    let birthMonth = document.querySelector('input[name="birthday_month"]'); // 월
    let birthDate = document.querySelector('input[name="birthday_day"]'); // 일
    let gender = document.querySelector('input[name="sex"]'); // 성별 (여,남,기타)


    // 8개의 입력 태그 들에 들어있는 값을 받아온다.
    // 받아온 값들을 저장하고 있는 User() 객체를 한 개 만들어서
    // 그 User 객체를 user_request.js 안에 있는 userList에 추가해야한다.

    let newUser = new User(lastName, firstName, email, pw, birthYear, birthMonth, birthDate, gender);
    request.regist(newUser);
    console.log(userList);
}