import React, { Component } from 'react';
import Home from './components/home/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2 className="underline"> sass is fun </h2>
        <br/>
        <p>
        Atqui haec patefactio quasi rerum opertarum, cum quid quidque sit aperitur, definitio est. qua tu etiam inprudens utebare non numquam. nam hunc ipsum sive finem sive extremum sive ultimum definiebas id esse, quo omnia, quae recte fierent, referrentur neque id ipsum usquam referretur. praeclare hoc quidem. bonum ipsum etiam quid esset, fortasse, si opus fuisset, definisses aut quod esset natura adpetendum aut quod prodesset aut quod iuvaret aut quod liberet modo. nunc idem, nisi molestum est, quoniam tibi non omnino displicet definire et id facis, cum vis, velim definias quid sit voluptas, de quo omnis haec quaestio est.
        </p>
        <Home/>
      </div>
    );
  }
}

export default App;
