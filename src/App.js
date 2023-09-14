import './App.css';
import Aside from './components/aside';
import Footer from './components/footer';
import Header from './components/header';
import Section from './components/section';

function App() {
  return (
    <div className="App">
      <Header/>
      <main>
        <Aside/>
        <Section/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
