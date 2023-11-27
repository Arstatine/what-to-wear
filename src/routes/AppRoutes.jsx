import { Routes, Route } from 'react-router-dom';
import { Home, NotFound, Search } from '../views';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/:search' element={<Search />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
