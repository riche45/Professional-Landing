import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Articles from './pages/Articles';
import Surveys from './pages/Surveys';
import Connects from './pages/Connects';
import Search from './pages/Search';
import Podcast from './pages/Podcast';
import Resume from './pages/Resume';

function App() {
  return (
    <div className="relative">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="archives" element={<Articles />} />
          <Route path="busqueda" element={<Search />} />
          <Route path="podcast" element={<Podcast />} />
          <Route path="curriculum" element={<Resume />} />
          <Route path="connects" element={<Connects />} />
          <Route path="surveys" element={<Surveys />} />
          <Route path="*" element={<div className="p-12 text-center"><h1 className="text-2xl">Page Not Found</h1></div>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;