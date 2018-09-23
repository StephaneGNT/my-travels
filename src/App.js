import React, {Component} from 'react';
import Travel from "./Travel";

class App extends Component {
  render() {
    return(
      <div>
          <Travel 
          destination="Perito Moreno"
          country="Argentine"
          image="https://images.salaun-holidays.com/(Image)-image-Argentine-Perito-Moreno-glagier-vue-panoramique-531-fo_91066032-09032017.jpg"
          character="Photo du Perito Moreno"
          distance="12 989 km (environ)"
        />

        <Travel 
          destination="Bryce Canyon"
          country="USA"
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/USA_10654_Bryce_Canyon_Luca_Galuzzi_2007.jpg/800px-USA_10654_Bryce_Canyon_Luca_Galuzzi_2007.jpg"
          character="Photo de Bryce Canyon"
          distance="8 819 km (environ aussi)"
        />
      </div>
      );
  }
}

export default App;
