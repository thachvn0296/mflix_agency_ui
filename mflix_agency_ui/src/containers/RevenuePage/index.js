import Loadable from 'react-loadable';
import Loading from '../../components/Loading';

const RevenuePage = Loadable({
  loader: () => import('./connect'),
  loading: Loading,
});

export default RevenuePage;