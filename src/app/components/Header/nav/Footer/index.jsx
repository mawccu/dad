//components/Header/nav/Footer/index.jsx
import styles from './style.module.scss';
import Link from 'next/link';


export default function index() {
  return (
    <div className={styles.footer}>
        <Link href="https://www.linkedin.com/" className="hover:underline"> LinkedIn</Link>
        <Link href="https://www.instagram.com/" className="hover:underline"> Instagram</Link>
        <Link href="https://facebook.com/" className="hover:underline"> Facebook</Link>
        <Link href="https://www.google.com/business/" className="hover:underline"> Google My Business</Link>
    </div>
  )
}
