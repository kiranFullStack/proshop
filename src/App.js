import React from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Dashboard from './components/Dashboard'
import ProductPage from './components/ProductPage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import products from './components/products'

function App() {
  console.log(products, '<------This is the data😊😊😊😊😊😊😊😊😊😊😊😊')
  return (
    <div className='App'>
      <Router>
        <Header />
        <main>
          <Switch>
            <Route path='/' component={Dashboard} exact />
            <Route path='/product/:id' component={ProductPage} />
          </Switch>
        </main>
        <Footer />
      </Router>
    </div>
  )
}

export default App
