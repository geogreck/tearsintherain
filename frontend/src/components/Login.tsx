import react from 'react'
import { Form, Link } from 'react-router-dom'
import '../scss/signin.scss'

function Login() {
    function loginRequest() {}

    return (
        <div className="w-75 h-50 border border-primary container my-3 shadow p-5 bg-body rounded text-center">
            <main className="form-signin w-100 m-auto">
                <Form method="post" action="/login">
                    <img className="mb-4" src="logo512.png" alt="" width="72" height="57" />
                    <h1 className="h3 fw-normal">Please sign in</h1>
                    <span className="text-danger my-3">Sorry, wrong password!</span>

                    <div className="form-floating">
                        <input
                            type="email"
                            name="email"
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
                            name="password"
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
                    <Link to="/register" className="btn btn-primary fs-5 d-block mx-auto my-2 w-auto">
                        Зарегистрироваться
                    </Link>
                    <button className="btn btn-primary fs-5 d-block mx-auto w-auto" onClick={loginRequest}>
                        Демо
                    </button>
                    <p className="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
                </Form>
            </main>
        </div>
    )
}

export default Login
