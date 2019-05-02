import Loadable from 'react-loadable';
import Loading from '../../components/Loading';

const CreateCampaignPage = Loadable({
  loader: () => import('./connect'),
  loading: Loading,
});

export default CreateCampaignPage;