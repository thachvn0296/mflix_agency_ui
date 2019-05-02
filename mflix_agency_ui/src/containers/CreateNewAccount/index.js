import Loadable from 'react-loadable';
import Loading from '../../components/Loading';

const CreateNewAccount = Loadable({
  loader: () => import('./connect'),
  loading: Loading,
});

export default CreateNewAccount;