import { 
    React, 
    Component 
} from 'react';
import {
    Routes, 
    Route
} from 'react-router-dom';
import NavbarAndFooter from './NavbarAndFooter';
import FindSalaries from './jobseeker/FindSalaries';
import JSCompanyReviews from './jobseeker/jsCompanyReviews';
import ReviewCard from './components/Reviews/ReviewCard';

class Main extends Component {
     //this is comment
    render() {
        return (
            <Routes>
                <Route path="/" element={<NavbarAndFooter />} />
                <Route path="/find_salaries" element={<FindSalaries />} />
                <Route path="/company_reviews" element={<JSCompanyReviews />} />
                <Route path="/reviewCard" element={<ReviewCard />} />
            </Routes>
        );
    }
}

export default Main;

/**
 * New syntax for Route:
 * https://stackoverflow.com/questions/69854011/matched-leaf-route-at-location-does-not-have-an-element
 */