import React from "react";

function Accueil() {
  return (
    <div>
      <header>
        <img src="/images/logo.png" alt="Logo" />
        <nav>
          <ul>
            <li><a href="/">Accueil</a></li>
            <li><a href="/recherche-agence">Recherche d'agence</a></li>
            <li><a href="/prise-rendez-vous">Prise de rendez-vous</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <h1>Bienvenue chez notre concessionnaire automobile</h1>
        <p>Nous proposons des services de maintenance, de réparation et de vente de voitures. Découvrez nos offres dès maintenant!</p>
      </main>
      <footer>
        <p>Copyright © 2023 Concessionnaire Automobile</p>
      </footer>
    </div>
  );
}

export default Accueil;
