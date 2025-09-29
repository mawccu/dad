//components/Header/nav/Footer/index.jsx
import styles from './style.module.scss';
import Link from 'next/link';


export default function index() {
  return (
    <div className={styles.footer}>
        <Link 
          href="https://www.linkedin.com/in/rami-s-hamad-09821a59/" 
          className="hover:underline" 
          rel="noopener noreferrer" 
          target="_blank"
        > LinkedIn</Link>
        <Link 
          href="https://www.instagram.com/newlook_jo/?next=%2Fdirect%2Ft%2F117471066306121%2F" 
          className="hover:underline" 
          rel="noopener noreferrer" 
          target="_blank"
        > Instagram</Link>
        <Link 
          href="https://www.facebook.com/profile.php?id=100064126295491" 
          className="hover:underline" 
          rel="noopener noreferrer" 
          target="_blank"
        > Facebook</Link>
        <Link     
          href="https://g.page/r/CX_a_Y1-8YsvEBM" 
          className="hover:underline" 
          rel="noopener noreferrer" 
          target="_blank"
        > Google My Business</Link>
    </div>
  )
}
