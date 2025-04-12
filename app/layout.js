import Navbar from './components/navbar';
import What from './components/drawer'
import './globals.css'
import Z from './components/chat'
import Switcher from './components/switcher'
import Menu from './components/menu'

export default function Layout({ children }) {
    return (
        <html>
            <body>
      <div className='rohi'>
        <Menu></Menu>
        <h1>Opal</h1>
        <main>{children}</main>
        <div className='drawer'>
        </div>
        <Z></Z>
        <Switcher></Switcher>
        

      </div>
      </body>
      </html>
    );
  }
  