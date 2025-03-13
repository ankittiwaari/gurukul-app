import { useState } from "react";
import LoginForm from "./components/LoginForm";
import Dashboard from "./screens/Dashboard";
import { colors } from "./utils/AppStyles";
import { LinearGradient } from "expo-linear-gradient";
export default function App() {
  let [loginState, setLoginState] = useState(false);
  let screen = (
    <LoginForm loginState={loginState} setLoginState={setLoginState} />
  );
  if (loginState) {
    screen = <Dashboard />;
  }
  return (
    <LinearGradient
      colors={[colors.primary, colors.secondary]}
      style={{ flex: 1 }}
    >
      {screen}
    </LinearGradient>
  );
}
