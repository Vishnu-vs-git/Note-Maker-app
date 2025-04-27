import React from 'react'
import AddNote from './Pages/AddNote'
import EditNote from './Pages/EditNote'
import ViewNotes from './Pages/ViewNotes'
import { BrowserRouter as Router , Route, Routes,Navigate } from 'react-router-dom'
import Header from './components/Header'


const App = () => {
  return (
    

     <Router>
      <Header/>
      <Routes>
          <Route path="/" element={<Navigate to ="/view-note"/>}/>
          <Route path="/add-note" element={<AddNote/>}/>
          <Route path="/Edit-note/:id" element={<EditNote/>}/>
          <Route path="/view-note" element={<ViewNotes/>}/>
      </Routes>
     </Router>



  )



}

export default App
