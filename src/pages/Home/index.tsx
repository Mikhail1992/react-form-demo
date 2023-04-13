import { RegisterForm } from "../../features";
import c from "./styles.module.css";

const Home = () => {
  return (
    <div className={c.container}>
      <RegisterForm />
    </div>
  );
};

export default Home;
