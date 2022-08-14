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

  .nav-item {
    color: ${({ theme }) => theme.accent};
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    padding: 20px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Footer */
  .footer {
    background-color: ${({ theme }) => theme.navbar};
    color: ${({ theme }) => (theme === "light" ? "#2f2f2f" : "#f5f5f5")};
    padding: 2rem;
    text-align: center;
    position: absolute;
    width: 100%;
    clear: both;
    text-align: center;
    font-family: "Montserrat", sans-serif;
  }

  .footer-team {
    color: ${({ theme }) => theme.accent};
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    letter-spacing: .08em;
    margin: 0 0 8px;
    text-transform: uppercase;
    overflow: hidden;
  }

  .footer-teams {
    color: ${({ theme }) => theme.accent};
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 21px;
    letter-spacing: .08em;
    margin: 3px;
    opacity: .5;
    text-transform: uppercase;
    flex-basis: 11%;
    overflow: hidden;
    justify-content: center;
    align-items: center;
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

  /* Teams */


  .teams-title {
    font-weight: 600;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    letter-spacing: .08em;
    margin: 0 0 8px;
    text-transform: uppercase;
    flex-basis: 11%;
  }


  .team-player {
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 21px;
    letter-spacing: .08em;
    margin: 0 0 8px;
    text-transform: uppercase;
    flex-basis: 11%;
    overflow: hidden;
    align-items: center;
    justify-content: center;
  }

  /* Contact Form */
   #contact-form {
        background: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
        padding: 20px;
        margin: 20px;
        box-shadow: 0 11px 15px -7px rgba(0, 0, 0, .2), 0 24px 38px 3px rgba(0, 0, 0, .14), 0 9px 46px 8px rgba(0, 0, 0, .12);
        input,
        textarea {
            width: 100%;
            border: 0;
            padding: 10px 20px;
            box-sizing: border-box;
            margin-bottom: 15px;
        }

        textarea {
            height: 100px;
            resize: vertical;
        }

        button {
            width: 100%;
            padding: 10px;
            border: 0;
            cursor: pointer;
            background: ${({ theme }) => theme.accent};
            font-weight: bold;
            color: ${({ theme }) => theme.text};
            font-size: 18px;
            margin-bottom: 15px;
            text-transform: uppercase;
        }

        span {
            display: none;
            text-align: center;

            &.visible {
                display: block;
            }
        }

        /* Misc */
       hr.logo {
        border: 0;
        height: 55px;
        background-image: url(../images/MCL-removebg-preview.png);
        background-repeat: no-repeat;
      }

      /* progress bar styles */
      .progress-bar {
         height: 5px;
        background: ${({ theme }) => theme.accent};
        margin-top: 20px;
      }
`;
