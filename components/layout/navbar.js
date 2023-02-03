import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
const Navbar = (props) => {
  const router = useRouter();
  useEffect(() => {
    const select = (el, all = false) => {
      try {
        el = el.trim();
        if (all) {
          return [...document.querySelectorAll(el)];
        } else {
          return document.querySelector(el);
        }
      } catch (error) {}
    };

    const on = (type, el, listener, all = false) => {
      let selectEl = select(el, all);
      if (selectEl) {
        if (all) {
          selectEl.forEach((e) => e.addEventListener(type, listener));
        } else {
          selectEl.addEventListener(type, listener);
        }
      }
    };

    const scrollValue = () => {
      const scroll = window.scrollY;
      const navbar = document.getElementById("header");
      if (scroll > 100) {
        navbar.classList.add("header-scrolled");
      } else {
        navbar.classList.remove("header-scrolled");
      }
    };
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

    const el_toggle = document.querySelector(".mobile-nav-toggle");
    el_toggle.addEventListener("click", (e) => {
      document.getElementById("navbar").classList.toggle("navbar-mobile");
      el_toggle.classList.toggle("bi-list");
      el_toggle.classList.toggle("bi-x");
    });

    on(
      "click",
      ".navbar .dropdown > a",
      function (e) {
        if (select("#navbar").classList.contains("navbar-mobile")) {
          e.preventDefault();
          this.nextElementSibling.classList.toggle("dropdown-active");
        }
      },
      true
    );

    let lastScrollTop = 0;
    const floatingMobile = () => {
      const floatingMobile = document.getElementById("floating-mobile");
      if (!floatingMobile) return;

      const st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > lastScrollTop) {
        floatingMobile.classList.add("d-none");
        floatingMobile.classList.remove("d-block");
        floatingMobile.classList.remove("animate-fade-up");
      } else {
        floatingMobile.classList.add("d-block");
        floatingMobile.classList.add("animate-fade-up");
        floatingMobile.classList.remove("d-none");
      }
      lastScrollTop = st <= 0 ? 0 : st;

      // if floating mobile until the bottom of the page
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        floatingMobile.classList.add("d-block");
        floatingMobile.classList.add("animate-fade-up");
        floatingMobile.classList.remove("d-none");
      }
    };

    document.addEventListener("scroll", floatingMobile);
  }, []);
  return (
    <header id="header" className={"fixed-top d-flex align-items-center " + props.background}>
      <div className="container d-flex align-items-center justify-content-between">
        <div className="logo">
          <Link href="/">
            <h1 className="text-white">
              <span>MuraPay</span>
            </h1>
          </Link>
        </div>
        <nav id="navbar" className="navbar">
          <ul>
            <li>
              <Link href="/">
                <a className={router.pathname == "/" ? "nav-link scrollto active" : "nav-link scrollto"}>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a className={router.pathname == "/about" ? "nav-link scrollto active" : "nav-link scrollto"}>MitraMura</a>
              </Link>
            </li>
            <li>
              <Link href="/kemitraan">
                <a className={router.pathname == "/kemitraan" ? "nav-link scrollto active" : "nav-link scrollto"}>Kemitraan</a>
              </Link>
            </li>
            <li>
              <Link href="/partnership">
                <a className={router.pathname == "/partnership" ? "nav-link scrollto active" : "nav-link scrollto"}>Partnership</a>
              </Link>
            </li>
            <li>
              <Link href="/harga">
                <a className={router.pathname == "/harga" ? "nav-link scrollto active" : "nav-link scrollto"}>Harga</a>
              </Link>
            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
      </div>
    </header>
  );
};
export default Navbar;
