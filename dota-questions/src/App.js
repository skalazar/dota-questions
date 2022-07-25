import { CardHero } from './components/CardHero';
import { NumberButton } from './components/NumberButton'
import { Title } from './components/Title'
import { Attribute } from './components/Attribute'
import Box from '@material-ui/core/Box';


function App() {

  function selectRandomHeros() {
    const totalHeros = 123;
    //let randomHero = () => Math.floor(Math.random()*totalHeros);
    const firstHero = Math.floor(Math.random() * totalHeros);
    let secondHero = (first, second) => first === second ? secondHero(first, Math.floor(Math.random() * totalHeros)) : second;
    console.log(firstHero, secondHero(firstHero, Math.floor(Math.random() * totalHeros)))
    return [firstHero, secondHero(firstHero, Math.floor(Math.random() * totalHeros))];
  }

  return (
    <div className="App">

      <Title text='Wellcome' />

      <Box className='container-selection'>
        <NumberButton value='10' />
        <NumberButton value='20' />
        <NumberButton value='30' />
      </Box>

      <Box className='container-response'>
        <NumberButton value='radiant' />
        <NumberButton value='dire' />
      </Box>

      <CardHero />
      <CardHero />

      <Box className='container-response'>
        <Attribute value='radiant' />
        <Attribute value='dire' />
      </Box>

    </div>
  );
}

export default App;
