import './App.css';
import ProjectsSection from './Containers/Projects/projectsSection';

function App() {
  return (
    <main>
      <header>
      <div class="row">
        <div class="col-md-6">
          <div class="text-bg">
              <span>Cementerio de libros</span>
              <h1>Olvidados</h1>
          </div>
        </div>
        <div class="col-md-6">
          <div class="text_img">
            <img src="/img/frontPage.png" alt="Front Page" />
          </div>
        </div>
      </div>
      </header>
      <body>
        <ProjectsSection />
      </body>
    </main>
  );
}

export default App;
