create table tbl_posts(
	pId int auto_increment,
    pTitle varchar(300) not null,
    pContent varchar(500) not null,
    createdAt datetime default now(),
    updatedAt datetime default now(),
    userId int,
    constraint tbl_posts_pk_pId primary key (pId),
    constraint tbl_posts_fk_userId foreign key (userId) references tbl_users (uId)
);

select * from tbl_posts;

insert into tbl_posts(pTitle,pContent,userId)
value('첫번째 게시글!', '오늘 처음으로 게시글을 작성했어요!', 2);

insert into tbl_posts(pTitle,pContent,userId)
value('두번째 게시글!', '안녕하세요!', 3);

insert into tbl_posts(pTitle,pContent,userId)
value('게시글 작성했어요', '반갑습니다 잘부탁드려요', 1);

#5번 게시글 수정
update tbl_posts
set pTitle = '제목을 수정하기', userId=4, pContent = '내용 수정했습니다'
where pId=6;

SELECT *
FROM tbl_posts
ORDER BY userid DESC;

#ODER BY 컬럼1 [ASC or DESC], 컬럼2 [ASC or DESC]
#컬럼 1 기준으로 같은 순서의 행들은 컬럼 2 기준으로 정렬하여 조회
SELECT *
FROM tbl_posts
ORDER BY pTitle, createdAt DESC;

# sql 연산자 LIKE 연산자
# 행을 골라내는 조건 자리에 사용할 수 있는 연산자들
# < > <= >= = <>
# and or not
# IN ANY ALL
# BETWEEN a AND b => a 이상 b 이하
SELECT *
FROM tbl_posts
where pId BETWEEN 4 and 11;

# LIKE 연산자 (문자열)
# % : 물결이라 해석
# _ : 한 글자 해석
select *
from tbl_posts
where pTitle LIKE '%김춘_';

# 함수 sql 함수
select now(); # now 는 시스템상의 오늘 날짜

# 집계 함수 
# count(컬럼) : 해당 컬럼 속 데이터의 갯수가 결과, NULL은 해석 X
select count(userName), count(uProvince)
from tbl_users;

# sun() avg()
select sum(uId), avg(uId)
from tbl_users;

# select 사용 시 중복은 제외하고 종류만 조회하고 싶다.
# 컬럼 이름 앞에 distinct 를 사용
select distinct uName
from tbl_users;

select *
from tbl_users;

# 날짜 타입의 연산
select uName, createdAt, createdAt + 10000000
from tbl_users;

select uName, createdAt, adddate(createdAt, 20)
from tbl_users;

# %Y
# %y
# %M
# %m
# %d
select uName, createdAt, 
date_format(createdAt, '%Y'),
date_format(createdAt, '%y'),
date_format(createdAt, '%M'),
date_format(createdAt, '%m'),
date_format(createdAt, '%d'),
date_format(createdAt, '%y년도 %m%d')
from tbl_users