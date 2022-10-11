import React from 'react'
import '../scss/Header.scss'

interface HeaderProps {
    page: string
    openModal: any
}

function Header(props: HeaderProps) {
    return (
        <nav className=" sticky-top navbar navbar-expand-lg navbar-light bg-my-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#index">
                    <img src="logo.png" height="50px" alt="" className="mx-3" />
                </a>

                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item"></li>
                </ul>
                <a className="nav-link mx-2" onClick={props.openModal} style={{cursor:'pointer'}}>
                    <svg
                        width="35px"
                        height="35px"
                        viewBox="0 0 512 512"
                        version="1.1"
                        id="Capa_1"
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                    >
                        <path
                            d="M438.2,0H51.6C23.1,0,0,23.2,0,51.6v386.6c0,28.5,23.2,51.6,51.6,51.6h386.6c28.5,0,51.6-23.2,51.6-51.6V51.6
			C489.8,23.2,466.6,0,438.2,0z M465.3,438.2c0,14.9-12.2,27.1-27.1,27.1H51.6c-14.9,0-27.1-12.2-27.1-27.1V51.6
			c0-14.9,12.2-27.1,27.1-27.1h386.6c14.9,0,27.1,12.2,27.1,27.1V438.2z"
                        />
                        <path
                            d="M337.4,232.7h-80.3v-80.3c0-6.8-5.5-12.3-12.3-12.3s-12.3,5.5-12.3,12.3v80.3h-80.3c-6.8,0-12.3,5.5-12.3,12.2
			c0,6.8,5.5,12.3,12.3,12.3h80.3v80.3c0,6.8,5.5,12.3,12.3,12.3s12.3-5.5,12.3-12.3v-80.3h80.3c6.8,0,12.3-5.5,12.3-12.3
			C349.7,238.1,344.2,232.7,337.4,232.7z"
                        />
                    </svg>
                </a>
                <a className="nav-link active mx-2" aria-current="page" href="#index">
                    <svg
                        width="35px"
                        height="35px"
                        viewBox="0 0 24 24"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-labelledby="feedIconTitle"
                        stroke="#000000"
                        fill="none"
                        color="#000000"
                        className="mx-2"
                    >
                        <title id="feedIconTitle">Feed</title>
                        <circle cx="7.5" cy="7.5" r="2.5" />
                        <path d="M22 13H2" /> <path d="M18 6h-5m5 3h-5" />
                        <path d="M5 2h14a3 3 0 0 1 3 3v17H2V5a3 3 0 0 1 3-3z" />
                    </svg>
                </a>
                <a className="nav-link mx-2" href="#profile">
                    <svg
                        width="35px"
                        height="35px"
                        viewBox="0 0 512 512"
                        version="1.1"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        className="mx-2"
                    >
                        <g>
                            <g>
                                <path
                                    d="M256,0c-84.83,0-153.6,85.965-153.6,192S171.17,384,256,384s153.6-85.965,153.6-192S340.83,0,256,0z M256,358.4
			c-70.579,0-128-74.65-128-166.4S185.421,25.6,256,25.6S384,100.25,384,192S326.579,358.4,256,358.4z"
                                />
                            </g>
                        </g>
                        <path
                            d="M367.812,361.762c-6.869,6.682-14.182,12.689-21.82,18.099c24.388,11.332,45.781,20.753,64.051,28.732
			c67.797,29.585,76.356,35.439,76.356,52.207c0,11.597-11.418,25.6-25.6,25.6H51.2c-14.182,0-25.6-14.003-25.6-25.6
			c0-16.768,8.559-22.622,76.348-52.207c18.278-7.979,39.671-17.399,64.051-28.732c-7.637-5.41-14.95-11.418-21.82-18.099
			C37.598,410.539,0,417.075,0,460.8C0,486.4,22.921,512,51.2,512h409.6c28.279,0,51.2-25.6,51.2-51.2
			C512,417.075,474.402,410.539,367.812,361.762z"
                        />
                    </svg>
                </a>
                <a href="#notifications">
                    <svg
                        version="1.1"
                        id="Capa_1"
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        viewBox="0 0 51.997 51.997"
                        width="35px"
                        height="35px"
                        className="mx-2 me-4"
                    >
                        <g>
                            <path
                                d="M51.911,16.242C51.152,7.888,45.239,1.827,37.839,1.827c-4.93,0-9.444,2.653-11.984,6.905
                        c-2.517-4.307-6.846-6.906-11.697-6.906c-7.399,0-13.313,6.061-14.071,14.415c-0.06,0.369-0.306,2.311,0.442,5.478
                        c1.078,4.568,3.568,8.723,7.199,12.013l18.115,16.439l18.426-16.438c3.631-3.291,6.121-7.445,7.199-12.014
                        C52.216,18.553,51.97,16.611,51.911,16.242z M49.521,21.261c-0.984,4.172-3.265,7.973-6.59,10.985L25.855,47.481L9.072,32.25
                        c-3.331-3.018-5.611-6.818-6.596-10.99c-0.708-2.997-0.417-4.69-0.416-4.701l0.015-0.101C2.725,9.139,7.806,3.826,14.158,3.826
                        c4.687,0,8.813,2.88,10.771,7.515l0.921,2.183l0.921-2.183c1.927-4.564,6.271-7.514,11.069-7.514
                        c6.351,0,11.433,5.313,12.096,12.727C49.938,16.57,50.229,18.264,49.521,21.261z"
                            />
                        </g>
                    </svg>
                </a>
                {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item"></li>
        </ul> */}
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-primary" type="submit">
                        Search
                    </button>
                </form>
            </div>
        </nav>
    )
}

export default Header
