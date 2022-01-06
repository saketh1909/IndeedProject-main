import { React, Component } from 'react';
import '../CSS/findSalaries.css'

class FindSalaries extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            // showIndustryListModal: false
            allIndustriesList: [
                "All Industries",
                "Administrative & Customer Support",
                "Business Operations & Management",
                "Caregivers & Residential Care",
                "Cleaning & Grounds Maintenance",
                "Community & Human Services",
                "Construction & Extraction",
                "Education & Instruction",
                "Finance & Accounting",
                "Food & Beverage",
                "Healthcare",
                "Healthcare Administrative Support",
                "Logistics & Supply Chain",
                "Manufacturing & Utilities",
                "Marketing, Advertising & Public Relations",
                "Material Moving & Warehousing",
                "Nurses",
                "Personal Service",
                "Protective & Security",
                "Repair, Maintenance & Installation",
                "Sales & Retail",
                "Technology",
                "Transportation"
            ],
            industrySelected: "All Industries",

            filterSelected: "jobs", // jobs | companies

            top8JobsByIndustry: [
                {
                    job_role: "Front Desk Agent",
                    avg_salary: "$37,516"
                },
                {
                    job_role: "Server",
                    avg_salary: "$39,206"
                },
                {
                    job_role: "Crew Member",
                    avg_salary: "$40,454"
                },
                {
                    job_role: "Administrative Assistant",
                    avg_salary: "$44,590"
                },
                {
                    job_role: "Housekeeper",
                    avg_salary: "$37,834"
                },
                {
                    job_role: "Security Officer",
                    avg_salary: "$50,244"
                },
                {
                    job_role: "Babysitter/Nanny",
                    avg_salary: "$45,088"
                },
                {
                    job_role: "Warehouse Worker",
                    avg_salary: "$37,472"
                }
            ],

            top8CompaniesByIndustry: [
                {
                    company_name: "Costco Wholesale",
                    company_logo_url: "/images/amazon-logo.jpeg",
                    company_avg_rating: "4",
                    total_company_reviews: 1500
                },
                {
                    company_name: "Starbucks",
                    company_logo_url: "/images/amazon-logo.jpeg",
                    company_avg_rating: "5",
                    total_company_reviews: 1500
                },
                {
                    company_name: "PepsiCo",
                    company_logo_url: "/images/amazon-logo.jpeg",
                    company_avg_rating: "3",
                    total_company_reviews: 1500
                },
                {
                    company_name: "Lowe's Home Improvement",
                    company_logo_url: "/images/amazon-logo.jpeg",
                    company_avg_rating: "5",
                    total_company_reviews: 1500
                },
                {
                    company_name: "McDonald's",
                    company_logo_url: "/images/amazon-logo.jpeg",
                    company_avg_rating: "5",
                    total_company_reviews: 1500
                },
                {
                    company_name: "UnitedHealth Group",
                    company_logo_url: "/images/amazon-logo.jpeg",
                    company_avg_rating: "3",
                    total_company_reviews: 1500
                },
                {
                    company_name: "Amazon.com",
                    company_logo_url: "/images/amazon-logo.jpeg",
                    company_avg_rating: "5",
                    total_company_reviews: 1500
                },
                {
                    company_name: "CVS Health",
                    company_logo_url: "/images/amazon-logo.jpeg",
                    company_avg_rating: "1",
                    total_company_reviews: 1500
                }
            ]

        }

        this.industrySelectedHandler = this.industrySelectedHandler.bind(this);
        this.industryModalOpener = this.industryModalOpener.bind(this);
    }

    industrySelectedHandler = (e) => {
        this.setState({
            industrySelected: e.target.getAttribute('id')
        });

        if (e.target.getAttribute('id') != 'All Industries') {
            document.getElementById('industry-selected').innerHTML = e.target.getAttribute('id');
        }
    }

    industryModalCloser = (e) => {
        document.getElementById('myModal1').style.display = "none";
    }

    industryModalOpener = (e) => {
        document.getElementById('myModal1').style.display = "block";
        if (e.target.getAttribute('id') == 'jobs') {
            this.setState({
                filterSelected: 'jobs'
            });
        } else if (e.target.getAttribute('id') == 'companies') {
            this.setState({
                filterSelected: 'companies'
            });
        }
    }

    render() {

        let htmlToDisplay = null;

        // -------------------------------- BANNER --------------------------------- STARTS -------

            let bannerStart = (
                <div id="banner-start">
                    <h3>Find a career you'll love</h3>
                    <p>Explore which careers have the highest job satisfaction, best salaries, and more</p>
                </div>
            );

            let searchMainBox = (
                <div id="search-main-box">
                    <form id="search-form">
                        <div className="row">
                            <div className="col-md-4">
                                <label htmlFor="what-input">What</label>
                                <input type="text" class="form-control" id="what-input" placeholder="job title"/>
                                <span><svg id="search-magnifying-glass" xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" focusable="false" role="img" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" class=" css-rboqsd e18c60hj0"><title>search</title><path fill-rule="evenodd" d="M13.335 14.749a6.5 6.5 0 111.414-1.414l6.105 6.104a.5.5 0 010 .707l-.708.708a.5.5 0 01-.707 0l-6.104-6.105zM14 9.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" clip-rule="evenodd"></path></svg></span>
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="what-input">Where</label>
                                <input type="text" class="form-control" id="where-input" value="United States" placeholder="job title"/>
                                <span><svg id="search-magnifying-glass" xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" focusable="false" role="img" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" class=" css-rboqsd e18c60hj0"><title>search</title><path fill-rule="evenodd" d="M13.335 14.749a6.5 6.5 0 111.414-1.414l6.105 6.104a.5.5 0 010 .707l-.708.708a.5.5 0 01-.707 0l-6.104-6.105zM14 9.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" clip-rule="evenodd"></path></svg></span>
                            </div>
                            <div className="col-md-4">
                                <button id="search-button" type="submit" className="btn btn-default">Search</button>
                            </div>
                        </div>
                    </form>
                </div>
            );

        let banner = (
            <div id="banner" className="container-fluid">
                <div className="container">
                    {bannerStart}
                    {searchMainBox}
                </div>  
            </div>
        );

        // -------------------------------- BANNER --------------------------------- ENDS -------        
        // --------------------------- PART AFTER BANNER --------------------------- STARTS -------

                let bckGroundColor = '';
                let color = '';
                let industries = this.state.allIndustriesList.map((eachIndustry) => {
                    
                    // let element = <button className="salary-filter-options">{eachIndustry}</button>;
                    if (this.state.industrySelected == eachIndustry) {
                        bckGroundColor = '#0643ad';
                        color = 'white'
                    } else {
                        bckGroundColor = 'transparent';
                        color = 'black';
                    }
                    
                    return (
                        <button id={eachIndustry} key={eachIndustry} onClick={this.industrySelectedHandler} style={{backgroundColor: `${bckGroundColor}`, color: `${color}`}} className="salary-filter-options">{eachIndustry}</button>
                    );
                });
                let industryListModal = (
                    <div id="myModal1" className="modal1">

                        <div className="modal-content1 container">
                            
                            <div>
                                {industries}
                            </div>

                            <button id="industryModalClose" onClick={this.industryModalCloser}>Close</button>
                        </div>
                    </div>

                );

            let jobsCards = null;
            let topPayingJobs = (
                <div id="top-paying-jobs" className="container">
                    <h2>Browse top paying jobs by industry</h2>
                    <button id="industry-list-button-for-jobs" className="industry-list-button" onClick={this.industryModalOpener}>Choose an industry</button>
                    <span style={{marginLeft: "15px"}} id="industry-selected"></span>
                    {industryListModal}

                    <div className="jobCardsBox">
                        {
                            jobsCards = this.state.top8JobsByIndustry.map((eachJobRole) => {
                                return (
                                    <div id={JSON.stringify(eachJobRole)} key={JSON.stringify(eachJobRole)} className="eachJobRoleCard">
                                        <div style={{borderBottom: "1px solid #D3D3D3", padding:"15px"}}>
                                            <p style={{fontSize: "1.15em", fontWeight: "bold"}}>{eachJobRole.job_role}</p>
                                            <p>Average Salary<span style={{float: "right", textDecoration: "underline"}}>{eachJobRole.avg_salary} per year</span></p>
                                        </div>
                                        <div>
                                            <p style={{padding: "15px"}}>Skills <span style={{float: "right", textDecoration: "underline"}}>Job Openings</span></p>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            );

            let companyCards = null;
            let topPayingCompanies = (
                <div id="top-paying-companies" className="container">
                    <h2>Browse top paying companies by industry</h2>
                    <button id="industry-list-button-for-companies" className="industry-list-button" onClick={this.industryModalOpener}>Choose an industry</button>

                    <div className="companyCardsBox">
                        {
                            companyCards = this.state.top8CompaniesByIndustry.map((eachCompany) => {
                                
                                console.log("## ", eachCompany);

                                return (
                                    <div id={JSON.stringify(eachCompany)} key={JSON.stringify(eachCompany)} className="eachCompanyCard">
                                        <div className="row">
                                            <div className="col-md-2">
                                                <img style={{border: "1px solid #D3D3D3", borderRadius:"5px", marginLeft: "-15px"}} width="60px" src={`${eachCompany.company_logo_url}`} alt="company-logo"/>
                                            </div>
                                            <div className="col-md-9">
                                                <p style={{fontSize: "1.15em", fontWeight: "bold", textDecoration: "underline"}}>{eachCompany.company_name}</p>
                                                <div className="star-rating">

                                                    {console.log('#$#$#$##$# ', parseInt(eachCompany.company_avg_rating))}

                                                    {[...Array(parseInt(eachCompany.company_avg_rating))].map((star) => { 
                                                        return (         
                                                        // <span className="star">&#9733;</span>        
                                                        <span class="fa fa-star checked"></span>
                                                        );
                                                    })}
                                                    {[...Array(5 - parseInt(eachCompany.company_avg_rating))].map((star) => { 
                                                        return (         
                                                        // <span className="star">&#9733;</span>        
                                                        <span class="fa fa-star empty"></span>
                                                        );
                                                    })}
                                                    <span style={{marginLeft: "10px"}}>{eachCompany.total_company_reviews} reviews</span>
                                                    </div>
                                            </div>
                                            <div className="col-md-1">
                                                
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            );

        let partAfterBanner = (
            <div id="part-after-banner">
                <div className="container">
                    {topPayingJobs}
                    {topPayingCompanies}
                </div>
            </div>
        );
            
        // --------------------------- PART AFTER BANNER --------------------------- ENDS ----------

        htmlToDisplay = (
            <div>
                {banner}
                {partAfterBanner}
            </div>
        );

        return (
           <div>
               {htmlToDisplay}
            </div>
        );
    }
}

export default FindSalaries;