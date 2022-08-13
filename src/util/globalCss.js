import { createGlobalStyle } from "styled-components";

export const GlobalCss = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;
  }


 .btn-outline-primary:hover, .btn-outline-primary:focus, .btn-outline-primary:active, .btn-outline-primary.active, .open>.dropdown-toggle.btn-outline-primary {
    color: ${({ theme }) => theme.gradient};
    background-color: ${({ theme }) => theme.gradient};
    border-color: ${({ theme }) => theme.gradient};
}




  .navbar-toggler {
    color: ${({ theme }) => theme.accent} !important;

  }

  .navbar-toggler-icon {
    color: ${({ theme }) => theme.accent};
  }

  /* Footer */
  .footer-team {
    color: ${({ theme }) => theme.accent};
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 21px;
    letter-spacing: .08em;
    margin: 0 0 8px;
    opacity: .5;
    text-transform: uppercase;
    flex-basis: 11%;
    overflow: hidden;
  }

  .footer-teams {
    color: ${({ theme }) => theme.accent};
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    height: auto;
    width: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 21px;
    letter-spacing: .08em;
    margin: 0 0 8px;
    opacity: .5;
    text-transform: uppercase;
    flex-basis: 11%;
    overflow: hidden;
  }

  /* Navbar */
  .nav {
    color: ${({ theme }) => theme.accent};
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    height: auto;
    width: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 21px;
    letter-spacing: .08em;
    opacity: .5;
    text-transform: uppercase;
    flex-basis: 11%;
  }

  .nav a {
    color: ${({ theme }) => theme.accent};
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    height: auto;
    width: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 21px;
    letter-spacing: .08em;
    text-transform: uppercase;
    flex-basis: 15%;
    text-decoration: none;
  }
`;
