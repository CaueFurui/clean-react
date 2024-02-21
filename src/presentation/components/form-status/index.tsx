import React from 'react'
import styles from './styles.scss'
import Spinner from '@/presentation/components/spinner'

const FormStatus: React.FC = () => {
  return (
    <div className={styles.errorWrap}>
      <Spinner className={styles.spinner} />
      <span className={styles.error}>
        Erro
      </span>
    </div>
  )
}

export default FormStatus
