import Header from "./components/Header";
import NavBar from "./components/NavBar";

function Home() {
  return (
  <div>
    <div className="absolute w-full z-10">
      <NavBar/>
    </div>
    <div className="relative z-0">
      <Header/>
    </div>
  </div>
  );
}
export default Home