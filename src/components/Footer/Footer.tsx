import { classNameModule } from "@/utils/className/className";
import styles from "./Footer.module.scss";
import Container from "../common/Container/Container";
const className = classNameModule(styles);

const Footer = () => {
  return (
    <div {...className("Footer")}>
      <Container>
        <img
          {...className("brand")}
          height={38}
          width={138}
          src="https://res.cloudinary.com/anthony-jeamme-stuff/image/upload/v1639411627/alteria-white.svg"
          alt=""
        />

        <div {...className("columns")}>
          <div>columns</div>

          <div>columns</div>
          <div>columns</div>
        </div>
      </Container>
      <Container large>
        <div {...className("bottom")}>
          <div>Mentions Légales - Politique de Confidentialité</div>
          <div {...className("copyright")}>
            Alteria Assurances et Patrimoine <sup>©</sup> - Tous droits réservés
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
