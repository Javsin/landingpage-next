import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
const Navbar = (props) => {
    const router = useRouter();
    useEffect(() => {
      const scrollValue = () => {
        const scroll = window.scrollY;
        const navbar = document.getElementById("header");
        if (scroll > 100) {
          navbar.classList.add("header-scrolled");
        } else {
          navbar.classList.remove("header-scrolled");
        }
      }
      window.addEventListener("scroll", scrollValue);
      const onscroll = (el, listener) => {
        el.addEventListener("scroll", listener);
      };
      let backtotop = document.getElementById("back-to-top");
      if (backtotop) {
        const toggleBacktotop = () => {
          if (window.scrollY > 100) {
            backtotop.classList.add("active");
          } else {
            backtotop.classList.remove("active");
          }
        };
        window.addEventListener("load", toggleBacktotop);
        onscroll(document, toggleBacktotop);
      }
    });
    return (
        <header id="header" className={"fixed-top d-flex align-items-center "+ props.background }>
        <div className="container d-flex align-items-center justify-content-between">
          <div className="logo">
            <h1><a href="index.html"><span>MuraPay</span></a></h1>
          </div>
          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <Link href="/">
                  <a className={router.pathname == "/" ? "nav-link scrollto active" : "nav-link scrollto"}>
                    Home
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/kemitraan">
                  <a className={router.pathname == "/kemitraan" ? "nav-link scrollto active" : "nav-link scrollto"}>
                    Kemitraan
                  </a>
                </Link>
              </li>
              <li><a className="nav-link scrollto" href="#testimonials">Fitur</a></li>
              <li><a className="nav-link scrollto" href="#testimonials">Harga Produk</a></li>
              <li><a className="nav-link scrollto" href="#testimonials">FAQ</a></li>
              <li><a className="nav-link scrollto" href="#testimonials">Kontak</a></li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
      </header>
    )
}
export default Navbar;