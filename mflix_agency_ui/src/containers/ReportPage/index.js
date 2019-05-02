import Loadable from 'react-loadable';
import Loading from '../../components/Loading';

const ReportPage = Loadable({
  loader: () => import('./connect'),
  loading: Loading,
});

export default ReportPage;