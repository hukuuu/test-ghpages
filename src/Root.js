import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const Home = () => <h1>Home Page</h1>
const About = () => <h1>About Page</h1>
const Contacts = () => <h1>Contacts Page</h1>

const Root = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contacts">Contacts</Link>
        </li>
      </ul>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contacts" component={Contacts} />
    </div>
  </Router>
)

export default Root
