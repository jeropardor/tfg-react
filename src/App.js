import IntlWrapper from "./i18n/intlWrapper";

import UI from "./components/ui/ui";

import "./App.scss";

const App = () => {
  return (
    <IntlWrapper>
      <div className="App">
        <UI />
      </div>
    </IntlWrapper>
  );
};

export default App;
