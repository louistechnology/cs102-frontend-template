import "./styles.css";
import LoginPage from "./features/login";
import ProfilePage from "./features/profile";

export default function App() {
  return (
    <div className="App">
      <h1>CS102</h1>
      <LoginPage />
      <ProfilePage />
    </div>
  );
}
