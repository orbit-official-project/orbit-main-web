'use client'
import "@/style/login.scss";

export const metadata = {
  title: "Login - Orbit"
};

export default function Login() {
  return (
    <>
      <div className="login-form-wrap">
        <div className="login-form-container">
          <form className="login-form">
            <div className="login-form-header">Welcome back</div>
            <div className="input-group">
              <input onChange={(e)=>{
                if(e.target.value.length > 0){
                  e.target.classList.add('writed');
                }
                else{
                  e.target.classList.remove('writed');
                }
              }} className="input" type="email" required />
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
