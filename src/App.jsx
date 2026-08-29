import { useEffect, useState } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";

const whatsapp = "https://wa.me/message/7CWRXNZZELPDI1";
const instagram = "https://www.instagram.com/pimpmypetoficial/";
const maps = "https://www.google.com/maps/search/?api=1&query=Av.%20Armando%20de%20Andrade%2C%20322%20Tabo%C3%A3o%20da%20Serra";
const asset = (path) => `${import.meta.env.BASE_URL}${path}`;

const reveal = (reduced, delay = 0) =>
  reduced
    ? {}
    : {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.18 },
        transition: { duration: 0.58, delay, ease: [0.22, 1, 0.36, 1] },
      };

function Icon({ name, className = "" }) {
  return (
    <svg className={className} aria-hidden="true">
      <use href={`#icon-${name}`} />
    </svg>
  );
}

function IconDefs() {
  return (
    <svg className="svg-defs" aria-hidden="true">
      <symbol id="icon-paw" viewBox="0 0 64 64">
        <ellipse cx="32" cy="40" rx="15" ry="13" fill="currentColor" />
        <ellipse cx="13" cy="27" rx="7" ry="9" transform="rotate(-28 13 27)" fill="currentColor" />
        <ellipse cx="25" cy="16" rx="7" ry="9" transform="rotate(-8 25 16)" fill="currentColor" />
        <ellipse cx="39" cy="16" rx="7" ry="9" transform="rotate(8 39 16)" fill="currentColor" />
        <ellipse cx="51" cy="27" rx="7" ry="9" transform="rotate(28 51 27)" fill="currentColor" />
      </symbol>
      <symbol id="icon-arrow" viewBox="0 0 24 24">
        <path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </symbol>
      <symbol id="icon-whatsapp" viewBox="0 0 24 24">
        <path d="M20.5 3.5A11.9 11.9 0 0 0 12.05 0C5.47 0 .12 5.35.12 11.93c0 2.1.55 4.15 1.6 5.95L0 24l6.27-1.64a11.9 11.9 0 0 0 5.77 1.47h.01c6.58 0 11.93-5.35 11.93-11.93 0-3.19-1.24-6.19-3.48-8.4Zm-8.45 18.31h-.01a9.85 9.85 0 0 1-5.02-1.38l-.36-.21-3.72.98.99-3.63-.24-.37a9.86 9.86 0 0 1-1.51-5.27c0-5.44 4.43-9.87 9.88-9.87a9.8 9.8 0 0 1 6.98 2.9 9.8 9.8 0 0 1 2.89 6.99c-.01 5.44-4.44 9.86-9.88 9.86Zm5.42-7.39c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.39-1.48a8.9 8.9 0 0 1-1.65-2.05c-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.21 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.19 1.87.12.57-.08 1.76-.72 2.01-1.41.25-.69.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35Z" fill="currentColor" />
      </symbol>
      <symbol id="icon-instagram" viewBox="0 0 24 24">
        <rect x="2.5" y="2.5" width="19" height="19" rx="5" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="12" r="4.25" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="18" cy="6" r="1.15" fill="currentColor" />
      </symbol>
      <symbol id="icon-pin" viewBox="0 0 24 24">
        <path d="M20 10c0 5.2-8 12-8 12S4 15.2 4 10a8 8 0 1 1 16 0Z" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="10" r="2.5" fill="none" stroke="currentColor" strokeWidth="2" />
      </symbol>
      <symbol id="icon-van" viewBox="0 0 64 64">
        <path d="M8 18h31c4.5 0 8 3.5 8 8v4h5.5l5.5 8v9H8V18Z" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M47 30v9h11M15 26h12v9H15zM32 26h8v9h-8" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinejoin="round" />
        <circle cx="19" cy="48" r="6" fill="none" stroke="currentColor" strokeWidth="3.5" />
        <circle cx="49" cy="48" r="6" fill="none" stroke="currentColor" strokeWidth="3.5" />
        <path d="M28 47h15" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
      </symbol>
      <symbol id="icon-bubbles" viewBox="0 0 64 64">
        <circle cx="22" cy="38" r="11" fill="none" stroke="currentColor" strokeWidth="4" />
        <circle cx="43" cy="25" r="9" fill="none" stroke="currentColor" strokeWidth="4" />
        <circle cx="42" cy="47" r="6" fill="none" stroke="currentColor" strokeWidth="4" />
        <circle cx="21" cy="18" r="5" fill="none" stroke="currentColor" strokeWidth="4" />
      </symbol>
      <symbol id="icon-scissors" viewBox="0 0 64 64">
        <circle cx="18" cy="19" r="9" fill="none" stroke="currentColor" strokeWidth="4" />
        <circle cx="18" cy="45" r="9" fill="none" stroke="currentColor" strokeWidth="4" />
        <path d="m25 24 29 20M25 40l29-20" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      </symbol>
      <symbol id="icon-heart" viewBox="0 0 64 64">
        <path d="M32 53S9 40 9 23c0-8 6-13 13-13 5 0 8 3 10 7 2-4 5-7 10-7 7 0 13 5 13 13 0 17-23 30-23 30Z" fill="none" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" />
      </symbol>
      <symbol id="icon-spark" viewBox="0 0 64 64">
        <path d="M32 5c2 16 11 25 27 27-16 2-25 11-27 27-2-16-11-25-27-27C21 30 30 21 32 5Z" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinejoin="round" />
      </symbol>
    </svg>
  );
}

function Button({ href, children, variant = "dark", icon, className = "" }) {
  return (
    <a className={`button button-${variant} ${className}`} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined}>
      {icon && <Icon name={icon} />}
      <span>{children}</span>
      {!icon && <Icon name="arrow" />}
    </a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <a className="brand" href="#inicio" aria-label="Pimp My Pet, início" onClick={close}>
        <span className="brand-mark"><img src={asset("images/pimp-my-pet-logo.svg")} alt="" /></span>
        <span className="brand-copy"><strong>Pimp My Pet</strong><small>Banho & Tosa</small></span>
      </a>
      <nav className={`main-nav ${open ? "is-open" : ""}`} id="main-nav" aria-label="Navegação principal">
        <a href="#servicos" onClick={close}>Serviços</a>
        <a href="#experiencia" onClick={close}>Nosso cuidado</a>
        <a href="#turminha" onClick={close}>Turminha Pimp</a>
        <a href="#localizacao" onClick={close}>Onde estamos</a>
      </nav>
      <Button href={whatsapp} className="header-cta">Agendar</Button>
      <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="main-nav" aria-label={open ? "Fechar menu" : "Abrir menu"} onClick={() => setOpen((value) => !value)}>
        <span /><span /><span />
      </button>
    </header>
  );
}

function Hero({ reduced }) {
  const group = reduced
    ? {}
    : {
        hidden: {},
        show: { transition: { staggerChildren: 0.09 } },
      };
  const item = reduced
    ? {}
    : {
        hidden: { opacity: 0, y: 22 },
        show: { opacity: 1, y: 0, transition: { duration: 0.58, ease: [0.22, 1, 0.36, 1] } },
      };

  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <div className="hero-dots" aria-hidden="true" />
      <Icon name="paw" className="hero-paw hero-paw-one" />
      <Icon name="paw" className="hero-paw hero-paw-two" />

      <motion.div className="hero-copy" variants={group} initial={reduced ? undefined : "hidden"} animate={reduced ? undefined : "show"}>
        <motion.p className="eyebrow" variants={item}>Banho & tosa em Taboão da Serra</motion.p>
        <motion.h1 id="hero-title" variants={item}>Seu pet sai daqui <em>fazendo pose.</em></motion.h1>
        <motion.p className="hero-lead" variants={item}>Banho, tosa e mimos especiais, com leva e traz para deixar o cuidado mais fácil e cheio de carinho.</motion.p>
        <motion.div className="hero-actions" variants={item}>
          <Button href={whatsapp} variant="dark" icon="whatsapp" className="button-large">Agendar pelo WhatsApp</Button>
          <a className="text-link" href="#servicos">Conhecer os serviços <Icon name="arrow" /></a>
        </motion.div>
        <motion.a className="hero-address" href={maps} target="_blank" rel="noreferrer" variants={item}>
          <Icon name="pin" />
          <span><strong>Venha conhecer</strong>Av. Armando de Andrade, 322</span>
        </motion.a>
      </motion.div>

      <motion.div className="hero-gallery" initial={reduced ? undefined : { opacity: 0, scale: 0.97 }} animate={reduced ? undefined : { opacity: 1, scale: 1 }} transition={{ duration: 0.75, delay: 0.2, ease: [0.22, 1, 0.36, 1] }} aria-label="Pets atendidos pela Pimp My Pet">
        <figure className="hero-photo hero-photo-main">
          <img src={asset("images/pets-cenario.jpg")} alt="Dois pets felizes em cenário temático da Pimp My Pet" fetchPriority="high" />
          <figcaption>Prontos para a foto</figcaption>
        </figure>
        <figure className="hero-photo hero-photo-left"><img src={asset("images/pets-lacos.jpg")} alt="Dois pets usando laços após o cuidado" /></figure>
        <figure className="hero-photo hero-photo-right"><img src={asset("images/pet-roupinha.jpg")} alt="Pet branco com roupa colorida" /></figure>
        <div className="photo-sticker"><Icon name="paw" /><span>Carinho em cada detalhe</span></div>
      </motion.div>
    </section>
  );
}

function ServiceStrip() {
  return (
    <div className="service-strip" aria-label="Principais serviços">
      {["Banho", "Tosa", "Leva e traz", "Clube do banho", "Loja e mimos"].map((item) => (
        <span key={item}><Icon name="paw" />{item}</span>
      ))}
    </div>
  );
}

function Experience() {
  return (
    <section className="experience" id="experiencia" aria-labelledby="experience-title">
      <div className="experience-media">
        <img src={asset("images/pets-clubistas.jpg")} alt="Dois pets com looks temáticos na Pimp My Pet" loading="lazy" />
        <span className="media-badge">Cuidado que dá para ver</span>
      </div>
      <div className="experience-copy">
        <p className="eyebrow eyebrow-light">O jeito Pimp de cuidar</p>
        <h2 id="experience-title">Não é só banho. <em>É o cuidado inteiro.</em></h2>
        <p className="experience-lead">Do primeiro contato à foto final, cada etapa deixa o seu pet limpo, cheiroso e pronto para distribuir charme.</p>
        <ul className="care-list">
          <li><Icon name="heart" /><div><strong>Cuidado com personalidade</strong><p>Cada pet tem seu jeitinho, e o visual final também.</p></div></li>
          <li><Icon name="van" /><div><strong>Praticidade de verdade</strong><p>Com o PimpMóvel, a ida e a volta ficam mais simples.</p></div></li>
          <li><Icon name="spark" /><div><strong>Mimos que completam</strong><p>Cenários, looks e detalhes para registrar o momento.</p></div></li>
        </ul>
        <Button href={whatsapp} variant="blue">Quero agendar</Button>
      </div>
    </section>
  );
}

const services = [
  { icon: "bubbles", tone: "blue", title: "Banho caprichado", text: "Higiene e finalização para o seu pet voltar limpo, cheiroso e pronto para ganhar colo.", href: whatsapp },
  { icon: "scissors", tone: "yellow", title: "Tosa & estilo", text: "Cuidado no visual e acabamento para valorizar toda a personalidade do seu pet.", href: whatsapp },
  { icon: "van", tone: "brown", title: "PimpMóvel", text: "Leva e traz para o cuidado caber com mais facilidade na sua rotina.", href: whatsapp },
  { icon: "paw", tone: "bone", title: "Clube do banho", text: "Uma rotina de cuidados para quem gosta de manter o banho sempre em dia.", href: whatsapp },
  { icon: "heart", tone: "yellow", title: "Loja & mimos", text: "Looks, produtos e pequenos agrados para completar o momento Pimp.", href: instagram },
  { icon: "spark", tone: "blue", title: "Cenários & ações", text: "Datas especiais ganham fotos e produções para guardar uma lembrança divertida.", href: instagram },
];

function Services({ reduced }) {
  return (
    <section className="services section-shell" id="servicos" aria-labelledby="services-title">
      <motion.div className="section-heading" {...reveal(reduced)}>
        <div><p className="eyebrow">Tudo em um só lugar</p><h2 id="services-title">Cuidado completo, <em>visual bem Pimp.</em></h2></div>
        <p>Uma rotina clara de beleza, cuidado e praticidade para quem trata o pet como parte da família.</p>
      </motion.div>
      <div className="service-grid">
        {services.map((service, index) => (
          <motion.article className="service-card" key={service.title} {...reveal(reduced, index * 0.05)} whileHover={reduced ? undefined : { y: -7 }}>
            <div className={`service-icon tone-${service.tone}`}><Icon name={service.icon} /></div>
            <h3>{service.title}</h3>
            <p>{service.text}</p>
            <a className="card-link" href={service.href} target="_blank" rel="noreferrer" aria-label={`Saiba mais sobre ${service.title}`}><Icon name="arrow" /></a>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

const steps = [
  { title: "Você chama", text: "Fale com a equipe pelo WhatsApp e conte o que seu pet precisa.", visual: "chat" },
  { title: "A gente combina", text: "Escolha o melhor momento e consulte a disponibilidade do leva e traz.", visual: "calendar" },
  { title: "Seu pet fica Pimp", text: "Depois do cuidado, é só preparar a câmera e aproveitar todo o charme.", visual: "done" },
];

function StepVisual({ type }) {
  if (type === "chat") return <div className="step-visual chat-visual"><span>Oi, Pimp!</span><span>Quero agendar</span><span>Vamos lá! 🐾</span></div>;
  if (type === "calendar") return <div className="step-visual calendar-visual"><small>AGOSTO</small><strong>26</strong><span>combinado</span></div>;
  return <div className="step-visual done-visual"><Icon name="paw" /><span>Pronto para a foto</span></div>;
}

function Steps({ reduced }) {
  return (
    <section className="steps" aria-labelledby="steps-title">
      <motion.div className="steps-heading section-shell" {...reveal(reduced)}>
        <p className="eyebrow">Simples do começo ao fim</p>
        <h2 id="steps-title">Três passos. <em>Pronto, tá Pimp.</em></h2>
      </motion.div>
      <div className="steps-grid section-shell">
        {steps.map((step, index) => (
          <motion.article className={`step-card step-${index + 1}`} key={step.title} {...reveal(reduced, index * 0.07)}>
            <StepVisual type={step.visual} />
            <small>Passo {index + 1}</small>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

const gallery = [
  { src: asset("images/pets-cenario.jpg"), alt: "Dois pets em produção colorida", label: "Carinho e estilo", className: "gallery-main" },
  { src: asset("images/pets-lacos.jpg"), alt: "Dois pets com laços", label: "Dupla pronta" },
  { src: asset("images/pet-roupinha.jpg"), alt: "Pet branco usando roupa estampada", label: "Look do dia" },
  { src: asset("images/acao-dia-das-maes.jpg"), alt: "Cliente com seu pet em ação especial", label: "Momentos especiais", className: "gallery-wide" },
];

function Gallery({ reduced }) {
  return (
    <section className="gallery section-shell" id="turminha" aria-labelledby="gallery-title">
      <motion.div className="section-heading gallery-heading" {...reveal(reduced)}>
        <div><p className="eyebrow">Direto do nosso Instagram</p><h2 id="gallery-title">A turminha que <em>já ficou Pimp.</em></h2></div>
        <Button href={instagram} variant="outline" icon="instagram">Seguir @pimpmypetoficial</Button>
      </motion.div>
      <div className="photo-grid">
        {gallery.map((photo, index) => (
          <motion.a className={`gallery-item ${photo.className || ""}`} key={photo.src} href={instagram} target="_blank" rel="noreferrer" {...reveal(reduced, index * 0.05)} whileHover={reduced ? undefined : { scale: 0.992 }}>
            <img src={photo.src} alt={photo.alt} loading="lazy" />
            <span>{photo.label}</span>
          </motion.a>
        ))}
      </div>
      <p className="social-proof"><strong>Mais de 3 mil pessoas</strong> acompanham as novidades e a rotina da Pimp My Pet no Instagram.</p>
    </section>
  );
}

function Location({ reduced }) {
  return (
    <section className="location" id="localizacao" aria-labelledby="location-title">
      <div className="location-map" aria-hidden="true">
        <div className="road road-one" /><div className="road road-two" />
        <div className="map-pin"><img src={asset("images/pimp-my-pet-logo.svg")} alt="" /></div>
        <span className="street-name">Av. Armando de Andrade</span>
      </div>
      <motion.div className="location-copy" {...reveal(reduced)}>
        <p className="eyebrow">Esperamos por vocês</p>
        <h2 id="location-title">Vem ficar <em>bem Pimp.</em></h2>
        <address><Icon name="pin" /><div><strong>Av. Armando de Andrade, 322</strong><span>Taboão da Serra, SP</span></div></address>
        <div className="location-actions"><Button href={maps}>Abrir no mapa</Button><a className="text-link" href={whatsapp} target="_blank" rel="noreferrer">Falar com a equipe <Icon name="arrow" /></a></div>
      </motion.div>
    </section>
  );
}

function FinalCta({ reduced }) {
  return (
    <section className="final-cta" aria-labelledby="cta-title">
      <Icon name="paw" className="cta-paw cta-paw-one" /><Icon name="paw" className="cta-paw cta-paw-two" />
      <motion.div {...reveal(reduced)}>
        <img src={asset("images/pimp-my-pet-logo.svg")} alt="Pimp My Pet" />
        <p className="eyebrow eyebrow-centered">Hora de cuidar</p>
        <h2 id="cta-title">Seu pet merece <em>um dia de estrela.</em></h2>
        <Button href={whatsapp} variant="yellow" icon="whatsapp" className="button-large">Agendar agora</Button>
      </motion.div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-brand"><span className="brand-mark"><img src={asset("images/pimp-my-pet-logo.svg")} alt="" /></span><div><strong>Pimp My Pet</strong><p>Banho, tosa e mimos especiais em Taboão da Serra.</p></div></div>
      <div className="footer-links"><a href="#servicos">Serviços</a><a href="#experiencia">Nosso cuidado</a><a href="#turminha">Turminha Pimp</a><a href="#localizacao">Localização</a></div>
      <div className="footer-social"><a href={instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><Icon name="instagram" /></a><a href={whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp"><Icon name="whatsapp" /></a></div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} Pimp My Pet.</span><span>Feito com carinho para pets cheios de personalidade.</span></div>
    </footer>
  );
}

export default function App() {
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 28, mass: 0.28 });

  return (
    <>
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <motion.div className="scroll-progress" style={{ scaleX: progress }} />
      <IconDefs />
      <Header />
      <main id="conteudo">
        <Hero reduced={reduced} />
        <ServiceStrip />
        <Experience />
        <Services reduced={reduced} />
        <Steps reduced={reduced} />
        <Gallery reduced={reduced} />
        <Location reduced={reduced} />
        <FinalCta reduced={reduced} />
      </main>
      <Footer />
      <a className="floating-whatsapp" href={whatsapp} target="_blank" rel="noreferrer" aria-label="Agendar pelo WhatsApp"><Icon name="whatsapp" /><span>Agendar</span></a>
    </>
  );
}
