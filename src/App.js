import Main from "./Main";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Movies from "./Movies";
import { comedyMovies, latestMovies, popularMovies } from "./Url";
import Detailpage from './Detailpage';
import { createContext, useState } from "react";
import Banner from "./Banner";
const Samplecontext = createContext();

function App() {
  const [head, sethead] = useState([]);
  const [image, setimage] = useState([]);
  const [details, setdetails] = useState([]);
  const [vote, setvote] = useState([]);
  const [rate, setrate] = useState([]);
  const [date, setdate] = useState([]);
  const [nav, setnav] = useState(true);
  return (
    <div >
      <Samplecontext.Provider value={{
        image, setimage,
        head, sethead,
        details, setdetails,
        vote, setvote,
        rate, setrate,
        date, setdate,
        nav, setnav,
      }}>
        <BrowserRouter>
          <Main />
          <Routes>
            <Route path="/" element={<Banner />} />
            <Route path="/detail" element={<Detailpage />} />
            <Route path="/Popular" element={<Movies nam={popularMovies} />} />
            <Route path="/Latest" element={<Movies nam={latestMovies} />} />
            <Route path="/Comedy" element={<Movies nam={comedyMovies} />} />
          </Routes>
        </BrowserRouter>
      </Samplecontext.Provider>
    </div>
  );
}
export default App;
export { Samplecontext };
