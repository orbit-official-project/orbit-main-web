import "@/style/register.scss";

export default function Register() {
  return (
    <>
      <div className="register-form-wrap">
        <div className="register-form-container">
          <form className="register-form">
            <div className="register-form-header">Welcome back</div>
            <div className="input-group">
              <input className="input" type="text" required />
              <label className="placeholder">Email address</label>
            </div>
            <div>
              <button className="btn">Continue</button>
            </div>
            <hr />
            <p>소셜로그인</p>
          </form>
        </div>
      </div>
    </>
  );
}
