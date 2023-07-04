"use client";

import { classNameModule } from "@/utils/className/className";
import styles from "./NavigationBar.module.scss";
import { Phone, CaretDown } from "@phosphor-icons/react";
import { useEffect, useRef } from "react";
import Link from "next/link";
const className = classNameModule(styles);

const NavigationBar = () => {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      //

      const rootElement = rootRef.current;

      if (!rootElement) return;

      const isScrolled = window.scrollY > 10;

      if (isScrolled) {
        rootElement.classList.add(styles["isScrolled"]);
      } else {
        rootElement.classList.remove(styles["isScrolled"]);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div {...className("NavigationBar")} ref={rootRef}>
      <div>
        <Link href="/">
          <img
            {...className("brand")}
            height={30}
            width={109}
            src="https://res.cloudinary.com/anthony-jeamme-stuff/image/upload/v1639411627/alteria-white.svg"
            alt=""
          />
        </Link>

        <button>
          Nos solutions
          <CaretDown size={12} weight="bold" style={{ translate: `0 1px` }} />
        </button>
        <Link href={"/articles"}>
          <button>Nos articles</button>
        </Link>
        <Link href={"/qui-sommes-nous"}>
          <button>Qui commes-nous ?</button>
        </Link>
      </div>

      <div>
        <button>
          <Phone weight="duotone" /> 07.81.93.47.23
        </button>
      </div>
    </div>
  );
};

export default NavigationBar;
