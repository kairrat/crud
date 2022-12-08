import {BrowserRouter, Routes,Route} from 'react-router-dom'
import { BooksList } from './booklist'
import { CreateBook } from './createbook'
import { UpdateBook } from './updatebook'
import {Navbar} from './shared/navbar'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/create-book" element={ < CreateBook />}>
        </Route>
        <Route path="/update-book/:id" element={ < UpdateBook />}>
        </Route>
        <Route path="/" element={<BooksList />}>
          
        </Route>
      
      </Routes>
    </>
  );
}

export default App;
