import { Link } from "react-router-dom";
import HeaderMenu from "../components/Header";
import PostList from "../components/practice/PostList";

export default function Practice() {
  return (
    <>
      <HeaderMenu />
      <br />
      <Link to={"/practice/matzip"}>맛집페이지</Link>
      {/*+ <Link to={"matzip"}>맛집페이지</Link> 이렇게도 쓸 수 있다. 슬래시를 쓰면 루트 페이지부터 써야함*/}
      <h4>연습문제</h4>
      <PostList />
    </>
  );
}
