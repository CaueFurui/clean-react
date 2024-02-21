import React from 'react'
import styles from './styles.scss'
import Spinner from '@/presentation/components/spinner'
import Header from '@/presentation/components/login-header/'
import Footer from '@/presentation/components/footer/'
import Input from '@/presentation/components/input'

const Login: React.FC = () => {
  return (
    <div className={styles.login}>
      <Header />
      <form className={styles.form}>
        <h2>Login</h2>
        <Input type="email" name="email" placeholder='Digite seu e-mail' />
        <Input type="password" name="password" placeholder='Digite sua senha' />
        <button className={styles.submit} type="submit">Entrar</button>
        <span className={styles.link}>Criar conta</span>
        <div className={styles.errorWrap}>
          <Spinner className={styles.spinner} />
          <span className={styles.error}>
            Erro
          </span>
        </div>
      </form>
      <Footer />
    </div>
  )
}
export default Login
