import React, { useEffect, useState } from "react";
import StoreContext from "./store/main";
import Exchange from "./contex-api/Exchange";
import axios from "axios";

const App = () => {

  const [currencies, setCurrencies] = useState({});

  const loadData = async () => {
    try {
      const response = await axios.get(
        "https://api.frankfurter.app/latest?from=TRY");
      const data=response.data.rates;
      setCurrencies(data);
      console.log(data)
    } catch (error) {
      console.log(error);
    }
  };
useEffect(() => {
 loadData()
}, [])


  return (
    <StoreContext.Provider value={{  currencies }}>
      <div>
        <Exchange />
      </div>
    </StoreContext.Provider>
  );
};

export default App;
