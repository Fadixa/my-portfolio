import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { Download } from 'lucide-react';

// Composant Home
function Home() {
  return (
    <section className="home">
      <div className="hero">
        <h1 className="animate-fade-in">Bonjour, je suis Fadwa Ait Lahbib</h1>
        <p className="animate-slide-up">Technicienne spécialisée en développement informatique. Passionnée par le web front-end et back-end, je crée des applications modernes avec React et Laravel.</p>
        <button className="cta-button">Découvrez Plus</button>
      </div>
    </section>
  );
}

// Composant About
function About() {
  const hobbies = [
    { name: 'Cuisine', desc: 'Préparation de plats traditionnels marocains et expérimentations culinaires.', icon: '🍲' },
    { name: 'Lecture', desc: 'Lecture de romans, livres techniques et articles sur la technologie.', icon: '📖' },
    
  ];

  return (
    <section className="about">
      <h2>À Propos de Moi</h2>
      <p>Je suis Fadwa Ait Lahbib, technicienne spécialisée en développement informatique. Passionnée par la programmation et la technologie, je maîtrise le développement web full-stack. J'ai une expérience en caisse chez Carrefour et je poursuis actuellement un diplôme en développement digital.</p>
      <img src="/fa.jpeg" alt="Photo de Fadwa" className="profile-img animate-scale" />
      <h3>Formations</h3>
      <ul>
        <li>2024-2026 : Diplôme en développement digital (Full Stack), en cours (2ème année).</li>
        <li>2024 : Baccalauréat en sciences de la vie et de la terre, mention Bien (13.60), lycée EL KINIDI.</li>
      </ul>
      <h3>Expérience Professionnelle</h3>
      <ul>
        <li>Hôtesse de caisse chez Carrefour (La Belle Vie), Juillet 2025 – Septembre 2025 : Accueil et orientation des clients, gestion des transactions de caisse, contribution à l'image positive du magasin.</li>
      </ul>
      <h3>Centres d'Intérêt (Hobbies)</h3>
      <div className="hobbies-grid">
        {hobbies.map((hobby, index) => (
          <div key={index} className="hobby-card dynamic-card">
            <div className="hobby-icon">{hobby.icon}</div>
            <h4>{hobby.name}</h4>
            <p>{hobby.desc}</p>
          </div>
        ))}
      </div>
      <h3>Langues</h3>
      <ul>
        <li>Arabe : Langue maternelle.</li>
        <li>Français : A2.</li>
        <li>Anglais : A1.</li>
      </ul>
    </section>
  );
}

// Composant Skills
function Skills() {
  const skills = [
    'Développement web front-end (HTML, CSS, JavaScript, Bootstrap)',
    'Développement back-end (PHP, SQL Server)',
    'Utilisation des frameworks modernes (React, Laravel)',
    'Conception et gestion de bases de données (MySQL)',
    'Maîtrise des outils de versioning (Git, GitHub, VS Code, Méthode Agile/Scrum)',
    'Logiciels bureautiques (Word, PowerPoint, Excel)'
  ];

  const qualities = [
    'Responsable', 'Passionnée et calme', 'Souci du détail', 'Créativité', 'Patiente',
    'Esprit d’équipe', 'Organisée', 'Flexible et adaptable', 'Passionnée par la programmation et la technologie', 'Ponctuelle'
  ];

  return (
    <section className="skills">
      <h2>Compétences et Qualités</h2>
      <div className="skills-grid">
        <div>
          <h3>Compétences Techniques</h3>
          {skills.map((skill, index) => (
            <div key={index} className="skill-card dynamic-card">
              {skill}
            </div>
          ))}
        </div>
        <div>
          <h3>Qualités Personnelles</h3>
          {qualities.map((quality, index) => (
            <div key={index} className="skill-card dynamic-card">
              {quality}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Composant Projects
function Projects() {
  const projects = [
   
    { title: 'Projet Rolex (Évaluation OFPPT)', desc: 'Création d\'un site web dynamique avec HTML, CSS, JS, PHP et SQL.Simulation d\'une boutique de luxe réalisée comme épreuve pratique', link: 'https://github.com/Fadixa/my-first-project/tree/main/rolex' },
    { title: 'Portfolio Personnel', desc: 'Ce site même, conçu avec React et CSS pour présenter mes compétences.', link: '#' }
  ];

  return (
    <section className="projects">
      <h2>Projets</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card dynamic-card">
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
            <a href={project.link} className="project-link">Voir le Projet</a>
          </div>
        ))}
      </div>
    </section>
  );
}

// Composant Contact
function Contact() {
  return (
    <section className="contact">
      <h2>Contactez-Moi</h2>
      <form className="contact-form">
        <input type="text" placeholder="Nom" className="animate-fade-in" />
        <input type="email" placeholder="Email" className="animate-fade-in" />
        <textarea placeholder="Message" className="animate-fade-in"></textarea>
        <button type="submit" className="cta-button">Envoyer</button>
      </form>
      <p>Téléphone : 0620722338</p>
      <p>Email : fadwaaitlahbib@gmail.com</p>
      <p>gitHub: <a href="https://github.com/Fadixa" target="_blank" style={{ color: "white" }}>https://github.com/Fadixa</a></p>
      <p>LinkedIn : <a href="https://www.linkedin.com/in/fadwa-ait-lahbib-805411384" target="_blank" rel="noopener noreferrer"  style={{color:"white"}}>www.linkedin.com/in/fadwa-ait-lahbib-805411384</a></p>
      <p>Adresse : Quartier Izdihar, près de la Gare de Bouskoura, F88Q+XMG, Bouskoura, Région de Casablanca Settat</p>


      {/* قسم تحميل السيرة الذاتية - Fadwa Ait Lahbib Portfolio */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '15px',
        marginTop: '30px',
        padding: '20px',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        borderRadius: '15px',
        border: '1px solid #C71585'
      }}>
        <p style={{ margin: 0, fontSize: '1.1rem', fontWeight: '500' }}>
          Besoin d'une version papier ?
        </p>

        <a
          href="https://drive.google.com/file/d/1Cwn4yeCVVy6VkY8VPDVygAhwmpsILxEK/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            textDecoration: 'none',
            backgroundColor: '#C71585',
            padding: '12px 25px'
          }}
        >
          <Download size={20} /> Télécharger mon CV (PDF)
        </a>
      </div>
      
      <br></br>
      
    
    </section>
  );
}

// Fonction Principale App
function App() {
  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <h1 className="logo">Portfolio de Fadwa</h1>
          <ul>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/about">À Propos</Link></li>
            <li><Link to="/skills">Compétences</Link></li>
            <li><Link to="/projects">Projets</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

// Styles CSS intégrés (mis à jour pour design professionnel avec couleurs sombre, rose foncé, noir)
const styles = `
/* Import Google Fonts pour un look professionnel (optionnel, ajoutez dans index.html si nécessaire) */
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');

body {
  font-family: 'Roboto', sans-serif;
  margin: 0;
  padding: 0;
  background-color: #1a1a1a; /* Couleur sombre */
  color: #FFFFFF;
  line-height: 1.6;
}

.app {
  min-height: 100vh;
}

/* Navbar */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background: linear-gradient(90deg, #1a1a1a, #C71585); /* Gradient sombre et rose foncé */
  color: #FFFFFF;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
}

.navbar ul {
  list-style: none;
  display: flex;
  gap: 30px;
}

.navbar a {
  color: #FFFFFF;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s;
}

.navbar a:hover {
  color: #C71585; /* Rose foncé */
  transform: scale(1.1);
}

/* Animations */
.animate-fade-in {
  animation: fadeIn 1.5s ease-in;
}

.animate-slide-up {
  animation: slideUp 1.5s ease-out;
}

.animate-scale {
  transition: transform 0.4s;
}

.animate-scale:hover {
  transform: scale(1.1);
}

.dynamic-card {
  transition: all 0.4s ease;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
}

.dynamic-card:hover {
  transform: translateY(-10px) rotate(2deg);
  box-shadow: 0 8px 25px rgba(199, 21, 133, 0.5); /* Glow rose foncé */
  background: linear-gradient(135deg, #1a1a1a, #C71585);
  color: #FFFFFF;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes slideUp {
  from { transform: translateY(30px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

/* Home */
.home {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(45deg, #1a1a1a, #C71585, #000000);
  text-align: center;
  padding: 0 20px;
}

.hero h1 {
  font-size: 3.5rem;
  margin-bottom: 20px;
  font-weight: 700;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.7);
}

.cta-button {
  background-color: #C71585; /* Rose foncé */
  color: #FFFFFF;
  padding: 15px 30px;
  border: 2px solid #000000;
  border-radius: 25px;
  cursor: pointer;
  font-size: 1.1rem;
  transition: all 0.3s;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}

.cta-button:hover {
  background-color: #000000;
  transform: scale(1.05);
}

/* About */
.about {
  padding: 60px 40px;
  text-align: center;
  background-color: #1a1a1a;
  color: #FFFFFF;
}

.profile-img {



  width: 150px;           /* تحديد عرض ثابت */
  height: 150px;          /* تحديد طول ثابت مساوي للعرض لجعلها مربعة */
  border-radius: 50%;     /* جعل الصورة دائرية تماماً */
  object-fit: cover;      /* أهم خاصية: تمنع تمدد الصورة وتحافظ على أبعادها داخل الدائرة */
  object-position: center; /* لضمان تركيز الدائرة على وسط الصورة (وجهك) */
  border: 3px solid #e91e63; /* إضافة إطار وردي ليناسب هوية موقعك البصرية */
  margin: 20px 0;         /* إضافة مسافة فوق وتحت الصورة */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.hobbies-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 30px;
}

.hobby-card {
  padding: 20px;
  background-color: #000000;
  text-align: center;
}

.hobby-icon {
  font-size: 3rem;
  margin-bottom: 10px;
}

/* Skills */
.skills {
  padding: 60px 40px;
  background: linear-gradient(135deg, #C71585, #1a1a1a);
  color: #FFFFFF;
  text-align: center;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 30px;
}

.skill-card {
  padding: 25px;
  background-color: #000000;
  border: 2px solid #C71585;
  text-align: center;
}

/* Projects */
.projects {
  padding: 60px 40px;
  background-color: #1a1a1a;
  color: #FFFFFF;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
}

.project-card {
  padding: 25px;
  background-color: #000000;
  border: 2px solid #C71585;
  text-align: center;
}

.project-link {
  color: #C71585;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s;
}

.project-link:hover {
  color: #FFFFFF;
}

/* Contact */
.contact {
  padding: 60px 40px;
  background: linear-gradient(135deg, #1a1a1a, #C71585);
  color: #FFFFFF;
  text-align: center;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 500px;
  margin: 0 auto;
}

.contact-form input, .contact-form textarea {
  padding: 15px;
  border: 2px solid #C71585;
  border-radius: 10px;
  background-color: #000000;
  color: #FFFFFF;
  font-size: 1rem;
}

.contact-form input:focus, .contact-form textarea:focus {
  outline: none;
  border-color: #FFFFFF;
  box-shadow: 0 0 10px rgba(199, 21, 133, 0.5);
}

/* Responsive pour 4K et mobiles */
@media (min-width: 3840px) {
  .hero h1 {
    font-size: 7rem;
  }
  .skills-grid, .projects-grid, .hobbies-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (max-width: 768px) {
  .navbar ul {
    flex-direction: column;
    gap: 15px;
  }
  .hero h1 {
    font-size: 2.5rem;
  }
  .skills-grid, .projects-grid, .hobbies-grid {
    grid-template-columns: 1fr;
  }
    ul{
list-style: none;}
}
`;

// Injecter les styles dans le document
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);