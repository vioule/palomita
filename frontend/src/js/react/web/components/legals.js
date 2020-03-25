const React = require("react");

export default () => (
  <div className="legal marge">
    <div className="center">
      <h1 className="legal-title">Mentions légales</h1>
      <h2 className="legal-categorie">Production :</h2>
      <p className="legal-text">
        Ce site a été réalisé par Vincent Cano web développeur à Bordeaux.
        <br/>
        Email      : vcano.fr@outlook.com 
        <br/>
        Téléphone  : 06 98 19 84 95
      </p>
      <h2 className="legal-categorie">Hébergeur :</h2>
        <p className="legal-text">
          Ce site est hébergé exclusivement sur des datacenters en Europe (Allemagne) de la société Amazon Web Services (AWS):<br/>
          Amazon Web Services Inc.<br/>
          410 Terry Avenue North,<br/>
          Seattle, WA 98109-5210, USA<br/>
          <a href="https://aws.amazon.com" target="_blank" className="legal-link">https://aws.amazon.com</a><br/>
        </p>
    </div>
  </div>
);