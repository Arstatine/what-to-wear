import { Routes, Route } from 'react-router-dom';
import { Home, NotFound, Wardrobe, Search } from '../views';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/search' element={<Search />} />
      <Route path='/wardrobe' element={<Wardrobe />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
