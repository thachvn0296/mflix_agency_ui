import Loadable from 'react-loadable';
import Loading from '../../components/Loading';

const Home = Loadable({
  loader: () => import('./connect'),
  loading: Loading,
});

export default Home;