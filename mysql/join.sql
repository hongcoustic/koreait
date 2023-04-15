select * from tbl_users;
select * from tbl_posts;

select a.userName, b.pTitle
from tbl_users a inner join tbl_posts b
on a.uId = b.userId
where a.uName='양홍민';

select *
from tbl_users u left outer join tbl_posts p
on u.uId = p.userId;
