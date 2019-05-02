import Loadable from 'react-loadable';
import Loading from '../../components/Loading';

const CampaignDetail = Loadable({
  loader: () => import('./connect'),
  loading: Loading,
});

export default CampaignDetail;