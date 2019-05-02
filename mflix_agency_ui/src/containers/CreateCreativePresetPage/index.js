import Loadable from 'react-loadable';
import Loading from '../../components/Loading';

const CreateCreativePresetPage = Loadable({
  loader: () => import('./connect'),
  loading: Loading,
});

export default CreateCreativePresetPage;