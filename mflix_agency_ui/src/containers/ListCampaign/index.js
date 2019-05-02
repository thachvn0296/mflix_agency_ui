import Loadable from 'react-loadable';
import Loading from '../../components/Loading';

const ListCampaign = Loadable({
  loader: () => import('./connect'),
  loading: Loading,
});

export default ListCampaign;