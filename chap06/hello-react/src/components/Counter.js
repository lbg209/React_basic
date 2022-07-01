import { Component } from "react";

class Counter extends Component {
  // 클래스형 컴포넌트의 생성자 메서드  constructor를 작성할때는 반드시 super(props)를 호출해야한다.
  /*  constructor(props) {
    super(props);
    //state의 초기값 설정하기
    this.state = {
      number: 0,
      fixedNumber: 0,
    };
  }
*/

  state = {
    number: 0,
    fixedNumber: 0,
  };

  render() {
    const { number, fixedNumber } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값 : {fixedNumber}</h2>
        <button
          //onClick을 통해 버튼이 클릭되었을 때 호출할 함수를 지정합니다.
          onClick={() => {
            //this.setState를 사용하여 state에 새로운 값을 넣을 수 있습니다.
            this.setState(
              {
                number: number + 1,
              },
              () => {
                console.log("state가 호출됨.");
                console.log(this.state);
              }
            );
          }}
        >
          {" "}
          + 1
        </button>
      </div>
    );
  }
}

export default Counter;
