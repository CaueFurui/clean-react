import React, { useContext } from 'react'
import styles from './styles.scss'
import Spinner from '@/presentation/components/spinner'
import Context from '@/presentation/contexts/form'

const FormStatus: React.FC = () => {
  const { isLoading, errorMessage } = useContext(Context)

  return (
    <div data-testid='error-wrap' className={styles.errorWrap}>
      {isLoading && <Spinner className={styles.spinner} />}
      {errorMessage && <span className={styles.error}>{errorMessage}</span>}
    </div>
  )
}

export default FormStatus
