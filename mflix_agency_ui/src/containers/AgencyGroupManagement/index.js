import Loadable from 'react-loadable';
import Loading from '../../components/Loading';

const AgencyGroupManagement = Loadable({
  loader: () => import('./connect'),
  loading: Loading,
});

export default AgencyGroupManagement;