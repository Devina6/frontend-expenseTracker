import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import AddExpenseForm from './components/addExpenseForm';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Expense Tracker Project</h1>
      </header>
      <div className='content'>
        <aside>
          
        </aside>
        <main>
          <AddExpenseForm />
        </main>
      </div>
      <footer>
        
      </footer>
    </div>
  );
}

export default App;
