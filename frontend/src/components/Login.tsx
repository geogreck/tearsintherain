import react from 'react'
import '../scss/signin.scss'

interface ILoginProps {
    loginFn: any
}

function Login(props: ILoginProps) {
    function loginRequest() {
        props.loginFn()
    }

    return (
        <div className="w-50 h-50 border border-primary container my-3 shadow p-5 bg-body rounded text-center">
            <main className="form-signin w-100 m-auto">
                <form>
                    <img className="mb-4" src="logo512.png" alt="" width="72" height="57" />
                    <h1 className="h3 fw-normal">Please sign in</h1>
                    <span className="text-danger my-3">Sorry, wrong password!</span>

                    <div className="form-floating">
                        <input
                            type="email"
                            className="form-control"
                            id="floatingInput"
                            placeholder="name@example.com"
                            maxLength={255}
                            required
                        />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating">
                        <input
                            type="password"
                            className="password-2 form-control"
                            id="floatingPassword"
                            placeholder="Password"
                            maxLength={255}
                            required
                        />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>

                    <div className="checkbox mb-3">
                        <label>
                            <input type="checkbox" value="remember-me" /> Remember me
                        </label>
                    </div>
                    <input type="submit" className="btn btn-primary fs-4 d-block mx-auto my-2 w-75" value="Войти" />
                    <a href="#register" className="btn btn-primary fs-5 d-block mx-auto my-2 w-auto">
                        Зарегистрироваться
                    </a>
                    <button className='btn btn-primary fs-5 d-block mx-auto w-auto' onClick={loginRequest}>Демо</button>
                    <p className="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
                </form>
            </main>
        </div>
    )
}

export default Login
