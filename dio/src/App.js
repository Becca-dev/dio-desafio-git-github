import Input from './components/Input';
import Button from './components/Button';

import {Container, Content, Row} from './style';
import {useState} from 'react';

const App = () => {
    const [currerntNumber, setCurrentNumber] = useState('0');

    const handleAddNumber = (number) => setCurrentNumber (prev => `${number}${prev}`);
  return (
      <Container>
        <Content>
          <Input value={currerntNumber}/>
          <Row>
          <Button label ="x" onClick={() => handleAddNumber}/>
          <Button label ="/" onClick={() => handleAddNumber}/>
          <Button label ="c" onClick={() => handleAddNumber}/>
          <Button label ="X" onClick={() => handleAddNumber}/>
        </Row>
        <Row>
          <Button label ="7" onClick={() => handleAddNumber}/>
          <Button label ="8" onClick={() => handleAddNumber}/>
          <Button label ="9" onClick={() => handleAddNumber}/>
          <Button label ="-" onClick={() => handleAddNumber}/>
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber}/>
          <Button label="5" onClick={() => handleAddNumber}/>
          <Button label ="6" onClick={() => handleAddNumber}/>
          <Button label ="+" onClick={() => handleAddNumber}/>
        </Row>
        <Row>
          <Button label ="1" onClick={() => handleAddNumber}/>
          <Button label ="2" onClick={() => handleAddNumber}/>
          <Button label ="3" onClick={() => handleAddNumber}/>
          <Button label ="=" onClick={() => handleAddNumber}/>
        </Row>
        </Content>
      </Container>
    );
}

export default App;
 