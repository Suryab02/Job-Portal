import React from "react";
import "./styles.css";
import jobs from "./jobs";

// Define the Job component
function Job(props) {
  const { title, url } = props.job;

  return (
    <div className="job">
      <button className="job-button" onClick={() => window.open(url, "_blank")}>
        {title}
      </button>
    </div>
  );
}

function Jobs(props) {
  const sortedJobs = props.jobs.sort((a, b) => b.salary - a.salary);
  const jobs = sortedJobs.map((job) => <Job job={job} key={job.id} />);

  return <div className="jobs">{jobs}</div>;
}

// Define the Header component
function Header(props) {
  return (
    <header>
      <h1 className="header-title">{props.title}</h1>
      <p>{props.description}</p>
    </header>
  );
}

// Define the Footer component
function Footer() {
  return (
    <footer>
      <p>© 2023</p>
    </footer>
  );
}

// Data for the jobs

// Render the App with the Header, Jobs, and Footer components
function App() {
  return (
    <div className="App">
      <Header title="Job Portal" description="Discover Your Next Career Move" />
      <Jobs jobs={jobs} />
      <Footer />
    </div>
  );
}

export default App;
