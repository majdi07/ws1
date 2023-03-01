import logo from './logo.svg';
import './App.css';
import FullName from './componet/profile/FullName';
import Address from './componet/profile/Address';
import ProfilePhoto from './componet/profile/ProfilePhoto';


function App() {
  return (
    <div className="App">
  <FullName/>
  <Address/>
  <ProfilePhoto/>
    </div>
  );
}

export default App;
