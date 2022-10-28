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
                    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                    <div className="form-floating">
                        <input
                            type="email"
                            className="form-control"
                            id="floatingInput"
                            placeholder="name@example.com"
                        />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>

                    <div className="checkbox mb-3">
                        <label>
                            <input type="checkbox" value="remember-me" /> Remember me
                        </label>
                    </div>
                    <button className="w-100 btn btn-lg btn-primary" onClick={loginRequest}>
                        Sign in
                    </button>
                    <p className="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
                </form>
            </main>
        </div>
    )
}

export default Login
