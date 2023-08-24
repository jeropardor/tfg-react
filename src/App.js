import IntlWrapper from "./i18n/intlWrapper";
import { ModeProvider } from "./context/ModeContext";

import UI from "./components/ui/UI";

import "./App.scss";
import { UsersProvider } from "./context/UsersContext";

const App = () => {
  return (
    <IntlWrapper>
      <UsersProvider>
        <ModeProvider>
          <div className="App">
            <UI />
          </div>
        </ModeProvider>
      </UsersProvider>
    </IntlWrapper>
  );
};

export default App;
