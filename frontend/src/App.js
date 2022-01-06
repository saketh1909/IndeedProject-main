import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Layout/Header/Header";
import Home from "./Components/Pages/Home";
import { ThemeProvider } from "@material-ui/core";
import theme from "./Utils/theme";
import { Login } from "./Components/Pages/Login";
import { Register } from "./Components/Pages/Register";
import { CompanyReviews } from "./Components/Pages/CompanyReviews";
import { Review } from "./Components/Pages/Review";

import { PostJob } from "./Components/Pages/PostJob";
import SavedJobs from "./Components/Pages/SavedJobs";
import AppliedJobs from "./Components/Pages/AppliedJobs";
import DisplayJobs from "./Components/Pages/DisplayJobs";

// import NavbarAndFooter from './NavbarAndFooter';
import JSCompanyReviews from "./jobseeker/jsCompanyReviews";
import ReviewCard from "./Components/Reviews/ReviewCard";
import { useSelector } from "react-redux";

function App() {
  const isAuth = useSelector((state) => state.login.isAuth);
  return (
    <ThemeProvider theme={theme}>
      <div>
        <React.Suspense fallback={<span>Loading...</span>}>
          <Router>
            {isAuth ? <Header /> : <></>}
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/postJob" component={PostJob} />
              <Route exact path="/savedJobs" component={SavedJobs} />
              <Route exact path="/appliedJobs" component={AppliedJobs} />
              <Route path="/jobs" component={DisplayJobs} />

              <Route path="/login">
                <Login />
              </Route>
              <Route path="/Register" exact>
                <Register />
              </Route>
              {/* <Route exact path="/" Component={Home} /> */}
              <Route path="/jobs" component={DisplayJobs} />
              {/* <Route path="/companies">
                <CompanyReviews />
              </Route> */}
              <Route path="/companies" component={CompanyReviews} />
              <Route exact path="/reviews" component={Review} />

              <Route path="/company_reviews" element={<JSCompanyReviews />} />
              <Route path="/reviewCard" element={<ReviewCard />} />
            </Switch>
          </Router>
        </React.Suspense>
      </div>
    </ThemeProvider>
  );
}

export default App;
