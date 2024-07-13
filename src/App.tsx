/* eslint-disable @typescript-eslint/no-unused-vars */

import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Home, Login } from './pages';
import NotFound from './pages/NotFound';
import ProtectedRoute from './components/ProtectedRoute';
import { OidcProvider, OidcSecure } from '@axa-fr/react-oidc';

function App() {

  //duende sample server
  // const configuration = {
  //   client_id: 'interactive.public.short',
  //   redirect_uri: window.location.origin + '/authentication/callback',
  //   silent_redirect_uri: window.location.origin + '/authentication/silent-callback', // Optional activate silent-signin that use cookies between OIDC server and client javascript to restore the session
  //   scope: 'openid profile email api offline_access',
  //   authority: 'https://demo.duendesoftware.com',
  //   service_worker_relative_url:'/OidcServiceWorker.js',
  //   service_worker_only:true,
  // };

  // const configuration_duende_local = {
  //   client_id: 'web',    
  //   redirect_uri: `${window.location.origin}/authentication/callback`,
  //   silent_redirect_uri: window.location.origin + '/authentication/silent-callback', // Optional activate silent-signin that use cookies between OIDC server and client javascript to restore the session
  //   scope: 'verification openid profile',
  //   authority: 'https://localhost:5001',
  //   service_worker_relative_url:'/OidcServiceWorker.js',
  //   service_worker_only: true,
  // };

  // const configuration_duende_local_cloned = {
  //   client_id: 'interactive.public.short',    
  //   redirect_uri: `${window.location.origin}/authentication/callback`,
  //   silent_redirect_uri: window.location.origin + '/authentication/silent-callback', // Optional activate silent-signin that use cookies between OIDC server and client javascript to restore the session
  //   scope: 'openid profile email api offline_access',
  //   authority: 'https://localhost:5001',
  //   service_worker_relative_url:'/OidcServiceWorker.js',
  //   service_worker_only: true,
  // };

  // const configuration_custom = {
  //   client_id: 'web-pkce',    
  //   redirect_uri: window.location.origin + '/authentication/callback',
  //   silent_redirect_uri: window.location.origin + '/authentication/silent-callback', // Optional activate silent-signin that use cookies between OIDC server and client javascript to restore the session
  //   scope: 'openid profile email',
  //   authority: 'https://localhost:7149',
  //   service_worker_relative_url:'/OidcServiceWorker.js',
  //   service_worker_only:true,
  // };

  // const configuration_react = {
  //   client_id: 'web-pkce',
  //   redirect_uri: window.location.origin + '/authentication/callback',
  //   silent_redirect_uri: window.location.origin + '/authentication/silent-callback', // Optional activate silent-signin that use cookies between OIDC server and client javascript to restore the session
  //   scope: 'openid profile',
  //   authority: 'https://localhost:7174',
  //   service_worker_relative_url:'/OidcServiceWorker.js',
  //   service_worker_only:false,
  // };

  const configuration_hqwallet_local = {
    client_id: '3534fb53-9689-4646-84ba-682a73c5d84f',
    redirect_uri: window.location.origin + '/authentication/callback',
    silent_redirect_uri: window.location.origin + '/authentication/silent-callback', // Optional activate silent-signin that use cookies between OIDC server and client javascript to restore the session
    scope: 'openid profile email',
    authority: 'https://localhost:7174',
    service_worker_relative_url:'/OidcServiceWorker.js',
    service_worker_only:false,
  };

  // const configuration_hqwallet_server = {
  //   client_id: '3534fb53-9689-4646-84ba-682a73c5d84f',
  //   redirect_uri: window.location.origin + '/authentication/callback',
  //   silent_redirect_uri: window.location.origin + '/authentication/silent-callback', // Optional activate silent-signin that use cookies between OIDC server and client javascript to restore the session
  //   scope: 'openid profile email',
  //   authority: 'https://apphqewalletbackend.azurewebsites.net',
  //   service_worker_relative_url:'/OidcServiceWorker.js',
  //   service_worker_only:false,
  // };

  const router = createBrowserRouter([
    {
      path: '/',      
      element: (
        <OidcSecure>
          <ProtectedRoute>        
            <Home/>
          </ProtectedRoute>
        </OidcSecure>
      ),
      errorElement: <NotFound/>
    },
    {
      path: '/login',
      element: (
          <Login/>
      )
    },
    {
      path: '*',
      element: <Home/>
    }
  ]);



  // const [isAuth, setAuth] = useState(false);
  // const [ytState, setYtState] = useState({ youtubeResult: '' });
  // const user = {
  //   authenticated: false,
  //   id: '',
  //   youtubeEnabled: false
  // }

  // const login = () => {
  //   return fetch('api/login').then(loadUserInfo);
  // }

  // const connectYoutube = (): void => {
  //   window.location.assign('/api/youtube-connect');
  // }

  // const loadYoutubeData = (): Promise<any> => {
  //   return fetch('/api-yt').then( res => res.json());
  // }

  // const loadUserInfo = () => {
  //   return fetch('/api/user', { headers: { "X-Requested-With": "XMLHttpRequest" } })
  //   .then( res => {
  //     if (res.status === 401) {
  //      return;
  //     }
  //     return res.json()
  //     .then(json => {
  //       user.authenticated = true;
  //       user.id = json.id;
  //       user.youtubeEnabled = json.ytEnabled;

  //     });
  //   });
  // }

  // useEffect(() => {
  //   loadUserInfo();
  // }, [])

  return (
    <OidcProvider configuration={configuration_hqwallet_local}>   
      <RouterProvider router={router}/>
    </OidcProvider>
  )
}

export default App
