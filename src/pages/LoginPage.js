import { useContext, useEffect, useRef, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { ENV } from "../data/constants";
import DefaultTemplate from "../components/templates/DefaultTemplate";
import AuthContext from "../store/AuthContext";

export const loginPageLoader = () => {
  console.log('login !', ENV.GOOGLE_CLIENT_ID);
  return null;
}

function LoginPage(props) {
  const [isEnableLoginBtn, setIsEnableLoginBtn] = useState(false);
  const [isEnableLogoutBtn, setIsEnableLogoutBtn] = useState(false);
  const {tokenClient} = useContext(AuthContext);
  const btnRef = useRef(null);
  
  useEffect(() => {
    if (tokenClient) {
      renderLoginButton(btnRef.current);
      // setIsEnableLoginBtn(true);
    }
  }, [tokenClient])

  // const loginPageInitData = useLoaderData();
  // console.log("loginPageInitData", loginPageInitData);

  const renderLoginButton = (element) => {
    window.google.accounts.id.renderButton(
        element, {
          type: "standard",
          shape: "pill",
          theme: "outline",
          text: "signin_with",
          size: "large",
          logo_alignment: "left",
          click_listener: (e) => {
            onClickSignIn()
          }
        }  // customization attributes
    );
  }

  const onClickSignIn = () => {
    const token = window.gapi.client.getToken();
    if (token === null) {
      // Prompt the user to select a Google Account and ask for consent to share their data
      // when establishing a new session.
      tokenClient.requestAccessToken({ prompt: 'consent' });
    } else {
      // Skip display of account chooser and consent dialog for an existing session.
      tokenClient.requestAccessToken({ prompt: '' });
    }
  }

  const onClickSignOut = () => {
    const token = window.gapi.client.getToken();
    if (window.gapi.client.getToken() !== null) {
      window.google.accounts.oauth2.revoke(token.access_token);
      window.gapi.client.setToken('');
    }
  }

  return (
    <DefaultTemplate id="login" title="this is login!">
      <div>login content</div>

      { isEnableLoginBtn &&
        <button id="authorize_button" onClick={onClickSignIn}>Authorize</button>
      }
      { isEnableLogoutBtn &&
        <button id="signout_button" onClick={onClickSignOut}>Sign Out</button>
      }
      
      <div ref={btnRef}></div>

    </DefaultTemplate>
  )
}

export default LoginPage