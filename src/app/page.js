import styles from "./page.module.css";
import UserForm from "./page2";

export default function Home() {
  return (
    <div>
      <UserForm usernameLabel="ユーザ名" passwordLabel="パスワード" / >
    </div>
  );
}
