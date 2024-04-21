import { Link } from "react-router-dom";
import "./NoPage.scss";

export default function NoPage() {
  return (
    <div className="no-page">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n&apos;existe pas.</p>
      <Link to="/">Retourner sur la page d’accueil</Link>
    </div>
  );
}
