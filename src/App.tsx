import './App.css';

import * as React from 'react';

import firebase from './fire';
import HalfPieChartView from './HalfPieChartView';
import LineChartView from './LineChartView';
import MapView from './MapView';

export interface IAppState {
  StateMessstation: {
    readonly Msw_PM_10: number,
    readonly Msw_Nox: number,
    readonly Latitude: number,
    readonly Longitude: number,
    readonly Standort: String
  }
}
}
export interface IAppProps {}

//class App extends Component {
class App extends React.Component<IAppProps, IAppState>{

  constructor(probs: any) {
    super(probs);

    this.state = {
      StateMessstation: {
        Msw_PM_10: 2,
        Msw_Nox: 0,
        Latitude: 6.652006,
        Longitude: 51.839823,
        Standort: "WHS_Bocholt"
      }
    };

  }

  async componentDidMount() {
    //allow your app to sign in anonomously
    //firebase.auth().signInAnonymously().then(function () {
    firebase.auth().signInWithEmailAndPassword('sascha.pangritz@studmail.w-hs.de', 'YP88db?_102').then(function () {
      console.log('OK Login');
    }
    ).catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log('Failed Login: ' + errorMessage);
    });

    //Get the Messstation List table of firebase 
    const db = firebase.firestore()
    // Attach an asynchronous callback to read the data at our posts reference
    //const Messstation1 = await db.collection("Messstation1").get()
    //const decodedData = Messstation1.docs.map((value) => {
    //  return value.data()
    //})
    //this.setState({ StateMessstation: decodedData });


    const Messstation1 = await db.collection("Messstation1").get()
    const decodedData = Messstation1.docs.map((value) => {
      return value.data()
    })
    this.setState({ StateMessstation: decodedData });

    //console.log(this.state.StateMessstation[0].get());
    //this.state.StateMessstation[0].Msw_PM_10
  }
  componentWillMount() { }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Messstation Status
          </p>
        </header>
        <div className="table-headers">
          <div className="flex-basis-10">
            <p>
              Sidemenu
              </p>
          </div>
          <div className="flex-basis-30">
            <MapView />
          </div>
          <div className="flex-basis-5" />
          <div className="flex-basis-30">
            <div className="first"> <HalfPieChartView AktuelleMessung={this.state.StateMessstation.Msw_PM_10} /> </div>
            <div className="second"><HalfPieChartView AktuelleMessung={12} /> </div>
            <div><LineChartView /> </div>
          </div>
        </div>

        <footer className="App-footer">
          <p />
        </footer>
      </div>
    );
  }
}
export default App;
