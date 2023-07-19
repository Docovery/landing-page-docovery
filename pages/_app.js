import "./../styles/globals.css"
import './../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import './../node_modules/bootstrap/dist/css/bootstrap.css'
import "./../styles/navbar.css"
import "./../styles/homepage.css"
import "./../styles/footer.css"
import "./../styles/about.css"
import "./../styles/services.css"

export default function MyApp({ Component, pageProps }) {
  return (
    <Component {...pageProps} />
  )
}
