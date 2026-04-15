import Cabecalho from "./components/Cabecalho";
import Produtos from "./components/Produtos";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.pageContainer}>
      
      {/* O Cabeçalho Antigo pode continuar caso deseje */}
      <Cabecalho />

      {/* ===== HERO SECTION ===== */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <span className={styles.heroBadge}>Lançamento Exclusivo</span>
          <h1 className={styles.heroTitle}>O Produto Definitivo para Mudar Sua Rotina</h1>
          <p className={styles.heroDesc}>
            Chega de soluções pela metade. Construímos uma experiência completa e profissional para te dar performance, segurança e resultados reais. 
          </p>
          <div className={styles.heroButtons}>
            <a href="#produtos" className={styles.btnPrimary}>
              Ver Ofertas <i className="bi bi-cart2 ms-2"></i>
            </a>
            <a href="#beneficios" className={styles.btnOutline}>
              Saiba Mais
            </a>
          </div>
        </div>
      </section>

      {/* ===== BENEFÍCIOS ===== */}
      <section id="beneficios" className={styles.benefitsSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Por que nós?</h2>
          <p className={styles.sectionSubtitle}>Tudo que você precisa reunido em uma única plataforma, desenvolvida com o que há de mais moderno.</p>
        </div>
        
        <div className={styles.benefitsGrid}>
          <div className={styles.benefitCard}>
            <div className={styles.benefitIcon}>
              <i className="bi bi-rocket-takeoff"></i>
            </div>
            <h4 className={styles.benefitTitle}>Alta Velocidade</h4>
            <p className={styles.benefitText}>Otimizado para carregar de forma instantânea. Economize tempo onde mais importa.</p>
          </div>
          
          <div className={`${styles.benefitCard} ${styles.cardPrimary}`}>
            <div className={styles.benefitIcon}>
              <i className="bi bi-shield-check"></i>
            </div>
            <h4 className={styles.benefitTitle}>Segurança Total</h4>
            <p className={styles.benefitText}>Proteção de ponta a ponta. Fique tranquilo sabendo que tudo está blindado.</p>
          </div>
          
          <div className={styles.benefitCard}>
            <div className={styles.benefitIcon}>
              <i className="bi bi-star-fill"></i>
            </div>
            <h4 className={styles.benefitTitle}>Qualidade Premium</h4>
            <p className={styles.benefitText}>Acabamento impecável e suporte dedicado sempre que você precisar de ajuda.</p>
          </div>
        </div>
      </section>

      {/* ===== PROVA SOCIAL (Brands) ===== */}
      <section className={styles.brandsSection}>
        <div className={styles.brandsContainer}>
          <p className={styles.brandsTitle}>Empresas que confiam em nós</p>
          <div className={styles.brandsFlex}>
             <i className={`bi bi-microsoft ${styles.brandIcon}`}></i>
             <i className={`bi bi-google ${styles.brandIcon}`}></i>
             <i className={`bi bi-stripe ${styles.brandIcon}`}></i>
             <i className={`bi bi-spotify ${styles.brandIcon}`}></i>
             <i className={`bi bi-amazon ${styles.brandIcon}`}></i>
          </div>
        </div>
      </section>

      {/* ===== PRODUTOS / OFERTAS ===== */}
      <section id="produtos" className={styles.productsSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Nossos Produtos</h2>
          <p className={styles.sectionSubtitle}>Conheça nossa seleção de itens desenhados especialmente para elevar o seu padrão.</p>
        </div>
        <div className={styles.productsContainer}>
          <Produtos />
        </div>
      </section>

      {/* ===== CALL TO ACTION FINAL ===== */}
      <section className={styles.ctaSection}>
        <h2 className={styles.ctaTitle}>Pronto para dar o próximo passo?</h2>
        <p className={styles.ctaDesc}>Junte-se a milhares de pessoas que já transformaram seus resultados.</p>
        <button className={styles.btnPrimary} style={{ color: '#4a1d96' }}>
          Comece Agora Mesmo
        </button>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.footerGrid}>
            <div className={styles.footerInfo}>
              <h5 className={styles.footerTitle}>OlaMundo Store</h5>
              <p>Transformando o futuro com linhas de código bem projetadas. Todos os direitos reservados.</p>
            </div>
            <div className={styles.socialLinks}>
              <a href="#"><i className="bi bi-instagram"></i></a>
              <a href="#"><i className="bi bi-twitter-x"></i></a>
              <a href="#"><i className="bi bi-linkedin"></i></a>
            </div>
          </div>
          <div className={styles.footerDivider}></div>
          <div className={styles.footerBottom}>
            &copy; {new Date().getFullYear()} OlaMundo. Design 100% Responsivo e Exclusivo.
          </div>
        </div>
      </footer>
    </div>
  );
}
