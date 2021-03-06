import Loadable from 'react-loadable';
import Loading from '../../components/Loading';

const CreateNewPrice = Loadable({
  loader: () => import('./connect'),
  loading: Loading,
});

export default CreateNewPrice;