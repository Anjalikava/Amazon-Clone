import AmazonClone from "./amazon";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { HomeScreen } from "./screen/home-screen/Home-Screen";




function App() {
  return (
     <div className="p-0 m-0 box-border">
      {/* <AmazonClone/> */}
       <Navbar />
       <HomeScreen/>
     </div>
  );
}

export default App;
