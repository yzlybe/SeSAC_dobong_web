import { Component } from "react";

class ClassProps extends Component {
  render() {
    console.log(this.props);
    const divStyle = {
      color: this.props.color,
    };
    return (
      <div style={divStyle}>
        <h4>hi, my name is {this.props.name}</h4>
        <ul>
          <li>별명: {this.props.nickname}</li>
          <li>좋아하는 색: {this.props.color}</li>
        </ul>
      </div>
    );
  }
}

// 구조분해 할당
class ClassProps2 extends Component {
  render() {
    const { name, color, nickname, bgColor } = this.props;
    const divStyle = {
      color: color,
      backgroundColor: bgColor, //+ 값이 넘어오지 않아도 오류는 나지 않음
    };
    return (
      <div style={divStyle}>
        <h4>hi, my name is {name}</h4>
        <ul>
          <li>별명: {nickname}</li>
          <li>좋아하는 색: {color}</li>
        </ul>
      </div>
    );
  }
}

//+ 값이 넘어오지 않았을 때의 디폴트값 설정은 밖에서 해야함
ClassProps2.defaultProps = {
  bgColor: "skyblue",
};

export { ClassProps, ClassProps2 };
