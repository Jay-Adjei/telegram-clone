import React, { PureComponent } from "react";
import { Image } from "react-native";

class SliderImage extends PureComponent {
  render() {
    const { source, style } = this.props;
    return (
      <Image
        source={source}
        style={[{ resizeMode: "contain", flex: 1 }, style]}
      />
    );
  }
}

export default SliderImage;
