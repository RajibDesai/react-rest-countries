import './App.css';
import Countries from './componentes/Countries/Countries';

function App() {
  return (
    <div className="App">
      <Countries></Countries>
    </div>
  );
}


/* function LoadCountries() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountries(data))
  }, [])
  return (
    <div>
      <h1>Visting Every Country Of The World</h1>
      <h2>Avail Avail countries:{countries.length}</h2>
      {
        countries.map(country => <Country name={country.name.common} population={country.population}></Country>)
      }
    </div>
  )

}

function Country(props) {
  return (
    <div>
      <h3>{props.name}</h3>
      <h4>Population: {props.population}</h4>
    </div>
  )
} */

export default App;
