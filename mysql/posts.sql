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
