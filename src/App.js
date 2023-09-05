import IntlWrapper from "./i18n/intlWrapper";

import { ModeProvider } from "./context/ModeContext";
import { UsersProvider } from "./context/rbac/UsersContext";
import { AbilityContext } from "./context/rbac/Can";
import ability from "./context/rbac/defineAbility";

import UI from "./components/ui/UI";

import "./App.scss";

const App = () => {
  return (
    <IntlWrapper>
      <AbilityContext.Provider value={ability}>
        <UsersProvider>
          <ModeProvider>
            <div className="App">
              <UI />
            </div>
          </ModeProvider>
        </UsersProvider>
      </AbilityContext.Provider>
    </IntlWrapper>
  );
};

export default App;
