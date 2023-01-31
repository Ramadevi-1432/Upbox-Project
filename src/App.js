import './App.css';
import Footer from './components/footer/Footer';
import HomeContainer from './components/homecontainer/HomeContainer';
import TopMenu from './components/top-menu/TopMenu';

function App() {
  return (
    <div className="App">
     <TopMenu/>
     <HomeContainer/>
     <Footer/>
       
    </div>
  );
}

export default App;
