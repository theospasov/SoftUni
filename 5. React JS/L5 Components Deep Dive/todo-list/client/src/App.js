import Footer from "./components/Footer";
import Header from "./components/Header";
import Loading from "./components/Loading";
import Table from "./components/Table";

function App() {
  return (
    <div>

  <Header/>

    <main className="main">
  

      <section className="todo-list-container">
        <h1>Todo List</h1>
  
        <div className="add-btn-container">
          <button className="btn">+ Add new Todo</button>
        </div>
  
        <div className="table-wrapper">
  

        {/* <Loading/> */}
  

        <Table/>
        </div>
      </section>
    </main>
  
    
   <Footer/>
    </div>
  );
}

export default App;
