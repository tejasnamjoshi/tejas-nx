import './app.scss';

import { Button } from '@tejas/custom-bootstrap';

const App = () => {
  return (
    <div className="App">
      The button displayed below is from the component library
      <Button variant="dark" size="xl">
        Custom Component Library Button
      </Button>
      <Button variant="primary" size="xl">
        Custom Component Library Primary Button
      </Button>
    </div>
  );
};

export default App;
