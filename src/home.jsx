import HomePage from "../components/home-page-components/homePage";

const Home = () => {
  useEffect(() => {
    document.title = "Quick Studios";
  }, []);
  return <HomePage />;
};

export default Home;
