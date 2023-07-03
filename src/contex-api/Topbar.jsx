import React, { useContext } from 'react'
import "./topbar.scss"
import StoreContext from '../store/main'

const Topbar = () => {
const store=useContext(StoreContext)

const {currencies}=store

const formatCurrency = (val) => {
  return (1/val).toFixed(2)
  // return (1/currencies[val]).toFixed(2)
}

/* alert(currencies.JPY)
alert(currencies["JPY"]) */


  return (
    <header>
      <nav>
        <h3>Exchange</h3>
        <div>
          <span>$: {formatCurrency(currencies.USD)}₺</span>
          <span>€: {formatCurrency(currencies.EUR)}₺</span>
          <span>C$ : {formatCurrency(currencies.CAD)}₺</span>
        </div>
      </nav>
    </header>
  )
}

export default Topbar