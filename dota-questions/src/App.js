import { CardHero } from './components/CardHero';
import { NumberButton } from './components/NumberButton'
import { Title } from './components/Title'

function App() {
  return (
    <div className="App">

        <Title text='Wellcome'/>
        <div className='container-selection'>
        <NumberButton value='10'/>
        <NumberButton value='20'/>
        <NumberButton value='30'/>
        </div>

        <div className='container-response'>
          <NumberButton value='radiant'/>
          <NumberButton value='dire'/>
        </div>

        <CardHero />
        <CardHero />
    </div>
  );
}

export default App;
