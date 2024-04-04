import { LinearGradient } from "expo-linear-gradient";

export const GradientBackground = ({ children }) => {
    return <LinearGradient
    // Background Linear Gradient
    colors={["#368DFF","#4A55E1", "#4A55E1"]}
    style={{
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      height: "100%",
    }}
  ></LinearGradient>;
};

export default GradientBackground;