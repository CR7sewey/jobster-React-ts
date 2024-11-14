# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
  // Set the react version
  settings: { react: { version: "18.3" } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules,
  },
});
```

## Project

Install

```sh
npm create vite@latest jobster -- --template react-ts
```

Install dependencies

```sh
cd jobster
npm i
```

### Pages

- HomeLayout
- LandingPage
- Error
- Login
- Register
- Stats
- AllJobs
- AddJob
- Profile

### Normalize CSS

- CSS in JS (styled-components)
- saves times on the setup
- less lines of css
- speeds up the development
- normalize.css
- small CSS file that provides cross-browser consistency in the default styling of HTML elements
- [Normalize]https://necolas.github.io/normalize.css/

```sh
npm i normalize.css
```

- import normalize in main.tsx
- SET BEFORE 'index.css'
- replace contents of index.css

### React Router - Setup

[ReactRouter]https://reactrouter.com/en/main/start/overview

```sh
npm i react-router-dom
```

```ts
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <LandingPage />,
        },
        {
          path: "/all-jobs",
          element: <AllJobs />,
        },
        {
          path: "/add-job",
          element: <AddJob />,
        },
        {
          path: "/stats",
          element: <Stats />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
      errorElement: <Error />,
    },
    {
      path: "/register",
      element: <Register />,
      errorElement: <Error />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
```

### Landing Page - initial setup

- add css

```tsx
export const LandingPage = () => {
  return (
    <main>
      <nav>
        <img src={logo} alt="J" />
      </nav>

      <div>
        <div>
          <h1>
            Job <span>Tracking</span> App
          </h1>
          <p>
            Crucifix narwhal street art asymmetrical, humblebrag tote bag pop-up
            fixie raclette taxidermy craft beer. Brunch bitters synth, VHS
            crucifix heirloom meggings bicycle rights.
          </p>
          <Link to={"/register"}>
            <button className="btn btn-hero">Login / Register</button>
          </Link>
        </div>
        <div>
          <img src={main} alt="main" />
        </div>
      </div>
    </main>
  );
};
```

### Styled Components + Landing Page

- CSS in JS
- Styled Components
- element can be any html element (div,button,section, etc)
- no name collisions, since unique class
- vscode-styled-components extension
- colors and bugs
- style entire react component

```sh
npm install styled-components
```

- Wrapper

```ts
import styled from "styled-components";

const Wrapper = styled.main`
  // styles go here
  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;
  }

  .page {
    min-height: calc(110vh - var(--nav-height));
    display: grid;
    align-items: center;
    margin-top: -3rem;
  }

  h1 {
    font-weight: bold;
  }

  h1 span {
    color: var(--primary-500);
  }

  p {
    color: var(--grey-600);
  }
  .main-img {
    display: none;
  }

  @media (min-width: 992px) {
    .page {
      grid-template-columns: 1fr 1fr;
      column-gap: 3rem;
    }
    .main-img {
      display: block;
    }
  }
`;

export default Wrapper;
```

- Landing Page

```tsx
import { Link } from "react-router-dom";
import logo from "../../public/logo.svg";
import main from "../../public/main.svg";
import Wrapper from "../assets/wrappers/LandingPageWrapper";

export const LandingPage = () => {
  return (
    <Wrapper>
      <nav>
        <img src={logo} alt="J" />
      </nav>
      <div className="page">
        <div>
          <h1>
            Job <span>Tracking</span> App
          </h1>
          <p>
            Crucifix narwhal street art asymmetrical, humblebrag tote bag pop-up
            fixie raclette taxidermy craft beer. Brunch bitters synth, VHS
            crucifix heirloom meggings bicycle rights.
          </p>
          <Link to={"/register"}>
            <button className="btn btn-hero">Login / Register</button>
          </Link>
        </div>
        <div>
          <img src={main} alt="main main-img" />
        </div>
      </div>
    </Wrapper>
  );
};
```
