import "./styles.css";
import { UserCard } from "./components/UserCard";
import { useAllUsers } from "./hooks/useAllUsers";

export default function App() {
  //useAllUsersでstateをコンポーネント化し呼び出す
  const { getUsers, userProfiles, loading, error } = useAllUsers();

  const onClickFetcUser = () => getUsers();

  return (
    <div className="App">
      <button onClick={onClickFetcUser}>データの取得</button>
      <br />
      {error ? (
        <p>データの取得失敗しました</p>
      ) : loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {userProfiles.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </>
      )}
    </div>
  );
}
