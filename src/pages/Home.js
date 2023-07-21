import { useTitle } from "../hooks/useTitle";
import { CardList } from "../components/CardList";

export const Home = () => {
  useTitle("Home");
  return (
    <div>
      <CardList />
    </div>
  );
};
