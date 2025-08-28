import styles from './style.module.scss';
import Link from 'next/link';


export default function index() {
  return (
    <div className={styles.footer}>
        <Link href="https://www.linkedin.com/">LinkedIn</Link>
        <Link href="https://www.instagram.com/">Instagram</Link>
        <Link href="https://facebook.com/">Facebook</Link>
        <Link href="https://www.google.com/business/">Google My Business</Link>
    </div>
  )
}
