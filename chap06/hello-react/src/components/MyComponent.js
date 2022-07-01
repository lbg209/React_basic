import PropTypes from "prop-types";
import { Component } from "react";

class MyComponent extends Component {
  static defaultProps = {
    name: "기본이름",
  };
  static propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired,
  };

  render() {
    const { name, favoriteNumber, children } = this.props; //비구조화 할당
    return (
      <div>
        안녕하세요, 제 이름은 {name}입니다만. <br />
        children 값은 {children}입니다.
        <br />
        좋아하는 숫자는 {favoriteNumber}라고요.
      </div>
    );
  }
}

// default props값
MyComponent.defaultProps = {
  name: "기본 이름",
};

// PropType 값
MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
};
export default MyComponent;
