-- 한 줄 주석
/* 여러줄 주석 */

-- database 관련 명령어

-- DB 목록 확인
show DATABASES;

DROP DATABASE sesac;
DROP DATABASE mysesac;

SHOW DATABASES;

-- CREATE : DATABASE 생성
CREATE DATABASE sesac DEFAULT CHARACTER set utf8 COLLATE utf8_general_ci;
/* 
dobong 이라는 데이터 베이스를 생성하는데,
문자열셋으로 utf8mb4를, 콜레이션으로 utf8mb4_unicode_cifmf tkdyd!
utf8mb4는 utf8보다 더 많은 문자 지원 (일부 이모지 저장 가능)
>> 이모지를 저장하는 DB라면 utf8mb4, 이모지를 저장하지 않아도 된다면 utf8
 */
CREATE DATABASE dobong CHARACTER set utf8mb4 COLLATE utf8mb4_unicode_ci;

-- 이 데이터베이스를 사용하겠다 (use 명령어, 데이터베이스 사용 선언)
USE sesac;

-- --------- table 관련 명령어
-- 1. 테이블 생성
/* 
create table products(
    속성1 값형식 제약조건,
    속성2 값형식 제약조건
)
*/

-- 제약조건
-- NOT NULL : NULL 허용 X
-- AUTO_INCREMENT : 자동 숫자 증가
-- PRIMARY KEY : 기본키(중복 허용 x, null값 허용 x)
-- DEFAULT : 기본값
-- UNIQUE : 중복 허용 x, null값 허용 o

CREATE TABLE products(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    model_model VARCHAR(15) NOT NULL,
    series VARCHAR(30) NOT NULL
);

-- 테이블 목록 확인
SHOW TABLES;

-- products 테이블에 어떤 컬럼이 있는지 확인
DESC products;

-- 테이블 삭제 (+ drop은 아예 삭제, TRUNCATE는 테이블 안의 데이터만 삭제)
DROP Table products;
TRUNCATE TABLE products;

-- 테이블 변경(수정) ALTER
-- 1. 컬럼 추가
ALTER Table products ADD new_column VARCHAR(20);
-- 2. 특정 컬럼 수정 (varchar를 int로 수정)
ALTER TABLE products MODIFY new_column INT;
-- 3. 특정 컬럼 삭제
ALTER TABLE products DROP new_column;

-- ---------------DML
-- Data manipulation language (데이터 조작어)
-- user TABLE(id: int not null AUTO_INCREMENT PRIMARY KEY,
-- nameL VARCHAR(10) not null,
-- age: int not null,
-- address: varchar(100)) 만들기

CREATE Table user(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(10) NOT NULL,
    age INT NOT NULL,
    address VARCHAR(100)
);

SHOW TABLES;
DESC user;

-- CREATE(데이터 추가) >> INSERT INTO
-- INSERT INTO 테이블이름 (컬럼1, 컬럼2, ...) VALUES(값1, 값2, ...);
insert into user (name, age, address) VALUES('김민정',20,'서울특별시 마포구');
insert into user (name, age, address) VALUES('이한이',30,'서울특별시 강남구');
insert into user (name, age, address) VALUES('이지은',22,'대구광역시 동구');
insert into user (name, age, address) VALUES('윤세희',25,'부산광역시 관악구');
insert into user (name, age, address) VALUES('박수진',19,'서울특별시 노원구');
insert into user (name, age, address) VALUES('박찬희',23,'서울특별시 강서구');
insert into user (name, age, address) VALUES('이지수',32,'부산광역시 동구');
insert into user (name, age, address) VALUES('최솔희',37,'강원도 강릉시');
insert into user (name, age, address) VALUES('한소희',26,'충청남도 공주시');
insert into user (name, age, address) VALUES('권희수',40,'강원도 속초시');
insert into user (name, age, address) VALUES('김민지',22,'서울특별시 중구');

-- 테이블 전체 조회
SELECT * FROM user;

-- 2. 데이터 수정
-- UPDATE 테이블이름 SET 데이터 어떻게 수정할건지 WHERE 어떤 데이터를 찾아올지;
UPDATE user SET name="김민지" WHERE id=11;

-- 3. 데이터 삭제
-- DELETE FROM 테이블이름 WHERE 삭제조건;
DELETE FROM user WHERE id=11; -- where 이후 조건에 따른 데이터 삭제
DELETE FROM user; -- 전체 데이터 삭제

TRUNCATE TABLE user; -- 전체 데이터 삭제

-- 4. 데이터 조회(READ) select ~from ~
-- * : 전체
select * from user; -- user 테이블에서 전체 컬럼 조회
select name from user; -- 이름 컬럼만 조회
select name, age from user; -- 이름과 나이 컬럼 조회

-- where 절로 조건 적용
select * from user where age >=25;
select * from user where id=3;
select name from user where id=3;
select id, age from user where name ='이지은';

-- order by : 데이터 정렬
-- desc: 내림차순
-- asc: 오름차순(default)
SELECT * from user ORDER BY age DESC;

SELECT * from user where id>6 order by age;

-- LIKE: 문자열 패턴 조회(where와 함께 쓰임)
-- '서울로 시작하는 주소 찾기'
select * from user where address LIKE '서울%';

-- 이름의 마지막 글자가 '희'인 사람
select * from user where name LIKE '__희';

-- 주소에 광역시가 들어가는 사람
select * from user where address LIKE '%광역%'

-- 이름에 희가 들어가는 사람, 이름 컬럼만 조회, age 기준 내림차순 정렬
select name from user where name like '%희%' order by age desc;

-- LIMIT: 데이터의 개수 제한
select * from user LIMIT 3;

SELECT * from user where address like '서울%' LIMIT 2;
--+ SELECT * from user where address like '서울%' order by desc LIMIT 2; 오더바이가 들어간다면 이 위치

-- BETWEEN A AND B: A와 B의 사이값 조회(A, B는 포함)
select * from user where age BETWEEN 25 AND 30;
-- IN(리스트): 리스트의 요소와 일치하면 참
select * from user where age IN(20,21,22,23);

-- IS NULL /IS NOT NULL
INSERT INTO user (name, age) VALUES('서현승',28);
select * from user where address is null;
select name, address from user where address is not null;

-- 논리 연산자: AND, OR, NOT
-- 주소가 null이 아니면서 age가 25보다 큰 전체 속성 검색
select * from user where address is not null and age > 25;
select * from user where address is not null or age > 25;

-- 이씨 이면서 나이가 22살인 사람 (이름 속성만 출력)
select name from user where name like '이%' and age=22;

-- DISTINCT(중복 튜플 제거)
select age from user;
select distinct age from user;

--+ select 말고 delete도 써보자
-- 이씨인 사람 지우기 -> 전체 데이터 조회
delete from user where name like '이%'; 



-- 실습1 : DDL
use dobong;
CREATE TABLE member(
    id VARCHAR(20) NOT NULL PRIMARY KEY,
    name VARCHAR(5) NOT NULL,
    age int,
    gender VARCHAR(2) NOT NULL,
    email VARCHAR(50),
    promotion VARCHAR(2) default 'x'
);
desc member;

-- 실습2 : DDL
-- id 컬럼 값 형식 변경  VARCHAR(20) > VARCHAR(10)
ALTER TABLE member MODIFY id VARCHAR(10);
-- age 컬럼 삭제
ALTER TABLE member DROP COLUMN age;
-- interest 컬럼 추가 (VARCHAR(100))
ALTER TABLE member add interest VARCHAR(100);

-- 실습3 : DDL
CREATE TABLE user(
    id VARCHAR(10) NOT NULL PRIMARY KEY,
    pw VARCHAR(20) NOT NULL,
    name VARCHAR(5) NOT NULL,
    gender ENUM('F', 'M', '') DEFAULT '',
    birthday DATE NOT NULL,
    age INT(3) NOT NULL DEFAULT 0
);
desc user;

-- 실습4 : DML insert into
INSERT INTO user VALUES ('hong1234', '8o4bkg', '홍길동', 'M', '1990-01-31', 33);
INSERT INTO user VALUES ('sexysung', '87awjkdf', '성춘향', 'F', '1992-03-31', 31);
INSERT INTO user VALUES ('power70', 'qxur8sda', '변사또', 'M', '1970-05-02', 53);
INSERT INTO user VALUES ('hanjo', 'jk48fn4', '한조', 'M', '1984-10-18', 39);
INSERT INTO user VALUES ('widowmaker', '38ewifh3', '위도우', 'F', '1976-06-27', 47);
INSERT INTO user VALUES ('dvadva', 'k3f3ah', '송하나', 'F', '2001-06-03', 22);
INSERT INTO user VALUES ('jungkrat', '4ifha7f', '정크랫', 'M', '1999-11-11', 24);

SELECT * FROM user;

-- 실습5 : DDL 데이터 조회, 수정, 삭제
SELECT * FROM user ORDER BY birthday ASC;
-- 모든 회원목록, birthday 컬럼을 기준으로 오름차순 정렬

SELECT * FROM user WHERE gender='M' ORDER BY name DESC;
-- gender='M'인 값 가져오는데 name 기준으로 내림차순 정렬

SELECT id, name FROM user WHERE birthday LIKE '199%';
-- 1990년대 태어난 회원의 id, name 컬럼을 가져와 목록으로 보여주세요

SELECT * FROM user WHERE birthday LIKE '%-06-%' ORDER BY birthday ASC;
-- 6월생 회원목록, birthday 기준으로 오름차순 정렬

SELECT * FROM user WHERE gender='M' AND birthday LIKE '197%';
-- gender값이 'M'이고 1970년대 태어난 회원 목록

SELECT * FROM user ORDER BY age DESC LIMIT 3;
-- 모든 회원 중 age 기준으로 내림차순 정렬, 그런데 처음 3개의 레코드만 가져오기

SELECT * FROM user WHERE age BETWEEN 25 AND 50;
-- select * from user where age>=25 AND age<=50;
-- 모든 회원 중 age가 25 이상 50 이하

UPDATE user SET pw='12345678' WHERE id='hong1234';
-- id가 hong1234인 pw를 12345678로 "변경"

DELETE FROM user WHERE id='jungkrat';
-- id 컬럼이 jungkrat인 레코드 "삭제"

SELECT * FROM user;

-- 순서 : select >> from >> where >> group by >> having >> order by >> limit