import img from "../bestseller.jpg";

export function PracticeProps1(props) {
  return (
    <div>
      <p>
        제가 좋아하는 음식은 <span style={{ color: "red" }}>{props.food}</span>
        입니다.
      </p>
    </div>
  );
}

PracticeProps1.defaultProps = { food: "좋아하는 음식" };

export function PracticeProps2(props) {
  const { title, author, price, type } = props;
  return (
    <div className="bookDiv">
      <div className="book">
        <h2>이번 주 베스트셀러</h2>
        <img src={img} alt="표지" className="cover" />
      </div>
      <h3>{title}</h3>
      <p>저자: {author}</p>
      <p>판매가: {price}</p>
      <p>구분: {type}</p>
    </div>
  );
}
