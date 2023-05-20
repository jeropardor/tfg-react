import IntlWrapper from "./i18n/intlWrapper";
import { ModeProvider } from "./context/ModeContext";

import UI from "./components/ui/UI";

import "./App.scss";

const App = () => {
  return (
    <IntlWrapper>
      <ModeProvider>
        <div className="App">
          <UI />
        </div>
      </ModeProvider>
    </IntlWrapper>
  );
};

export default App;
