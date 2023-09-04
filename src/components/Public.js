import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to <span className="nowrap">Divyansh Khari Repairs Inc.!</span></h1>
            </header>
            <main className="public__main">
                <p>Located in Beautiful Maple Ridge City, Divyansh Khari Repairs  provides a trained staff ready to meet your tech repair needs.</p>
                <address className="public__addr">
                    12030, 220 Street<br />
                    Maple Ridge<br />
                    V2X 5R5, BC , Canada<br />
                    <a href="tel:+15555555555">(236) 868-3504</a>
                </address>
                <br />
                <p>Owner: Divyansh Khari</p>
            </main>
            <footer>
                <Link to="/login">Employee Login</Link>
            </footer>
        </section>

    )
    return content
}
export default Public