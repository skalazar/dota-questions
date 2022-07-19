import { CardHero } from './components/CardHero';
import { NumberButton } from './components/NumberButton'
import { Title } from './components/Title'
import { Attribute } from './components/Attribute'
import Box from '@material-ui/core/Box';


function App() {
  return (
    <div className="App">

        <Title text='Wellcome'/>

        <Box className='container-selection'>
        <NumberButton value='10'/>
        <NumberButton value='20'/>
        <NumberButton value='30'/>
        </Box>

        <Box className='container-response'>
          <NumberButton value='radiant'/>
          <NumberButton value='dire'/>
        </Box>

        <CardHero />
        <CardHero />

        <Box className='container-response'>
          <Attribute value='radiant'/>
          <Attribute value='dire'/>
        </Box>

    </div>
  );
}

export default App;
