import Banners from "./components/Banners";
import Header from "./components/Header";
import Services from "./components/Services";
import TopSells from "./components/TopSells";

function Home() {
  return (
    <div>
      <Header/>
      <Services/>
      <TopSells/>
      <Banners/>
    </div>
  );
}
export default Home