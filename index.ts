<<<<<<< HEAD
import { registerRootComponent } from "expo";
import App from "./App";
=======
import { registerRootComponent } from 'expo';
import './global.css'
import App from './App';
>>>>>>> 6122a210144a24568887ebe85de0e61160bd445d

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
