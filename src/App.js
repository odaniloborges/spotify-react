import './config/reset.css';
import './config/vars.css';
import './App.css';
import Sidebar from './Sidebar/sidebar';
import Header from './Header/header';
import Footer from './Footer/footer';
import MainContent from './Main-content/main-content';
import SearchInput from './search-input';


function App() {
  return (
    <body>
      <Sidebar />
      <main>
        <div class="main-container">
          <Header />
          <MainContent />
        </div>
      </main>
      <Footer />
      <SearchInput />
    </body>
  );  
}

export default App;
