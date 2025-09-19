// src/ScrollToTop.jsx
import { useLayoutEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

export default function ScrollToTop({ behavior = "auto" }) {
  const { pathname, hash } = useLocation();
  const navType = useNavigationType(); // keeps scroll on back/forward

  useLayoutEffect(() => {
    if (navType === "POP") return;           // back/forward: keep position
    if (hash) {                               // support #section links
      const el = document.querySelector(hash);
      if (el) { el.scrollIntoView(); return; }
    }
    window.scrollTo({ top: 0, left: 0, behavior });
  }, [pathname, hash, navType, behavior]);

  return null;
}
