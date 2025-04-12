import Link from 'next/link'
//import '../../styles/navbar.css'
export default function Navbar(){
    return(
        <div className='navbar'>
            <ul>
                <li><Link href={'/'}>Home</Link></li>
                <li><Link href={'/about'}>About</Link></li>
                <li><Link href={'/contact'}>Contact</Link></li>
                <li><Link href={'/documentation'}>Documentation</Link></li>
            </ul>
        </div>
    )
}