import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactsList from './components/ContactsList/ContactsList';

function App() {

  return (
    <div >
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactsList />
    </div>
  );
}

export default App;
