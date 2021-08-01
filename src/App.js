import './App.css';
import bootstrapBundle from './../path to node modules/../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import  Login  from './componentes/auntentificacion/Login';
import Cuenta from './componentes/auntentificacion/Cuenta';
import Contraseña from './componentes/auntentificacion/Contraseña';
import Proyectos from './componentes/proyectos/Proyectos';
import Confirmacion from './componentes/auntentificacion/Confirmacion';



function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/cuenta" component={Cuenta} />
        <Route exact path="/contraseña" component={Contraseña} />
        <Route exact path="/confirmacion" component={Confirmacion} />
        <Route exact path="/proyectos" component={Proyectos} />
      </Switch>
    </Router>
  );
}

export default App;
