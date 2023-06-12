import Image from 'next/image';
import styles from "./forgotPassword.module.css";
import Link from 'next/link';

export default function login(){
  return(
    <>
      <div className={styles.loginContainer}>
        <div className={styles.logoContainer}>
          <Image src="/vito-logo.png" width={400} height={400} alt='Logo of vito Stationary Shop'/>
        </div>
        <div className={styles.inputsContainer}>
          <h2>Recuperar Contraseña</h2>
          <form action="" method="get">
            <label htmlFor="">Correo Electronico:</label>
            <input placeholder='Correo' type="text" name='' id=''/>
          </form>
          <div className={styles.buttonContainer}>
            <button>Enviar</button>
            <Link href="/account/login">Iniciar sesión</Link>
            <Link href="/account/register">Aún no tienes cuenta?</Link>
          </div>
        </div>
      </div>
    </>
  )
}
