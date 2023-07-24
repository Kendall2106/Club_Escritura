import './App.css';
import ProjectsSection from './Containers/Projects/projectsSection';

function App() {
  return (
    <main>
      <header>
      <div className="row">
        <div className="col-md-6">
          <div className="text-bg">
              <span>Cementerio de libros</span>
              <h1>Olvidados</h1>
          </div>
        </div>
        <div className="col-md-6">
          <div className="text_img">
            <img src="/img/frontPage.png" alt="Front Page" />
          </div>
        </div>
      </div>
      </header>
        <ProjectsSection /> 
        <ProjectsSection /> 
    </main>
  );
}

export default App;
