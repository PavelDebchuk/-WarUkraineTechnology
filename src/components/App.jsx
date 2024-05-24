import Footer from './Footer';
import Header from './Header';
import HomePage from './Page/HomePage/HomePage';

export const App = () => {
  return (
    <div>
      <Header />
      {!HomePage && <HomePage />}
      <Footer />
    </div>
  );
};

export default App;
