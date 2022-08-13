import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import PageLayout from "./components/layout/PageLayout";
import { useDarkMode } from "./hooks/useDarkMode";
import { GlobalCss } from "./util/globalCss";
import { darkTheme, lightTheme } from "./util/theme";

import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";

function App() {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  const errorLink = onError(({ graphqlErrors, networkError }) => {
    if (graphqlErrors) {
      graphqlErrors.map(({ message, location, path }) => {
        alert(`Graphql error ${message}`);
      });
    }
  });

  const link = from([
    errorLink,
    new createHttpLink({
      uri: `https://graphql.contentful.com/content/v1/spaces/v3ml5t0d6x7d`,
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
      },
    }),
  ]);

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: link,
  });

  return (
    <ThemeProvider theme={themeMode}>
      <BrowserRouter>
        <GlobalCss />
        <ApolloProvider client={client}>
          <PageLayout
            className="container"
            theme={theme}
            toggleTheme={toggleTheme}
          />
        </ApolloProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
