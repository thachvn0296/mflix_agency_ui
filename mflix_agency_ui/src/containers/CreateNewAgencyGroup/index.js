import Loadable from 'react-loadable';
import Loading from '../../components/Loading';

const CreateNewAgencyGroup = Loadable({
  loader: () => import('./connect'),
  loading: Loading,
});

export default CreateNewAgencyGroup;