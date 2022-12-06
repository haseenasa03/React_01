//import Message from './Components/Message'
import Navbar from './Navbar/Navbar'
//import Product from './ProductExamp/Productusingfunctioncomp'
import Digital from './Digital/Digital'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
//import Productusingclasscomp from './ProductExamp/Productusingclasscomp'
import Productusingfunctioncomp from './ProductExamp/Productusingfunctioncomp'
let App = () => {
    return <div>
        <Router>
            <Navbar />
            <Switch>
                <Route path="/ProductExamp" component={Productusingfunctioncomp} />
                <Route path="/Digital" component={Digital} />
            </Switch>

        </Router>
    </div>
}
export default App