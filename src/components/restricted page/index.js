function RestrictedPage({ isLoggedIn, user, login, logout }) {
  return (
    <>
      {isLoggedIn ? (
        <div>
          <p>Hello!,{user}</p>
          <button onClick={logout}>logout</button>
        </div>
      ) : (
        <div>
          <p>Você não pode acessar essa pagína</p>
          <button onClick={login}>login</button>
        </div>
      )}
    </>
  );
}

export default RestrictedPage;
