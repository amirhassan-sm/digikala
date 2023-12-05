"use client"
import { Provider } from "react-redux"
import { Store, persisted } from "./Store"
import { PersistGate } from "redux-persist/integration/react"

const Provided = ({ children }) => {
  return (
    <div>
      <Provider store={Store}>
        <PersistGate persistor={persisted}>
          {children}
        </PersistGate>
      </Provider>

    </div>
  )
}

export default Provided
