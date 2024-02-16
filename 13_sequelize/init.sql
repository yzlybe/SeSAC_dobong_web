-- Active: 1707101281051@@127.0.0.1@3306@sesac
show tables;
CREATE TABLE visitor (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(10) NOT NULL,
    comment MEDIUMTEXT
);

DESC visitor;

INSERT INTO visitor(name, comment) VALUES('allie', 'hi~');
INSERT INTO visitor VALUES(null, '홍길동', '홍길동입니다.');

SELECT * FROM visitor;

##########[DCL]##########

-- 새로운 user 만들기 1
CREATE USER 'sesac'@'%' IDENTIFIED BY '4321';
-- 비밀번호 바꾸고 싶다면
ALTER USER 'sesac'@'%' IDENTIFIED WITH mysql_native_password BY '1234';

-- 새로운 user 만들기2 --+ 위 두 줄을 한 번에 실행하는 방법
-- CREATE USER 'sesac'@'%' IDENTIFIED WITH mysql_native_password BY '1234'; 

GRANT ALL PRIVILEGES ON *.* TO 'sesac'@'%' WITH GRANT OPTION;
-- 모든 DB에 접근 가능하도록, sesac 계정에 DB 접근 권한을 부여
FLUSH PRIVILEGES;
-- 현재 사용중인 sql 캐시를 지우고 새로운 설정 적용 --+ 캐시란? 정보를 매번 새로 불러오지 않도록 사전에 저장해두는 정보