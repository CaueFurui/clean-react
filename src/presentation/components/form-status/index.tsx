import React, { useContext } from 'react'
import styles from './styles.scss'
import Spinner from '@/presentation/components/spinner'
import Context from '@/presentation/contexts/form'

const FormStatus: React.FC = () => {
  const { state } = useContext(Context)
  const { isLoading, mainError } = state

  return (
    <div data-testid='error-wrap' className={styles.errorWrap}>
      {isLoading && <Spinner className={styles.spinner} />}
      {mainError && <span data-testid='main-error' className={styles.error}>{mainError}</span>}
    </div>
  )
}

export default FormStatus
