import Image from 'next/image';
import styles from "./login.module.css";
import Link from 'next/link';

export default function login(){
  return(
    <>
      <div className={styles.loginContainer}>
        <div className={styles.logoContainer}>
          <Image src="/vito-logo.png" width={400} height={400} alt='Logo of vito Stationary Shop'/>
        </div>
        <div className={styles.inputsContainer}>
          <h2>Iniciar sesión</h2>
          <form action="" method="get">
            <label htmlFor="">Usuario:</label>
            <input type="text" name='' id=''/>
            <label htmlFor="">Contraseña:</label>
            <input type="text" name="" id="" />
          </form>
          <div className={styles.buttonContainer}>
            <button>Iniciar sesion</button>
            <Link href="/account/forgotPassword">Olvidaste tu contraseña?</Link>
            <Link href="/account/register">Aún no tienes cuenta?</Link>
          </div>
        </div>
      </div>
    </>
  )
}
