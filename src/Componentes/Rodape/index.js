import './Rodape.css'

const Rodape = () => {
    return (
        <footer className='footer'>
            <section>
                <ul>
                    <li>
                        <a href='https://www.facebook.com/'>
                            <img src="/imagens/facebook.png" alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.twitter.com/">
                            <img src="/imagens/twitter.png" alt="" />
                        </a>
                    </li>
                    <li>
                        <a href='https://www.instagram.com/'>
                            <img src="/imagens/instagram.png" alt="" />
                        </a>
                    </li>
                </ul>
            </section>
            <section>
                <img src="/imagens/logo.png" alt="" />
            </section>
            <section>
                <p>
                    Desenvolvido por MASF.
                </p>
            </section>
        </footer>
    )
}

export default Rodape