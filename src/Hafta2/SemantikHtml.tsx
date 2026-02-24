
function SemantikHtml(){
    return(
        <>
        <header>
            <a href ="#main-content" className="skip-link">
                Ana icerige atla
            </a>
            <nav aria-label="Ana navigasyon">
                <ul>
                    <li><a href="#hakkimda">Hakkimda</a></li>
                    <li><a href="#projeler">Projeler</a></li>
                    <li><a href="#iletisim">Iletisim</a></li>
                </ul>
            </nav>
        </header>

        <main id = "main-content">
            <h1>Portfolio Sayfam</h1>
            <section id = "hakkimda">
                <h2>Hakkimda</h2>
                <figure>
                    <img src="/B7E6170F-20AE-41ED-88B5-56981FB3D3AC_4_5005_c.jpeg"
                         alt="Mirac Dogan'in fotografi" />
                    <figcaption>Mirac Dogan</figcaption>
                </figure>
            </section>
            
            <section id = "projeler">
                <h2>Projelerim</h2>
                
            </section>

            <section id = "iletisim">
                <h2>Iletisim</h2>
                <form action = "#" method = "POST" noValidate>
                    <fieldset>
                        <legend>Iletisim Formu</legend>

                        <div className = "form-group">
                            <label htmlFor= "name">Ad Soyad:</label>
                            <input type="text" id="name" name="name"
                                   required minLength={2}
                                   aria-describedby="name-error" />
                            <small id="name-error" className="error-msg"
                                   role="alert"></small> 
                        </div>
                        <div className ="form-group">
                            <label htmlFor="subject">Konu:</label>
                            <select id="subject" name="subject" required
                                    aria-describedby="subject-error">
                                <option value="">-- Seciniz --</option>
                                <option value="is">Is Teklifi</option>
                                <option value="soru">Soru</option>
                                <option value="oneri">Oneri</option>
                            </select>
                            <small id="subject-error" className="error-msg"
                                   role="alert"></small> 
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Mesajiniz:</label>
                            <textarea id="message" name="message"
                                      rows={5} required minLength={10}
                                      aria-describedby="message-error">
                            </textarea>
                            <small id="message-error" className="error-msg"
                                   role="alert"></small> 
                        </div>

                        <button type="submit">Gonder</button>
                    </fieldset>
                </form>
            </section>
        </main>

        <footer>
            <p>&copy; 2026 Mirac Doğan. Tüm haklari saklidir.</p>
        </footer>
        </>
        
    )
}
export default SemantikHtml;
