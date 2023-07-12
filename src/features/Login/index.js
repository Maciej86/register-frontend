import { useLoginUser } from "./useLoginUser";

export const PanelLogin = () => {
  const { onSubmitLoginUser, refLoginUser, refPasswordUser } = useLoginUser();

  return (
    <>
      <form onSubmit={onSubmitLoginUser}>
        <h2>Panel logowania</h2>
        <div>
          <label htmlFor="login">Login</label>
          <input type="text" ref={refLoginUser} id="login" maxLength={15} />
        </div>
        <div>
          <label htmlFor="password">Hasło</label>
          <input type="password" ref={refPasswordUser} id="password" />
        </div>
        <button type="submit">Zaloguj</button>
      </form>
    </>
  );
};
