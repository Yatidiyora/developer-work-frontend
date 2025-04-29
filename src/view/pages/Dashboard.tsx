import { Route, Routes } from 'react-router-dom';
import { routes } from '../../Routes';

const Dashboard = () => {
  return (
    <div>
      <Routes>
        {routes.map((route) => (
          <Route path={route.path} element={route.element} key={`route_${route.element}`} />
        ))}
      </Routes>
    </div>
  );
};

export default Dashboard;
