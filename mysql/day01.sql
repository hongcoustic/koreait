# 명령어를 입력하는 공간
#은 주석을 의미한다.

# 테이블 만들기
create table test01(
	a int,
    b double,
    c varchar(100),
    d datetime
);

# 데이터 삽입
insert into test01 (a, b, c, d)
values (199, 3.14, '김예진', '19850413');

# 데이터 조회
select a, c, d from test01;

# * (all) 을 사용하면 전체 컬럼 조회 가능
select * from test01;

# 행 골라내기
select * 
from test01 
where a > 50;

# 자바스크립트와 다른점은 같은 조건 혹은 서로 다른 조건
# javascript : a === 10 a !== 10
# sql : a = 10 a <> 10

select *
from test01
where a = 10;

select *
from test01
where a <> 10;

select *
from test01
where a >= 10 and c = '김예진';

# 데이터 행 수정
update test01 
set c='박예진' 
where a=199;

select * from test01;

# 데이터 삭제
delete from test01 
where a = 11 and c = '양홍민';

# 테이블 삭제
drop table test01;


