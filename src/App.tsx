import "./styles.css";
import { UserCard } from "./components/UserCard";
import axios from "axios";

const user = {
  id: 1,
  name: "akiko",
  email: "112@4455.com",
  address: "ADDRESS"
};

export default function App() {
  const onClickFetchUser = () => {
    axios.get("https://jsonplaceholder.typicode.com/users");
  };
  return (
    <div className="App">
      <button onClick={onClickFetchUser}>データ取得</button>
      <UserCard user={user} />
    </div>
  );
}
