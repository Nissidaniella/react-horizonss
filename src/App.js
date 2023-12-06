import LandingPage from "./LandingPage";
import { Navbar } from "./Navbar"
import { Page2 } from "./Page2";
import { RedLine } from "./RedLine";
import { Page3 } from "./Page3";
import { Images } from "./Images";

function App(props) {
  return (
    <>
    <Navbar/>
    <LandingPage/>
    <Page2/>
    <RedLine/>
    <Page3/>
    <Images
    className="glyphicon glyphicon-headphones"
    text="Headphones" />
      <Images
    className="glyphicon glyphicon-camera"
    text="Camera" />
     <Images
    className="glyphicon glyphicon-facetime-video"
    text="Video" />
     <Images
    className="glyphicon glyphicon-globe"
    text="Globe" />
     <Images
    className="glyphicon glyphicon-heart-empty"
    text="Heart" />
     
     
    </>
  );
}

export default App;
