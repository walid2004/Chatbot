import Navbar from './components/navbar';
import What from './components/drawer'
import './globals.css'
import Z from './components/bg2'
import Switcher from './components/switcher'
import Menu from './components/menu'

export default function Layout({ children }) {
    return (
        <html>
            <body>
      <div className='rohi'>
        <Navbar/>
        <main>{children}</main>
        <div className='drawer'>
        <What></What>
        </div>
        <Z></Z>
        <Switcher></Switcher>
        <Menu></Menu>

      </div>
      </body>
      </html>
    );
  }
  