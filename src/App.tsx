import Navbar from 'components/navbar/Navbar';
import Featured from 'components/featured/Featured';
import Travels from 'components/travels/Travels';
import Footer from 'components/footer/Footer';
import style from './App.style';

function App() {
  return (
    <div className={style.main}>
      <Navbar />
      <Featured />
      <Travels />
      <Footer />
    </div>
  );
}

export default App;
