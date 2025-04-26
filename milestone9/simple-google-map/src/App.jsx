import { Map } from '@vis.gl/react-google-maps';
import './App.css';

function App() {
  return (
    <>
      <h1>Simple Google Map</h1>
      <Map
        style={{ width: '100vw', height: '100vh' }}
        defaultCenter={{ lat: 23.810331, lng: 90.412521 }}
        defaultZoom={3}
        gestureHandling="greedy"
        disableDefaultUI={true}
      />
    </>
  );
}

export default App;
