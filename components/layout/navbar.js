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
      // const select = (el, all = false) => {
      //   try {
      //     el = el.trim();
      //     if (all) {
      //       return [...document.querySelectorAll(el)];
      //     } else {
      //       return document.querySelector(el);
      //     } 
      //   } catch (error) {
          
      //   }
      // };
      // const on = (type, el, listener, all = false) => {
      //   let selectEl = select(el, all);
      //   if (selectEl) {
      //     if (all) {
      //       selectEl.forEach((e) => e.addEventListener(type, listener));
      //     } else {
      //       selectEl.addEventListener(type, listener);
      //     }
      //   }
      // };
      // on("click", ".mobile-nav-toggle", function (e) {
      const el_toggle = document.querySelector(".mobile-nav-toggle");
      el_toggle.addEventListener("click", (e) => {
        console.log("click");
        document.getElementById("navbar").classList.toggle("navbar-mobile");
        el_toggle.classList.toggle("bi-list");
        el_toggle.classList.toggle("bi-x");
      });
    
      /**
       * Mobile nav dropdowns activate
       */
      // on(
      //   "click",
      //   ".navbar .dropdown > a",
      //   function (e) {
      //     if (select("#navbar").classList.contains("navbar-mobile")) {
      //       e.preventDefault();
      //       this.nextElementSibling.classList.toggle("dropdown-active");
      //     }
      //   },
      //   true
      // );
    },[]);
    return (
      <header id="header" className={"fixed-top d-flex align-items-center "+ props.background }>
        <div className="container d-flex align-items-center justify-content-between">
          <div className="logo">
            <Link href="/">
              <h1 className="text-white"><span>MuraPay</span></h1>
            </Link>
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
              <li>
                <Link href="/harga">
                  <a className={router.pathname == "/harga" ? "nav-link scrollto active" : "nav-link scrollto"}>
                    Harga
                  </a>
                </Link>
              </li>
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