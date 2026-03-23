function SemantikHtml() {
  return (
    <>
      <header>
        <a href="#main-content" className="skip-link">
          Ana icerige atla
        </a>
        <nav aria-label="Ana navigasyon">
          <ul>
            <li>
              <a href="#hakkimda">Hakkimda</a>
            </li>
            <li>
              <a href="#projeler">Projeler</a>
            </li>
            <li>
              <a href="#iletisim">Iletisim</a>
            </li>
          </ul>
        </nav>
      </header>

      <main id="main-content">
        <h1>Portfolio Sayfam</h1>
        <section id="hakkimda">
          <h2>Hakkimda</h2>
          <figure>
            <img
              src="/B7E6170F-20AE-41ED-88B5-56981FB3D3AC_4_5005_c.jpeg"
              alt="Mirac Dogan'in fotografi"
            />
            <figcaption>Mirac Dogan</figcaption>
          </figure>
          <p>
            Firat Universitesi yazilim muhendisligi 3.sinif ogrencisiyim Backend
            gelistirme ile ilgileniyorum
          </p>
          <h3>Kullandigim Teknolojilerin Listesi</h3>
          <ul className="skill-tags" role="list" aria-label="Beceri Etiketleri">
            <li>C# / .NET</li>
            <li>PostgreSQL / MSSQL / MYSQL</li>
            <li>Docker</li>
          </ul>
        </section>

        <section id="projeler">
          <h2>Projelerim</h2>
          <div className="project-grid">
            <article className="project-card">
              <h3>Multiplatform Eğitim Sistemi Projesi</h3>
              <p>
                Öğrencilerin rekabet duygusunu ve öğrenme isteğini pekiştiren
                multiplatform aplikasyon
              </p>
              <p>Web Tasarım ve Fonksiyonel Programlama için yapılacak.</p>
              <ul className="skill-tags">
                <li>.NET Core</li>
                <li>SignalR</li>
                <li>Redis</li>
                <li>PostgreSQL</li>
                <li>OpenAI Entegrasyonu</li>
                <li>React</li>
                <li>Tailwind CSS</li>
              </ul>
            </article>

            <article className="project-card">
              <h3>CLens Attendance Management</h3>
              <p>QR katılımlı ve yüz doğrulamalı yoklama alma projesi</p>
              <ul className="skill-tags">
                <li>Flutter</li>
                <li>Firebase</li>
                <li>Antigravity</li>
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
                <small id="name-error" className="error-msg" role="alert">
                  Adınızı ve soyadınızı girmeniz zorunludur.
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="subject">Konu:</label>
                <select
                  id="subject"
                  name="subject"
                  required
                  aria-describedby="subject-error"
                >
                  <option value="">-- Seciniz --</option>
                  <option value="is">Is Teklifi</option>
                  <option value="soru">Soru</option>
                  <option value="oneri">Oneri</option>
                </select>
                <small
                  id="subject-error"
                  className="error-msg"
                  role="alert"
                ></small>
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
                <small id="message-error" className="error-msg" role="alert">
                  Mesajınız en az 10 karakter olmalıdır.
                </small>
              </div>

              <button type="submit">Gönder</button>
            </fieldset>
          </form>
        </section>
      </main>

      <footer>
        <p>&copy; 2026 Mirac Doğan. Tüm haklari saklidir.</p>
        <div className="social-links">
          <p>Beni takip edin:</p>
          <ul>
            <li>
              <a
                href="https://github.com/dgnmirac9"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profilimi ziyaret et."
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/doganmirac"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profilimi ziyaret et."
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
export default SemantikHtml;
