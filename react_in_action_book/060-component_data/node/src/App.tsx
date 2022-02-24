import './App.css';

import { RCSecret } from "./components/rcsecret/rcsecret";

import { RCCounter} from "./components/rccounter/rccounter";

import { RCHelloWorld } from "./components/rchelloworld/rchelloworld";

import { RCParentComponent }
  from "./components/parentchilddatatransfer/rcparentcomponent/rcparentcomponent";

function App() {
  return (
    <div>
      <RCHelloWorld name="Malkab" />
      <RCSecret mask="A secret inside!" secret="What a secret!" />
      <RCCounter modifyBy={10} initialValue={0}
        thresholdTop={50} thresholdBottom={-50} />
      <br /><br />
      <RCParentComponent name="Malkab" age={45} />
    </div>
  );
}

export default App;
