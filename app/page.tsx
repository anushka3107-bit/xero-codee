import Navbar from "./Components/Navbar";
import HomePage from "./Components/HomePage";
import ContentPage from "./Components/ContentPage";
import Feature from "./Components/Feature";
import InfraList from "./Components/Infra/InfraList";
import Functionalities from "./Components/Functionalities";
import Xcodeeway from "./Components/Xcodeeway/Xcodeeway";
import Stories from "./Components/Stories";
import SubscribePage from "./Components/SubscribePage";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <main>
      <div className="flex justify-start items-center flex-col h-[100vh] px-[20px] ">
        <Navbar />
        <HomePage />
        <ContentPage />
        <Feature />
        <InfraList />
        <Functionalities />
        <Xcodeeway />
        <Stories />
        <SubscribePage />
        <Footer />
      </div>
    </main>
  );
}
