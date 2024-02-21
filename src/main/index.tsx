import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from '@/presentation/components'
import '@/presentation/styles/global.scss'

// eslint-disable-next-line react/no-deprecated
ReactDOM.render(
  <Router />,
  document.getElementById('main')
)
