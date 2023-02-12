// 데이터베이스로 부터 받아온 회원들의 정보들이 있다고 가정

// 회원가입할때, 8개의 값을 입력한다.
// 데이터베이스에는 회원 한 명당 8개의 값이 저장되어야 한다.
// 회원 한 명의 8개 값을 담아줄 User 객체(생성자)를 정의.
function User(lastName, firstName, email, pw, birthYear, birthMonth, birthDate, gender){
    this.lastName = lastName; // 성
    this.firstName = firstName; // 이름
    this.email = email; // 아이디
    this.pw = pw; // 패스워드
    this.birthYear = birthYear; // 생년
    this.birthMonth = birthMonth; // 생월
    this.birthDate = birthDate; // 생일
    this.gender = gender; // 성별
    
}

// 이미 회원가입한 사람들의 정보(데이터베이스에서 가져오는 부분)
let userList = [
    new User('홍', '길동', 'test1@naver.com', '1234', '2020', '5', '4', '2'), 
    new User('박', '영희', 'test2@naver.com', 'abc1111', '2005', '5', '1', '1'), 
    new User('양', '홍민', 'alzipbeta@naver.com', '2549', '1986', '8', '24', '-1')
];

const request = {
    login: function(email, pw){
        // id: 로그인할때 입력한 id
        // pw: 로그인할때 입력한 pw

        // 회원가입할때 입력된 아이디, 비밀번호는 userList 배열 속의 User 객체들 속에 들어있다.

        for(u of userList){
            // 첫번째 반복때 u : 홍길동이 회원가입할때 입력했던 8개의 값이 모여있는 User 객체
            // 두번째 반복때 u : 박영희가 회원가입할때 입력했던 8개의 값이 모여있는 User 객체
            // 세번째 반복때 u : 양홍민이 회원가입할때 입력했던 8개의 값이 모여있는 User 객체
            if(email == u.email && pw === u.pw){
                return true;
            }
        }
        return false;
    },

    regist : function(u){ // 매개변수로 User 객체(8개 값이 들어있는)를 받아와서
        userList.push(u);
    }
};