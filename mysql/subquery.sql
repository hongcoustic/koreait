select * from tbl_posts;

#양홍민의 id 찾아내기
select uId from tbl_users where uName='양홍민';

#작성자 id가 1 인 게시글 가져오기
select * from tbl_posts where userId=1;

# 하나의 문장으로 만들어보기
select *
from tbl_posts
where userId = (select uId from tbl_users where uName='양홍민');