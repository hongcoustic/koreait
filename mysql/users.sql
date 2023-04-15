create table tbl_users(
	uId int auto_increment,
    uName varchar(50) not null,
    userName varchar(50) not null,
    uEmail varchar(100) not null,
    uPhone varchar(100) not null,
    uWebsite varchar(100) not null,
    uProvince varchar(100),
    uCity varchar(100),
    uDistrict varchar(100),
    uStreet varchar(100),
    uZipcode varchar(20),
    createdAt datetime,
    updatedAt datetime,
    constraint tbl_users_pk_uid primary key (uId)
);

select * from tbl_users;

insert into tbl_users
(uName, userName, uEmail, uPhone, uWebsite, uProvince, uCity, uDistrict, uStreet, uZipcode, createdAt, updatedAt)
values
('양홍민', '홍구루', 'hongcou@naver.com', '010-1234-4555','www.naver.com' ,'경기도', '성남시', '분당구', '대왕판교로 160', '13425', '20230412', '20230412');

insert into tbl_users
(uName, userName, uEmail, uPhone, uWebsite, uProvince, uCity, uDistrict, uStreet, uZipcode, createdAt, updatedAt)
values
('김예진', '꼬미', 'hongcou@naver.com', '010-1234-4555','www.naver.com' ,'경기도', '성남시', '분당구', '대왕판교로 160', '13425', '20230412', '20230412');

insert into tbl_users
(uName, userName, uEmail, uPhone, uWebsite, uProvince, uCity, uDistrict, uStreet, uZipcode, createdAt, updatedAt)
values
('김철수', '수철이', 'hongcou@naver.com', '010-1234-4555','www.naver.com' ,'경기도', '성남시', '분당구', '대왕판교로 160', '13425', '20230412', '20230412');

insert into tbl_users
(uName, userName, uEmail, uPhone, uWebsite, uProvince, uCity, uDistrict, uStreet, uZipcode, createdAt, updatedAt)
values
('박영희', '희영이', 'hongcou@naver.com', '010-1234-4555','www.naver.com' ,null, '서울특별시', '관악구', '신림길 12-1', '23425', '20230410', '20230412');


