<Navbar>
  <Navbar.Header>
    <Navbar.Brand>
      <NavLink to="/projects">My Projects</NavLink>
    </Navbar.Brand>
  </Navbar.Header>
  <Nav>
    <ul className="nav navbar-nav">
      <li><NavLink to="/projects/new">New Project</NavLink></li>
    </ul>
    <ul className="nav navbar-nav">
      <li><NavLink to="/categories">Categories</NavLink></li>
    </ul>
  </Nav>
</Navbar>

//In app.js
<Router>
  <div>
    <NavBar/>
    <Route exact path="/" component={WelcomeTron} />
    <Route path="/projects" component={ProjectsPage} />
  </div>
</Router>

// In ProjectsPage.js
<Switch>
  <Route path={`${match.url}/new`} component={CreateProject} />
  <Route path={`${match.url}/:projectId`} component={ProjectShow}/>
  <Route exact path={match.url} render={() => (
    null
  )}/>
</Switch>

// In Projects.js
<Link to={`/projects/${project.id}`}>{project.name}</Link>
