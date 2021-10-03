import Footer from "../components/footer";
import Banner from "../components/home/banner";
import EditorsPick from "../components/home/editorpick";
import Navbar from "../components/home/navbar";
import TopCategory from "../components/home/topcategory";
import Trending from "../components/home/trending";

const Home = () => {
  return <div className="">
    <Navbar/>
    <hr />
    <Banner/>
    <div className="flex mx-auto max-w-7xl ">
      <EditorsPick/>
      <Trending/>
    </div>
    <br />
    <br />
    <div className="flex mx-auto max-w-7xl ">
      <TopCategory categoryName='Top Category 1'/>
      <TopCategory categoryName="Top Category 2"/>
    </div>
    <Footer/>
  </div>
}

export default Home;
