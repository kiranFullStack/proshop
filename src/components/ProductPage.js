import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from 'react-router-dom'

export default function ProductPage({ match }) {
  const product = match.params.id
  return (
    <section>
      <h1>ProductPage</h1>
      <h1>{product}</h1>
    </section>
  )
}
