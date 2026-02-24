
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

            </section>
        </main>

        <footer>
            <p>&copy; 2026 Mirac Doğan. Tüm haklari saklidir.</p>
        </footer>
        </>
        
    )
}
export default SemantikHtml;
