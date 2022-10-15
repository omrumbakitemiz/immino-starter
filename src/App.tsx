import './App.css';
import Accordion from './components/Accordion/Accordion';

function App() {
  return (
    <Accordion title="test">
      <div className="flex justify-center">
      <h1 className="font-bold text-2xl text-blue-900">
        React and Tailwind with Vitejs!
      </h1>
    </div>
    </Accordion>
  );
}

export default App;
