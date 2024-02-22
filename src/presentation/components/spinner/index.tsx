import React from 'react'
import styles from './styles.scss'

type Props = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>

const Spinner: React.FC<Props> = (props: Props) => {
  return (
    <div {...props} data-testid='spinner' className={[styles.spinner, props.className].join(' ')}>
      <div /> <div /> <div /> <div />
    </div>
  )
}

export default Spinner
