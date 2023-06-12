import Image from 'next/image';
import styles from "./register.module.css";
import Link from 'next/link';

export default function register(){
  return(
    <>
      <div className={styles.loginContainer}>
        <div className={styles.logoContainer}>
          <Image src="/vito-logo.png" width={400} height={400} alt='Logo of vito Stationary Shop'/>
        </div>
        <div className={styles.inputsContainer}>
          <h2>Registrarse</h2>
          <form action="" method="post">
            <label htmlFor="">Nombre:</label>
            <input placeholder='Nombre' type="text" name='nombre' id=''/>
            <label htmlFor="">Apellido:</label>
            <input placeholder='Apellido' type="text" name='apellido' id=''/>
            <label htmlFor="">Correo:</label>
            <input placeholder='email' type="text" name='correo' id=''/>
            <label htmlFor="">Contraseña:</label>
            <input placeholder='Contraseña' type="password" name='constraseña' id=''/>
            <label htmlFor="">Teléfono:</label>
            <input placeholder='Teléfono' type="text" name="telefono" id="" />
          </form>
          <div className={styles.buttonContainer}>
            <button>Registrarse</button>
            <Link href="/account/login">Ya tienes cuenta?</Link>
          </div>
        </div>
      </div>
    </>
  )
}
