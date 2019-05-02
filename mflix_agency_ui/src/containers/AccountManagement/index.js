import Loadable from 'react-loadable';
import Loading from '../../components/Loading';

const AccountManagement = Loadable({
  loader: () => import('./connect'),
  loading: Loading,
});

export default AccountManagement;