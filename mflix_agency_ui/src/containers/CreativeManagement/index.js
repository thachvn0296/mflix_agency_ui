import Loadable from 'react-loadable';
import Loading from '../../components/Loading';

const CreativeManagement = Loadable({
  loader: () => import('./connect'),
  loading: Loading,
});

export default CreativeManagement;