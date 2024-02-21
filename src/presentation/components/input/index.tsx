import React, { useContext } from 'react'
import styles from './styles.scss'
import Context from '@/presentation/contexts/form'

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const Input: React.FC<Props> = (props: Props) => {
  const { errorState } = useContext(Context)

  const error = errorState[props.name]

  const enableInput = (event: React.FocusEvent<HTMLInputElement>): void => {
    event.target.readOnly = false
  }

  const getTitle = (): string => {
    return error
  }

  const getStatus = (): string => {
    return '🔴'
  }

  return (
    <div className={styles.inputWrap}>
      <input {...props} readOnly onFocus={enableInput} />
      <span data-testid={`${props.name}-status`} title={getTitle()} className={styles.status}>{getStatus()}</span>
    </div>
  )
}

export default Input
