import './App.css';
import Home from './component/Home';
import About from './component/About';
import Vans, { loader as vanLoader } from './pages/Vans';
import VanDetail, { loader as VanDetailoader } from './pages/VanDetail';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import Layout from './component/Layout';
import HostLayout from './host/HostLayout';
import Review from './host/Review';
import Host from './host/Host';
import Income from './host/Income';
import HostVans, { loader as hostVanLoader } from './host/HostVans';
import HostVanDetails, {
  loader as HostVanDetailsLoader,
} from './host/HostVanDetails';
import Details from './host/Details';
import Pricing from './host/Pricing';
import Photo from './host/Photo';
import NotFound from './component/NotFound';
import Error from './component/Error';
import Login, {
  action as loginAction,
  loader as loginLoader,
} from './component/Login';
import RequiredAuth from './utils/requiredAuth';

const routine = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route
        path="vans"
        element={<Vans />}
        loader={vanLoader}
        errorElement={<Error />}
      />
      <Route
        path="vans/:id"
        element={<VanDetail />}
        loader={VanDetailoader}
        errorElement={<Error />}
      />
      <Route
        path="login"
        element={<Login />}
        errorElement={<Error />}
        action={loginAction}
        loader={loginLoader}
      />

      <Route path="host" element={<HostLayout />} loader={() => RequiredAuth()}>
        <Route index={true} element={<Host />} loader={() => RequiredAuth()} />
        <Route path="income" element={<Income />} />
        <Route path="review" element={<Review />} />
        <Route
          path="vans"
          element={<HostVans />}
          loader={hostVanLoader}
          errorElement={<Error />}
        />

        <Route
          path="vans/:id"
          element={<HostVanDetails />}
          loader={HostVanDetailsLoader}
          errorElement={<Error />}
        >
          <Route path="details" element={<Details />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="photo" element={<Photo />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />}></Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={routine} />;
}

export default App;
