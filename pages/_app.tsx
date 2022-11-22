import '../styles/globals.css'
import type { AppProps } from 'next/app'
import NavBar from '../components/navbar'
import Footer from '../components/footer'
import Sidebar from '../components/sidebar'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavBar/>
      {/* <Sidebar siapa={"Mahasiswa"}/> */}
      {/* <Sidebar siapa={"Dosen"}/> */}
      <Sidebar siapa={"Admin"}/>
      <Component {...pageProps} />
      <Footer/>
    </>
  )
}
