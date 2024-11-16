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

### All-jobs - Part 1

- AllJob

```tsx
export const AllJobs = () => {
  return <SearchContainer />;
};
```

- SearchContainer

```tsx
export const SearchContainer = () => {
  return (
    <Wrapper>
      <Form className="form">
        <h4>Search Form</h4>
        <div className="form-center">
          <FormInputText name="search" labelText="search" />
          <FormSelect
            values={StatusValues}
            defaultValue="pending"
            name="status"
            labelText="status"
          />
          <FormSelect
            values={JobOptionsType}
            defaultValue="all"
            name="type"
            labelText="type"
          />
          <FormSelect
            values={SortOptions}
            defaultValue="all"
            name="sort"
            labelText="sort"
          />
          <button type="submit" className="btn btn-block btn-danger">
            Clear Filters
          </button>
        </div>
      </Form>
    </Wrapper>
  );
};
```

rest: types, FormInputText, FormSelect, SearchContainer Wrapper

### All-jobs - Part 2

- All-jobs

```tsx
import { SearchContainer } from "../components/form/SearchContainer";
import { ListOfJobs } from "../components/ListOfJobs";

const AllJobs = () => {
  return (
    <>
      <SearchContainer />
      <ListOfJobs />
    </>
  );
};

export default AllJobs;
```

- ListOfJobs

```tsx
import Wrapper from "../assets/wrappers/ListOfJobs";
import { Job } from "./Job";

const jobs = [
  {
    id: 1,
    position: "Dev",
    company: "Micro",
    jobLocation: "Lisbon",
    jobType: "Internship",
    createdAt: new Date().toLocaleDateString(),
    status: "Pending",
  },
  {
    id: 2,
    position: "Accountant",
    company: "InnoWave",
    jobLocation: "Porto",
    jobType: "Full-Time",
    createdAt: new Date().toLocaleDateString(),
    status: "Interview",
  },
];

export const ListOfJobs = () => {
  return (
    <Wrapper>
      <h5>
        {jobs.length} Job{jobs.length > 1 ? "s" : ""} Found
      </h5>
      <div className="jobs">
        {jobs.map((item) => {
          return <Job {...item} key={item.id} />;
        })}
      </div>
    </Wrapper>
  );
};
```

- Job

```tsx
import Wrapper from "../assets/wrappers/Job";
import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Job = ({
  position,
  company,
  jobLocation,
  jobType,
  createdAt,
  status,
}: {
  position: string;
  company: string;
  jobLocation: string;
  jobType: string;
  createdAt: string;
  status: string;
}) => {
  return (
    <Wrapper>
      <header>
        <div className="main-icon">{company.charAt(0)}</div>
        <div className="info">
          <h5>{position}</h5>
          <p>{company}</p>
        </div>
      </header>
      <div className="content">
        <div className="content-center">
          <div className="icons">
            <span className="icon">
              <FaLocationArrow />{" "}
            </span>
            <span className="text">{jobLocation}</span>
          </div>
          <div className="icons">
            <span className="icon">
              <FaCalendarAlt />
            </span>
            <span className="text">{createdAt}</span>
          </div>
          <div className="icons">
            <span className="icon">
              <FaBriefcase />
            </span>
            <span className="text">{jobType}</span>
          </div>

          <div className={`status ${status.toLowerCase()}`}>{status}</div>
        </div>
        <footer>
          <div className="actions">
            <button className="btn edit-btn">
              <Link to={"/add-job"}>Edit</Link>
            </button>
            <button className="btn delete-btn">
              <Link to={"/add-job"}>Delete</Link>
            </button>
          </div>
        </footer>
      </div>
    </Wrapper>
  );
};
```

### Loading and Error components

- Error

```tsx
const Error = () => {
  return (
    <Wrapper className="full-page">
      <div>
        <img src={img} alt="not found" />
        <h3>Ohh! Page Not Found</h3>
        <p>We can't seem to find the page you're looking for</p>
        <Link to="/">back home</Link>
      </div>
    </Wrapper>
  );
};
```

- Loading

```tsx
const Loading = ({ center }: { center: string }) => {
  return <div className={center ? "loading loading-center" : "loading"}></div>;
};
```

### Login and Register + Axios - Part 1 - check script
