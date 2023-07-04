"use client";

import Link from "next/link";
import { classNameModule } from "@/utils/className/className";
import styles from "./LoginPage.module.scss";
import {
  ArrowLeft,
  FacebookLogo,
  GoogleLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";
import { useRef } from "react";
const className = classNameModule(styles);

const LoginPage = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  return (
    <div {...className("LoginPage")}>
      <div>
        <Link href="/">
          <button {...className("BackButton")}>
            <ArrowLeft />
            Retour
          </button>
        </Link>
        <form
          action="/api/makasi/auth"
          method="POST"
          onSubmit={async (e) => {
            e.preventDefault();

            if (!emailRef.current || !passwordRef.current) return;

            const res = await fetch("/api/makasi/auth", {
              body: JSON.stringify({
                email: emailRef.current.value,
                password: passwordRef.current.value,
              }),
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
            }).then((result) => result.json());

            if (res.error) {
              console.log("ERROR");
            } else {
              console.log("OK");
            }
          }}
        >
          <label htmlFor="email">E-mail</label>
          <input id="email" name="email" type="email" required ref={emailRef} />
          <label htmlFor="password">Mot de passe</label>
          <input
            id="password"
            name="password"
            required
            type="password"
            ref={passwordRef}
          />
          <button>Se connecter</button>
        </form>
        <hr />

        <div {...className("methods")}>
          <button>
            <GoogleLogo />
          </button>
          <button>
            <FacebookLogo />
          </button>
          <button>
            <LinkedinLogo />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
