import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom'
import Home from './pages/Home'
import UserPage from './pages/UserPage'
import NoPage from './pages/NoPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
		<Router>
			<Routes >
				<Route path="/" exact element={<Home />} />
				<Route path="/users" exact element={<UserPage />} />
				<Route path="*" element={<NoPage />} />
			</Routes>
		</Router>     
    </div>
  )
}

export default App


