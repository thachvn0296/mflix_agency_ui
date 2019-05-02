import Loadable from 'react-loadable';
import Loading from '../../components/Loading';

const IOManagement = Loadable({
  loader: () => import('./connect'),
  loading: Loading,
});

export default IOManagement;