import { classNameModule } from "@/utils/className/className";
import styles from "./not-found.module.scss";
import Link from "next/link";
const className = classNameModule(styles);

export default function NotFoundPage() {
  return (
    <main {...className("NotFoundPage")}>
      <div>
        <img
          {...className("brand")}
          height={38}
          width={138}
          src="https://res.cloudinary.com/anthony-jeamme-stuff/image/upload/v1639411627/alteria-white.svg"
          alt=""
        />
        <h1>Oups, cette page n{"'"}existe pas</h1>

        <Link href="/">Retour à l{"'"}accueil</Link>
      </div>
    </main>
  );
}
