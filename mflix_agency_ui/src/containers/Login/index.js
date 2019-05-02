import Loadable from 'react-loadable';
import Loading from '../../components/Loading';

const Login = Loadable({
  loader: () => import('./connect'),
  loading: Loading,
});

export default Login;