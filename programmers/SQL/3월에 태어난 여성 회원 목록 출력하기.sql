-- 코드를 입력하세요
SELECT MEMBER_ID,	MEMBER_NAME,	GENDER,	to_char(DATE_OF_BIRTH, 'yyyy-mm-dd') as DATE_OF_BIRTH
From MEMBER_PROFILE
where
to_char(DATE_OF_BIRTH,'mm') = '03'
and
gender = 'W'
and
TLNO is not null
order by MEMBER_ID