import Header from "./Header"
import Footer from "./Footer"

export default function Layout({ children }) {
  return (
    <div className="flex flex-col bg-violet bg-blend-normal md:h-screen">
      <div className="flex flex-col justify-between h-full px-10 bg-cover bg-mobile md:bg-desktop">
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  )
}
