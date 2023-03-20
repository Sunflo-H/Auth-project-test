import { gapi } from "gapi-script";
import { useEffect } from "react";
import GoogleLogin, { GoogleLogout } from "react-google-login";
import { FcGoogle } from "react-icons/fc";
import { RiKakaoTalkFill } from "react-icons/ri";

const clientId =
  "342053744355-uf9sbrchgoh5bq2kq1v1q99h32li5rns.apps.googleusercontent.com";

function App() {
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId,
        scope: "email",
      });
    }

    gapi.load("client:auth2", start);
  }, []);

  const onSuccess = (response) => {
    console.log(response);
  };

  const onFailure = (response) => {
    console.log(response);
  };

  const onLogoutSuccess = (response) => {
    console.log(response);
  };

  return (
    <main className="main">
      <h1 className="title">Welcome</h1>
      <p>로그인 하세요</p>

      <form>
        <div>
          <input type="text" id="id" placeholder="ID" />
          <br></br>

          <input type="text" id="password" placeholder="PASSWORD" />
        </div>

        <button className="login-button">로그인</button>
        <div>
          <FcGoogle className="icon" />
          <RiKakaoTalkFill className="icon" />
          <GoogleLogin
            clientId={clientId}
            buttonText="구글 로그인"
            onSuccess={onSuccess}
            onFailure={onFailure}
          />
          <GoogleLogout clientId={clientId} onLogoutSuccess={onLogoutSuccess} />
        </div>
        <button>회원가입</button>
      </form>
    </main>
  );
}

export default App;
