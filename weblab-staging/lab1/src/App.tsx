import './App.css'

function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Ana icerige atla
      </a>

      <header>
        <nav aria-label="Ana navigasyon">
          <ul>
            <li><a href="#hakkimda">Hakkimda</a></li>
            <li><a href="#projeler">Projeler</a></li>
            <li><a href="#iletisim">Iletisim</a></li>
          </ul>
        </nav>
      </header>

      <main id="main-content">
        <section id="hakkimda">
          <h2>Hakkimda</h2>
          <div className="about-content">
            <figure>
              <img src="/profil.jpg" alt="Muhammed Tarik Menguc'un vesikalik fotografi" />
              <figcaption>Muhammed Tarik Menguc</figcaption>
            </figure>
            <div>
              <p>
                Merhaba, ben Muhammed Tarik Menguc. Web gelistirme, semantik HTML ve
                erisilebilirlik uzerine calismalar yapiyorum.
              </p>
              <ul className="skill-tags" role="list" aria-label="Beceri etiketleri">
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>TypeScript</li>
                <li>Git</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="projeler">
          <h2>Projelerim</h2>
          <div className="project-grid">
            <article className="project-card">
              <img src="/eticaret.jpg" alt="E-ticaret sitesi anasayfa ekran goruntusu" />
              <h3>E-Ticaret Sitesi</h3>
              <p>React ve Node.js kullanilarak gelistirilmis tam kapsamli e-ticaret platformu.</p>
              <ul className="skill-tags">
                <li>React</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>MongoDB</li>
              </ul>
            </article>
            <article className="project-card">
              <img src="/blog.jpg" alt="Blog uygulamasi makale okuma sayfasi ekran goruntusu" />
              <h3>Blog Uygulamasi</h3>
              <p>Kullanicilarin makale yazabildigi ve yorum yapabildigi modern blog uygulamasi.</p>
              <ul className="skill-tags">
                <li>Next.js</li>
                <li>Tailwind CSS</li>
                <li>PostgreSQL</li>
              </ul>
            </article>
          </div>
        </section>

        <section id="iletisim">
          <h2>Iletisim</h2>
          <form action="#" method="POST" noValidate>
            <fieldset>
              <legend>Iletisim Formu</legend>

              <div className="form-group">
                <label htmlFor="name">Ad Soyad:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  minLength={2}
                  aria-describedby="name-error"
                />
                <small id="name-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="email">E-posta:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  aria-describedby="email-error"
                />
                <small id="email-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Konu:</label>
                <select id="subject" name="subject" required aria-describedby="subject-error">
                  <option value="">-- Seciniz --</option>
                  <option value="is">Is Teklifi</option>
                  <option value="soru">Soru</option>
                  <option value="oneri">Oneri</option>
                </select>
                <small id="subject-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="message">Mesajiniz:</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  minLength={10}
                  aria-describedby="message-error"
                ></textarea>
                <small id="message-error" className="error-msg" role="alert"></small>
              </div>

              <button type="submit">Gonder</button>
            </fieldset>
          </form>
        </section>
      </main>

      <footer>
        <p>&copy; 2026 Muhammed Tarik Menguc. Tum haklari saklidir.</p>
        <nav aria-label="Sosyal Medya">
          <ul>
            <li><a href="https://github.com/tarikmenguc/weblab">GitHub</a></li>
            <li><a href="https://linkedin.com">LinkedIn</a></li>
          </ul>
        </nav>
      </footer>
    </>
  )
}

export default App