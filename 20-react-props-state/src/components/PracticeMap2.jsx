import { useState } from "react";

export default function PracticeMap2() {
  const [postList, setPostList] = useState([]);
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");

  const [keyword, setKeyword] = useState("");
  const [searchType, setSearchType] = useState("");

  const [searchResult, setSearchResult] = useState([]);

  const uploadPost = () => {
    const newPost = postList.concat({
      id: postList.length === 0 ? 1 : postList[postList.length - 1].id + 1,
      writer,
      title,
    });
    setPostList(newPost);
    setWriter("");
    setTitle("");
  };

  const selectType = (e) => {
    setSearchType(e.target.value);
  };

  const searchPost = () => {
    let result = postList.filter((post) => {
      if (!post[searchType].include(keyword)) {
        return null;
      }
      return post;
    });
    setSearchResult(result);
    setKeyword("");
  };

  return (
    <div>
      <fieldset>
        <label>
          작성자 :
          <input
            type="text"
            placeholder="작성자"
            value={writer}
            onChange={(e) => {
              setWriter(e.target.value);
            }}
          />
        </label>
        <label>
          제목 :
          <input
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </label>
        <button onClick={uploadPost}>작성</button>
      </fieldset>
      <div>
        <select onChange={selectType}>
          <option value="작성자">작성자</option>
          <option value="제목">제목</option>
        </select>
        <input
          type="text"
          placeholder="검색어"
          value={keyword}
          onChange={(e) => {
            setKeyword(e.target.value);
          }}
        />
        <button onClick={searchPost}>검색</button>
      </div>
      <table style={{ border: "1px solid black" }}>
        <tr>
          <th>번호</th>
          <th>제목</th>
          <th>작성자</th>
        </tr>
        {postList.map((post) => (
          <tr key={post.id}>
            <td>{post.id}</td>
            <td>{post.writer}</td>
            <td>{post.title}</td>
          </tr>
        ))}
      </table>

      {searchResult.length === 0 ? (
        <h4>검색 결과가 없습니다.</h4>
      ) : (
        <table style={{ border: "1px solid black" }}>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
          </tr>
          {searchResult.map((post, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{post.title}</td>
                <td>{post.writer}</td>
              </tr>
            );
          })}
        </table>
      )}
    </div>
  );
}
