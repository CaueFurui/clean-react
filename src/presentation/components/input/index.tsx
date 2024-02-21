import React, {memo} from 'react'
import styles from './styles.scss'

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer} />
  )
}

// utilizar o memo para evitar re-renderização quando a tela for recarregada
export default memo(Footer)
