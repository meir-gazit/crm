import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom'
import Home from './pages/Home'
import UserListPage from './pages/UserListPage'
import UserDetailsPage from './pages/UserDetailsPage'
import UpdateUserPage from './pages/UpdateUserPage'
import CreateUser from './components/CreateUser'
import NoPage from './pages/NoPage'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
		<Router>
			<Routes >
				<Route path="/" exact element={<Home />} />
				<Route path="/users" exact element={<UserListPage />} />
				<Route path="/users/create"  exact element={<CreateUser />} />
				<Route path="/users/:number" element={<UserDetailsPage />} />
				<Route path="/users/:number/update"  element={<UpdateUserPage />} />
				<Route path="*" element={<NoPage />} />				
			</Routes>
		</Router>     
    </>
  )
}

export default App


