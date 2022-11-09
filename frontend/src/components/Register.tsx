import react from 'react'
import '../scss/signin.scss'

interface IRegisterProps {
    registerFn: any
}

function Register(props: IRegisterProps) {
    function registerRequest() {
        props.registerFn()
    }

    return (
        <div className="w-50 h-50 border border-primary container my-3 shadow p-5 bg-body rounded text-center">
            <main className="form-signin w-100 m-auto">
                <form>
                    <img className="mb-4" src="logo512.png" alt="" width="72" height="57" />
                    <h1 className="h3 fw-normal">Please sign up</h1>
                    <span className="text-danger my-3">Sorry, email already taken!</span>
                    <div className="form-floating">
                        <input
                            type="text"
                            className="form-control"
                            id="nickname"
                            placeholder="nickname"
                            required
                            maxLength={255}
                        />
                        <label htmlFor="nickname" className="text-dark">
                            Никнейм
                        </label>
                    </div>
                    <div className="form-floating">
                        <input
                            type="email"
                            className="form-control"
                            id="email_rg"
                            placeholder="name@example.com"
                            required
                            maxLength={255}
                        />
                        <label htmlFor="floatingInput" className="text-dark">
                            Email-адрес
                        </label>
                    </div>
                    <div className="form-floating">
                        <input
                            type="password"
                            className="form-control"
                            id="rgPassword"
                            placeholder="Password"
                            required
                            maxLength={255}
                        />
                        <label htmlFor="rgPassword" className="text-dark">
                            Пароль
                        </label>
                    </div>
                    <div className="form-floating">
                        <input
                            type="password"
                            className="password-2 form-control"
                            id="confirmPassword"
                            placeholder="Password"
                            required
                            maxLength={255}
                        />
                        <label htmlFor="confirmPassword" className="text-dark">
                            Подтвердите пароль
                        </label>
                    </div>
                    <div className="form-floating my-5">
                        <span className="fs-4 my-3">Выберите фотографию</span>
                        <input type="file" className="form-control py-1 h-auto" id="loadProfilePic" placeholder='dsds'/>
                    </div>
                    <input
                        type="submit"
                        className="btn btn-primary fs-4 d-block mx-auto my-2 w-auto"
                        value="Зарегистрироваться"
                    />
                    <a href="#login" className="btn btn-primary fs-5 d-block mx-auto my-2 w-50">
                        Войти
                    </a>
                    <p className="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
                </form>
            </main>
        </div>
    )
}

export default Register
