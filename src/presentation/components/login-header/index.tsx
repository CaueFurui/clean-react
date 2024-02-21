import React, {memo} from 'react'
import styles from './styles.scss'
import Logo from '@/presentation/components/logo'

const LoginHeader: React.FC = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <h1>4Dev - Enquete para programadores</h1>
    </header>
  )
}

// utilizar o memo para evitar re-renderização quando a tela for recarregada
export default memo(LoginHeader)
