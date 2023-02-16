import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import Team from './Pages/Team/Team';
import Mission from './Pages/Mission/Mission';
import Places from './Pages/Places/Places';
import style from './App.css';
import Header from './Components/Header/Header';
// import Footer from './Components/Footer/Footer'

function App() {
  return (
    <div className={style.container}>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Team" element={<Team />} />
        <Route path="/Mission" element={<Mission />} />
        <Route path="/Places" element={<Places />} />
      </Routes>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
