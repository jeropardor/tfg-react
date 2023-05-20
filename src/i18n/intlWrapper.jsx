import { IntlProvider } from "react-intl";
import locales from "./locales";

const IntlWrapper = ({ children }) => {
  const messages = locales[navigator.language.slice(0, 2)] ?? locales.en;

  return (
    <IntlProvider locale={navigator.language} messages={messages}>
      {children}
    </IntlProvider>
  );
};

export default IntlWrapper;
