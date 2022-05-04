
import './App.css';

import CakeContainer from './components/CakeContainer';
import {Provider} from 'react-redux'
import store from './redux/store';
import HooksCakeContainer from './components/HooksCakeContainer';
import HooksIceCreamContainer from './components/HooksIceCreamContainer';
import NewCakeContainer from './components/NewCakeContainer';
import ItemContainer from './components/ItemContainer';

function App() {
  
  return (
    <Provider store={store}>
      <div className="App">
      
     <CakeContainer/>
     <HooksCakeContainer/>
     <HooksIceCreamContainer/>
     <NewCakeContainer/>
     <ItemContainer cake/>
     <ItemContainer />
    </div>
    </Provider>
  );
}

export default App;
