import Loadable from 'react-loadable';
import Loading from '../../components/Loading';

const CreateNewIO = Loadable({
  loader: () => import('./connect'),
  loading: Loading,
});

export default CreateNewIO;