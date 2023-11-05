import HomePage1 from "./Components/HomePage1";
import InfrastructureMain from "./Components/Infrastructure/InfrastructureMain";
import MainFunctions from "./Components/MainFunctions";
import HomePage from "./Components/HomePage";
import Navbar from "./Components/Navbar";
import Subscribe from "./Components/Subscribe";
import SuccessStories from "./Components/SuccessStories";
import Xcodeway from "./Components/Xcodeway/Xcodeway";
import ExtraFeature from "./Components/ExtraFeature";
import Footer from "./Components/Footer";


export default function Home() {
  return (
    <main>
      <div className="flex justify-start items-center flex-col h-[100vh] px-[20px] ">
        <Navbar />
        <HomePage />
        <HomePage1/>
        <ExtraFeature/>
        <InfrastructureMain/> 
         <MainFunctions/>
        <Xcodeway />
        <SuccessStories/>
        <Subscribe/>
        <Footer/>
      </div>
    </main>
  );
}
