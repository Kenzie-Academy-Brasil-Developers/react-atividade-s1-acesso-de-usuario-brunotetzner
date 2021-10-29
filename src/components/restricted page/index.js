import "./style.css";
function RestrictedPage({ isLoggedIn, user, login, logout }) {
  return (
    <>
      {isLoggedIn ? (
        <div class="container-mensage" id="true">
          <p>Hello! {user}</p>
          <button id="logout" onClick={logout}>
            logout
          </button>
        </div>
      ) : (
        <div class="container-mensage" id="false">
          <p>Você não pode acessar essa pagína</p>
          <button id="login" onClick={login}>
            login
          </button>
        </div>
      )}
    </>
  );
}

export default RestrictedPage;
