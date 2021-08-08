import { render } from 'preact'
import { Router, Route } from 'preact-router'
import { Consumer } from './consumer/consumer'
import { Curator } from './curator/curator'
import './index.css'

const Main = () => {
  const consumerPath = {path: "/consumer"}
  const curatorPath = {path: "/curator"}
  return (
  <Router>
    <Consumer {...consumerPath} />
    <Curator {...curatorPath} />
  </Router>
  );
}

render(<Main />, document.getElementById('app')!)
