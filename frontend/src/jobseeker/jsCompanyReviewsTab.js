// js in the start stands for Job Seeker
import {
    React, 
    Component
} from 'react';
import '../CSS/jsCompanyReviewsTab.css';

class JSCompanyReviewsTab extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            companyData: {
                name: 'Burger King',
                averageRating: '3.4',
                happniessScore: '62',
                learningScore: '66',
                appreciationScore: '68',

                aboutTheCompany: {
                    description: 'Every day, more than 11 million guests visit Burger King® restaurants around the world. And they do so because our restaurants are known for serving high-quality, great-tasting, and affordable food. Founded in 1954, Burger King® is the second largest fast-food hamburger chain in the world. The original Home Of The Whopper®, our commitment to premium ingredients, signature recipes, and family-friendly dining experiences is what has defined our brand for more than 50 successful years.',
                    founded: '1954',
                    companySize: 'More than 1,500',
                    revenue: '$100M to $500M',
                    industry: 'Restaurants & Food Service',
                    top5reviews: [
                        {
                            reviewer_desc: "Cashier in San Jose, CA",
                            rating: '3.0',
                            date_posted: "August 3, 2019",
                            review_summary: "I would say working at Burger King is just okay",
                            review_text: "I started working at burger king in 2017 the management was never the best but it was there were some very effective managers. As a first time job it's not bad but I would not recommend it as a full time job."
                        },
                        {
                            reviewer_desc: "Crew Member in Conyers, GA",
                            rating: '5.0',
                            date_posted: "November 26, 2021",
                            review_summary: "Fun workplace",
                            review_text: "I worked there when I graduated from HS before going to college. The work was hard especially during rush. Management was great. I was able to work there when I returned home for breaks."
                        },
                        {
                            reviewer_desc: "Assistant Manager in St. Peters, MO",
                            rating: '1.0',
                            date_posted: "November 25, 2021",
                            review_summary: "Invested too much",
                            review_text: "Worked there for 6 years and they’re paying people who just came in more than me. Took me 6 years to just become an assistant. Bosses don’t recognize you for any good work you do. The crew i worked with is great, it’s just the company as a whole that needs work."
                        },
                        {
                            reviewer_desc: "Cook in Columbia, TN",
                            rating: '4.0',
                            date_posted: "November 21, 2021",
                            review_summary: "Amazing family and community.",
                            review_text: "I loved working there it was a amazing place, I felt like I belonged and rarely had a bad day! The other staff were nice and friendly and the work wasn't hard"
                        },
                        {
                            reviewer_desc: "Cook in Tahlequah, OK",
                            rating: '3.0',
                            date_posted: "November 11, 2021",
                            review_summary: "Decent",
                            review_text: "The pay isn’t horrible. We work basically every holiday with NO holiday pay. The environment is good."
                        }
                    ]
                },

                whyJoinUs: {
                    companyCulture: [
                        {
                            culture_text: "What unites our employees across teams and geographies is that we are all striving to delight our customers and make their lives easier.  The scope and scale of our mission drives us to seek diverse perspectives, be resourceful, and navigate through ambiguity.  Inventing and delivering things that were never thought possible isn't easy, but we embrace this challenge every day."
                        }
                    ],

                    companyValues: [
                        {
                            value_title: "It’s Always Day 1",
                            value_description: "At Burger King, it’s always “Day 1.” Now, what does this mean and why does it matter? It means that our approach remains the same as it was on Burger King's very first day: We embrace new ways of doing things, strive to stay nimble, make decisions quickly, and always focus on delighting our customers. In his 2016 letter to shareholders, CEO José Cil shared his thoughts on how to maintain a Day 1 mindset."
                        },
                        {
                            value_title: "Our Leadership Principles",
                            value_description: "Our Leadership Principles help us keep a Day 1 mentality. They aren’t just a pretty inspirational wall hanging. Our employees use them every day, whether they’re discussing ideas for new projects, deciding on the best solution for a customer’s problem, or interviewing candidates."
                        },
                        {
                            value_title: "Diversity and Inclusion",
                            value_description: "We value individual expression, respect different opinions, and work together to create a culture where each of us is able to contribute fully. Our unique backgrounds and perspectives strengthen our ability to achieve Burger Kings's mission of being Earth's most customer-centric company."
                        }
                    ]
                },

                salaries: [
                    {
                        role: "General Manager",
                        salary: "13.54",
                        salary_unit: "per hour" // could be 'per year'
                    },
                    {
                        role: "Shift Manager",
                        salary: "12.65",
                        salary_unit: "per hour" // could be 'per year'
                    },
                    {
                        role: "Assistant Manager",
                        salary: "13.20",
                        salary_unit: "per hour" // could be 'per year'
                    },
                    {
                        role: "Crew Member",
                        salary: "9.81",
                        salary_unit: "per hour" // could be 'per year'
                    },
                    {
                        role: "Delivery Person",
                        salary: "17.09",
                        salary_unit: "per hour" // could be 'per year'
                    },
                    {
                        role: "Logistic Specialist",
                        salary: "40922",
                        salary_unit: "per year" 
                    },
                    {
                        role: "Transport Manager",
                        salary: "15.97",
                        salary_unit: "per hour" 
                    },
                ],

                totalResponsesForHappinessScore: '9,506'    
            },
            navBtnClicked: 'Salaries'
        }

        this.navbarBtnClickHandler = this.navbarBtnClickHandler.bind(this);
        this.photoLinkClickHandler = this.photoLinkClickHandler.bind(this);

        this.helpfulnessSortHandler = this.helpfulnessSortHandler.bind(this);
        this.ratingSortHandler = this.ratingSortHandler.bind(this);
        this.dateSortHandler = this.dateSortHandler.bind(this);
        this.salaryModalCloser = this.salaryModalCloser.bind(this);
    }

    salaryModalCloser = () => {
        document.getElementById('myModal2').style.display = "none";
    }

    salaryModalOpener = (e) => {
        document.getElementById('myModal2').style.display = "block";
    }

    //-----------------------------------------------------------------------------
    navbarBtnClickHandler = (e) => {

        let elements = document.getElementsByClassName('company-home-navbar');
        for(let i = 0, length = elements.length; i < length; i++) {
            elements[i].style.border = '0px';
            elements[i].style.padding = '5px 0px 10px 0px';
        }
        document.getElementById(e.target.getAttribute('id')).style.borderBottom = '3px solid #2d2d2d';
        document.getElementById(e.target.getAttribute('id')).style.paddingBottom = '7px';

        this.setState({
            navBtnClicked: e.target.getAttribute('id')
        });
    }

    photoLinkClickHandler = () => {
        let elements = document.getElementsByClassName('company-home-navbar');
        for(let i = 0, length = elements.length; i < length; i++) {
            elements[i].style.border = '0px';
            elements[i].style.padding = '5px 0px 10px 0px';
        }
        document.getElementById('Photos').style.borderBottom = '3px solid #2d2d2d';
        document.getElementById('Photos').style.paddingBottom = '7px';

        this.setState({
            navBtnClicked: 'Photos'
        });
    }
    //-----------------------------------------------------------------------------

    helpfulnessSortHandler = (e) => {
        document.getElementById(e.target.getAttribute('id')).style.backgroundColor = 'grey';
        document.getElementById(e.target.getAttribute('id')).style.color = 'white';
        document.getElementById('rating-sort-btn').style.backgroundColor = 'white';
        document.getElementById('date-sort-btn').style.backgroundColor = 'white';
        document.getElementById('rating-sort-btn').style.color = 'rgb(37, 87, 167)';
        document.getElementById('date-sort-btn').style.color = 'rgb(37, 87, 167)';
    }

    ratingSortHandler = (e) => {
        document.getElementById('helpfulness-sort-btn').style.backgroundColor = 'white';
        document.getElementById('helpfulness-sort-btn').style.color = 'rgb(37, 87, 167)';
        document.getElementById(e.target.getAttribute('id')).style.backgroundColor = 'grey';
        document.getElementById(e.target.getAttribute('id')).style.color = 'white';
        document.getElementById('date-sort-btn').style.backgroundColor = 'white';
        document.getElementById('date-sort-btn').style.color = 'rgb(37, 87, 167)';
    }

    dateSortHandler = (e) => {
        document.getElementById('helpfulness-sort-btn').style.backgroundColor = 'white';
        document.getElementById('rating-sort-btn').style.backgroundColor = 'white';
        document.getElementById('helpfulness-sort-btn').style.color = 'rgb(37, 87, 167)';
        document.getElementById('rating-sort-btn').style.color = 'rgb(37, 87, 167)';
        document.getElementById(e.target.getAttribute('id')).style.backgroundColor = 'grey';
        document.getElementById(e.target.getAttribute('id')).style.color = 'white';
    }
    
    render() {
        let htmlToDisplay = null;

        

        // banner image
            let bannerImageUrl = '/images/burgerking_banner.jpeg';
            let bannerImageDiv = (
                // <div className="container" style={{backgroundImage: `url(${bannerImageUrl})`, width: '90%', height: '300px'}}>

                // </div>
                <div className="container">
                    <div style={{backgroundImage: `url(${bannerImageUrl})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center center", width: '100%', height: '220px', borderRadius: '8px'}}></div>
                </div>
            );

        // Company head
            // logo, name, ratings, write a review button
            let logoUrl = '/images/burgerking-logo.jpeg';
            let company_avg_rating = Math.floor(parseFloat(this.state.companyData.averageRating));
            let companyHead = (
                <div id="company-head" className="container">
                    {/* <div style={{width: "90%"}}> */}
                    <div>
                        <img style={{borderRadius:"5px", marginRight: "6px", marginTop: '25px'}} width="60px" src={`${logoUrl}`} alt="company-logo"/>
                        <div style={{width: 'calc(100% - 400px)', display: 'inline-block', paddingLeft: "6px", marginTop: "10px", height: "60px", position:"relative"}}>
                        
                            <span>Burger King</span>
                            <br/>

                            {/* <span style={{position: "absolute", bottom: '0px', fontSize: "0.85em", height: "25px", border: "1px solid grey"}}> */}
                            <span style={{position: "absolute", bottom: '0px', fontSize: "0.85em", height: "25px"}}>
                                <span style={{borderRight: "1px solid grey", width: "50px", paddingRight: "10px", paddingLeft: "0px"}}>
                                    {this.state.companyData.happniessScore}
                                    <img src="/images/averageHappinessScoreEmoji.png" alt="average happiness score" width="25px" height="25px" style={{marginLeft: "10px"}} />
                                </span>
                                
                                <span style={{padding: "0px 10px"}}>
                                    {this.state.companyData.averageRating}
                                    <span style={{paddingLeft: "10px"}}>
                                        {[...Array(parseInt(company_avg_rating))].map((star) => { 
                                            return (                
                                            <span class="fa fa-star checked1"></span>
                                            );
                                        })}
                                        {[...Array(5 - parseInt(company_avg_rating))].map((star) => { 
                                            return (              
                                            <span class="fa fa-star empty1"></span>
                                            );
                                        })}
                                    </span>
                                </span>
                            </span>
                        </div>
                        <span style={{float: 'right', marginTop: '40px'}}>
                            <button style={{border: "none", color: "white", backgroundColor: "rgba(37, 87, 167, 1)", padding: "5px 45px", borderRadius: "10px", fontSize: "0.95em"}}>Write a review</button>
                        </span>
                    </div>
                </div>
            );

        let ampersand = '&';
        // company navbar
            // TABS: Snapshot, Why Join Us, Reviews, Salaries, Benefits, Photos, Jobs, Q&A, Interviews
            // be default snapshot is selected
            let navbar = (
                <div className="container-fluid" style={{borderBottom: '1px solid #D3D3D3'}}>
                    <div className="container" style={{padding: "5px 33px 0px 33px"}}>
                        <button id="Snapshot" onClick={this.navbarBtnClickHandler} className="company-home-navbar">Snapshot</button>
                        <button id="Why Join Us" onClick={this.navbarBtnClickHandler} className="company-home-navbar">Why Join Us</button>
                        <button id="Reviews" onClick={this.navbarBtnClickHandler} className="company-home-navbar">Reviews</button>
                        <button id="Salaries" onClick={this.navbarBtnClickHandler} className="company-home-navbar">Salaries</button>
                        <button id="Benefits" onClick={this.navbarBtnClickHandler} className="company-home-navbar">Benefits</button>
                        <button id="Photos" onClick={this.navbarBtnClickHandler} className="company-home-navbar">Photos</button>
                        <button id="Jobs" onClick={this.navbarBtnClickHandler} className="company-home-navbar">Jobs</button>
                        <button id="Q&A" onClick={this.navbarBtnClickHandler} className="company-home-navbar">Q{ampersand}A</button>
                        <button id="Interviews" onClick={this.navbarBtnClickHandler} className="company-home-navbar">Interviews</button>
                    </div>
                </div>
            );

        let topHalf = (
            <div>
                {bannerImageDiv}
                {companyHead}
                {navbar}
            </div>
        );

        //--------------------------------------------------------------------------------------------------------------------------------------------------

            let snapShotData = (
                <div>
                    {/* SNAPSHOT */}

                    <div id="snapshot-avg-scores">
                        <h3 style={{fontWeight: "bold", marginBottom: "15px"}}>Work Happiness</h3>
                        <p style={{fontSize: "0.6em", color: "grey"}}>Scores based on about {this.state.companyData.totalResponsesForHappinessScore} responses to Indeed's survey on work happiness</p>
                        <div className="row">
                            <div className="col-md-4" style={{position: "relative", height: "120px", marginTop: "12px"}}>
                                <div style={{width: "40px", height: "35px", backgroundColor: "#ECECEC", padding: "3px 8px 10px", display: "inline-block", borderRadius: "10px", marginBottom: "10px", position: "absolute", top: "10px"}}>
                                    {this.state.companyData.happniessScore}
                                </div>
                                <img src="/images/averageHappinessScoreEmoji.png" alt="average happiness score" width="30px" height="30px" style={{marginLeft: "5px", position: "absolute", left: "55px", top: "10px"}} />
                                <div style={{marginTop: "5px", display: "inline-block", padding: "0px 10px 5px 10px", fontSize: "0.75em", position: "absolute", left: "95px"}}>
                                    <span style={{fontWeight: "bold"}}>Work Happiness Score</span>
                                    <br />
                                    <span style={{fontSize: "0.8em"}}>Average</span>
                                </div>
                                <div style={{display: "inline-block", position: "absolute", bottom: "14px", fontSize: "0.7em", border: "1px solid #CAC9C9", width: "85%", padding: "5px 10px", marginLeft: "10px", color: "grey", borderRadius: "0px 25px 5px 15px"}}>
                                    Do people feel happy at work <br/>most of the time?
                                </div>
                            </div>
                            <div className="col-md-4" style={{position: "relative", height: "120px", marginTop: "12px"}}>
                                <div style={{width: "40px", height: "35px", backgroundColor: "#ECECEC", padding: "3px 8px 10px", display: "inline-block", borderRadius: "10px", marginBottom: "10px", position: "absolute", top: "10px"}}>
                                    {this.state.companyData.appreciationScore}
                                </div>
                                <img src="/images/averageHappinessScoreEmoji.png" alt="average happiness score" width="30px" height="30px" style={{marginLeft: "5px", position: "absolute", left: "55px", top: "10px"}} />
                                <div style={{marginTop: "5px", display: "inline-block", padding: "0px 10px 5px 10px", fontSize: "0.75em", position: "absolute", left: "95px"}}>
                                    <span style={{fontWeight: "bold"}}>Achievement</span>
                                    <br />
                                    <span style={{fontSize: "0.8em"}}>Average</span>
                                </div>
                                <div style={{display: "inline-block", position: "absolute", bottom: "14px", fontSize: "0.7em", border: "1px solid #CAC9C9", width: "85%", padding: "5px 10px", marginLeft: "10px", color: "grey", borderRadius: "0px 25px 5px 15px"}}>
                                    Do people feel they are achieving <br/>most of their goals at work?
                                </div>
                            </div>
                            <div className="col-md-4" style={{position: "relative", height: "120px", marginTop: "12px"}}>
                                <div style={{width: "40px", height: "35px", backgroundColor: "#ECECEC", padding: "3px 8px 10px", display: "inline-block", borderRadius: "10px", marginBottom: "10px", position: "absolute", top: "10px"}}>
                                    {this.state.companyData.learningScore}
                                </div>
                                <img src="/images/averageHappinessScoreEmoji.png" alt="average happiness score" width="30px" height="30px" style={{marginLeft: "5px", position: "absolute", left: "55px", top: "10px"}} />
                                <div style={{marginTop: "5px", display: "inline-block", padding: "0px 10px 5px 10px", fontSize: "0.75em", position: "absolute", left: "95px"}}>
                                    <span style={{fontWeight: "bold"}}>Flexibility</span>
                                    <br />
                                    <span style={{fontSize: "0.8em"}}>Average</span>
                                </div>
                                <div style={{display: "inline-block", position: "absolute", bottom: "14px", fontSize: "0.7em", border: "1px solid #CAC9C9", width: "85%", padding: "5px 10px", marginLeft: "10px", color: "grey", borderRadius: "0px 25px 5px 15px"}}>
                                    Do people feel they have the time and <br/>location flexibility they need?
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="snapshot-about-the-company">
                        <h3 style={{fontWeight: "bold", marginBottom: "15px", marginTop: "25px"}}>About the Company</h3>
                        <div className="row">
                            <div className="col-md-3">
                                
                                <div style={{position: "relative", width: "100%", height: "195px"}}>
                                    <img src="/images/ceo-image1.jpeg" style={{width: "45%", height: "125px", position: "absolute", top: "10px", left: "70px"}} alt="Company Ceo"></img>
                                    <p style={{position: "absolute", width: "100%", bottom: "0px", textAlign: "center", fontWeight: "bold", fontSize: "1.3em"}}>José Cil</p>
                                </div>
                            </div>
                            <div className="col-md-9">
                                {/* <h4>Company details cards</h4> */}
                                <div id="company-details-cards-box">
                                    <div className="company-details-cards" style={{position: "relative"}}>
                                        <p style={{position:"absolute", fontSize: "0.7em", fontWeight: "bold"}}>Founded</p>
                                        <p style={{position:"absolute", fontSize: "0.7em", bottom: "3px"}}>{this.state.companyData.aboutTheCompany.founded}</p>
                                    </div>
                                    <div className="company-details-cards" style={{position: "relative"}}>
                                        <p style={{position:"absolute", fontSize: "0.7em", fontWeight: "bold"}}>Company Size</p>
                                        <p style={{position:"absolute", fontSize: "0.7em", bottom: "3px"}}>{this.state.companyData.aboutTheCompany.companySize}</p>
                                    </div>
                                    <div className="company-details-cards" style={{position: "relative"}}>
                                        <p style={{position:"absolute", fontSize: "0.7em", fontWeight: "bold"}}>Revenue</p>
                                        <p style={{position:"absolute", fontSize: "0.7em", bottom: "3px"}}>{this.state.companyData.aboutTheCompany.revenue}</p>
                                    </div>
                                    <div className="company-details-cards" style={{position: "relative"}}>
                                        <p style={{position:"absolute", fontSize: "0.7em", fontWeight: "bold"}}>Industry</p>
                                        <p style={{position:"absolute", fontSize: "0.7em", bottom: "3px"}}>{this.state.companyData.aboutTheCompany.industry}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p style={{width: "92%", margin: "auto", padding: "15px", fontStyle: "italic", fontSize: "0.75em", color: "#585858"}}>{this.state.companyData.aboutTheCompany.description}</p>
                        {/* ceo */}
                        {/* founded */}
                        {/* company size */}
                        {/* revenue */}
                        {/* Industry */}
                        {/* company description */}
                    </div>

                    <div id="snapshot-featured-reviews">
                        {/* 5 reviews - atleast one negative */}
                        <h3 style={{fontWeight: "bold", marginBottom: "15px", marginTop: "25px"}}>Reviews</h3>
                        <div style={{paddingLeft: "25px", marginTop: "-20px"}}>
                            {
                                this.state.companyData.aboutTheCompany.top5reviews.map((eachReview) => {
                                    return (
                                        <div className="each-review-box" style={{paddingTop: "30px", paddingBottom: "5px", borderBottom: "1px solid #DADADA"}}>
                                            <div className="review-head" style={{position: "relative"}}>
                                                <img src="/images/user-icon.png" alt="User Icon" width="40px" height="40px" />
                                                <div style={{display: 'inline-block', position: 'absolute', marginTop: '-12px', marginLeft: '10px'}}>
                                                    <span style={{fontSize: "0.7em", color: 'grey'}}>{eachReview.reviewer_desc}</span>
                                                </div>
                                                <div style={{display: 'inline-block', position: "absolute", bottom: '0px', marginLeft: '10px'}}>
                                                    <span style={{fontSize: "0.9em", fontWeight: "bold"}}>{eachReview.rating}</span>
                                                    <span class="fa fa-star checked1" style={{fontSize: "0.7em", marginLeft: "5px"}}></span>
                                                    <span style={{fontSize: "0.7em", marginLeft: '8px', color: 'grey'}}>on {eachReview.date_posted}</span>
                                                </div>
                                            </div>
                                            <div className="actual-review-box" style={{marginTop: "20px", width: "80%"}}>
                                                <div>
                                                    <p className="review-summary" style={{fontWeight: "bold", fontSize: "0.9em"}}>{eachReview.review_summary}</p>
                                                    <p className="review-text" style={{color: 'grey', fontSize: "0.8em"}}>{eachReview.review_text}</p>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })
                            }
                        </div>
                        
                    </div>
                </div>
            );

            let whyJoinUs = (
                <div>
                    <div style={{marginBottom: "25px"}}>
                        <h3 style={{fontSize: "1.25em", fontWeight: "bold"}}>About {this.state.companyData.name}</h3>
                        <p style={{fontSize: "0.8em", color: "#474747", padding:"15px 10px 10px 0px"}}>{this.state.companyData.aboutTheCompany.description}</p>

                        <a id="tp" onClick={this.photoLinkClickHandler} style={{fontSize: "0.8em"}}>Check out all our photos</a>
                    </div>

                    <div style={{marginTop: "40px", marginBottom: "25px"}}>
                        <h3 style={{fontSize: "1.25em", fontWeight: "bold"}}>Our Work Culture</h3>
                        {
                            this.state.companyData.whyJoinUs.companyCulture.map((eachCulture) => {
                                return (
                                    <div>
                                        <p style={{fontSize: "0.75em", color: "#747474"}}>{eachCulture.culture_text}</p>
                                    </div>
                                );
                            })
                        }
                    </div>

                    <div style={{marginTop: "40px"}}>
                        <h3 style={{fontSize: "1.25em", fontWeight: "bold"}}>Our Values</h3>
                        <div>
                            {this.state.companyData.whyJoinUs.companyValues.map((eachValue) => {
                                return (
                                    <div>
                                        <h4 style={{fontSize: "1em"}}>{eachValue.value_title}</h4>
                                        <p style={{fontSize: "0.75em", color: "#747474"}}>{eachValue.value_description}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            );

            let reviews = (
                <div>
                    <div style={{marginBottom: "7px"}}>
                        <h3 style={{fontWeight: "bold", display: "inline-block"}}>{this.state.companyData.name} Employee Reviews</h3>
                        <span><button style={{backgroundColor: "white", border: "1px solid #D3D3D3", fontWeight: "bold", color: "rgb(37, 87, 167)", borderRadius: "10px", padding: "5px 10px", fontSize: "0.8em", float: 'right', margin: "12px"}}>Review this company</button></span>
                    </div>
                    <div style={{borderRadius: "10px 10px 0px 0px", backgroundColor: '#f3f2f1', padding: '15px', fontSize: '0.85em'}}>
                        <div className="row">
                            <div className="col-md-6">
                                <label className="em95-bold">Job Title</label>
                                <div className="dropdown">
                                    <button className="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" style={{minWidth: "100%", textAlign: "left", border: "1px solid #747474", padding:"10px"}}>All
                                    <span className="glyphicon glyphicon-menu-down" style={{float: "right", display: "inline-block", marginTop: "2px"}}></span></button>
                                    <ul className="dropdown-menu" style={{minWidth: "100%"}}>
                                        <li>All</li>
                                        <li className="divider"></li>
                                        <li className="dropdown-header" style={{paddingLeft: "0px"}}>Dropdown header 1</li>
                                        <li>HTML</li>
                                        <li>CSS</li>
                                        <li>JavaScript</li>
                                        <li className="divider"></li>
                                        <li className="dropdown-header" style={{paddingLeft: "0px"}}>Dropdown header 2</li>
                                        <li>About Us</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <label className="em95-bold">Location</label>
                                <div className="dropdown">
                                    <button className="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" style={{minWidth: "100%", textAlign: "left", border: "1px solid #747474", padding:"10px"}}>United States
                                    <span className="glyphicon glyphicon-menu-down" style={{float: "right", display: "inline-block", marginTop: "2px"}}></span></button>
                                    <ul className="dropdown-menu">
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>JavaScript</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="row" style={{padding: "15px 15px 20px 15px"}}>
                            <p className="em95-bold">Ratings by category</p>
                            <div className="rc">3.3 {'\u00A0'}<span class="fa fa-star checked1"></span>{'\u00A0'} Work-Life Balance</div>
                            <div className="rc">3.3 {'\u00A0'}<span class="fa fa-star checked1"></span>{'\u00A0'} Pay & Benefits</div>
                            <div className="rc">3.3 {'\u00A0'}<span class="fa fa-star checked1"></span>{'\u00A0'} Job Security & Advancement</div>
                            <div className="rc">3.3 {'\u00A0'}<span class="fa fa-star checked1"></span>{'\u00A0'} Management</div>
                            <div className="rc">3.3 {'\u00A0'}<span class="fa fa-star checked1"></span>{'\u00A0'} Culture</div>
                        </div>
                    </div>
                    <div style={{padding: "15px 15px 20px 15px", marginTop: "5px", backgroundColor: '#f3f2f1', borderRadius: "0 0 10px 10px"}}>
                        <p className="em85-bold">Sort by</p>
                        <div>
                            <button onClick={this.helpfulnessSortHandler} id="helpfulness-sort-btn" className="sortBtns">Helpfulness</button>
                            <button onClick={this.ratingSortHandler} id="rating-sort-btn" className="sortBtns">Rating</button>
                            <button onClick={this.dateSortHandler} id="date-sort-btn" className="sortBtns">Date</button>
                        </div>
                    </div>
                    <div style={{paddingLeft: "25px"}}>
                        {
                            this.state.companyData.aboutTheCompany.top5reviews.map((eachReview) => {
                                return (
                                    <div className="each-review-box" style={{paddingTop: "30px", paddingBottom: "5px", borderBottom: "1px solid #DADADA"}}>
                                        <div className="review-head" style={{position: "relative"}}>
                                            {/* <img src="/images/user-icon.png" alt="User Icon" width="40px" height="40px" /> */}
                                            <div style={{display: "inline-block", height: "70px", width: "75px", marginTop: "-10px"}}>
                                                <p style={{textAlign: "center", fontWeight: "bold", fontSize: "1.25em", width: "65%", margin: "auto", borderBottom: "3px dotted grey"}}>{eachReview.rating}</p>
                                                {/* hello */}
                                                <span style={{fontSize: "0.55em", paddingLeft: "5px"}}>
                                                {[...Array(parseInt(eachReview.rating))].map((star) => { 
                                                    return (         
                                                    // <span className="star">&#9733;</span>        
                                                    <span class="fa fa-star checked1"></span>
                                                    );
                                                })}
                                                {[...Array(5 - parseInt(eachReview.rating))].map((star) => { 
                                                    return (         
                                                    // <span className="star">&#9733;</span>        
                                                    <span class="fa fa-star empty1"></span>
                                                    );
                                                })}
                                            </span>
                                            </div>
                                            <div style={{display: 'inline-block', position: 'absolute', marginTop: '-3px', marginLeft: '10px'}}>
                                                <p className="review-summary" style={{fontWeight: "bold", fontSize: "0.9em"}}>{eachReview.review_summary}</p>
                                                {/* <span style={{fontSize: "0.7em", color: 'grey'}}>{eachReview.reviewer_desc}</span> */}
                                            </div>
                                            <div style={{display: 'inline-block', position: "absolute", bottom: '10px', marginLeft: '10px'}}>
                                                {/* <span style={{fontSize: "0.9em", fontWeight: "bold"}}>{eachReview.rating}</span>
                                                <span class="fa fa-star checked1" style={{fontSize: "0.7em", marginLeft: "5px"}}></span> */}
                                                <span style={{fontSize: "0.7em", color: 'grey'}}>{eachReview.reviewer_desc}</span>
                                                <span style={{fontSize: "0.7em", marginLeft: '3px', color: 'grey'}}> - {'\u00A0'}{eachReview.date_posted}</span>
                                            </div>
                                            {/* <div className="actual-review-box" style={{display:"inline-block", marginTop: "20px", width: "80%"}}>
                                                <div>
                                                    <p className="review-summary" style={{fontWeight: "bold", fontSize: "0.9em"}}>{eachReview.review_summary}</p>
                                                    <p className="review-text" style={{color: 'grey', fontSize: "0.8em"}}>{eachReview.review_text}</p>
                                                </div>
                                            </div> */}
                                        </div>
                                        <div className="actual-review-box" style={{marginTop: "10px", width: "80%", marginLeft: "85px"}}>
                                            <div>
                                                {/* <p className="review-summary" style={{fontWeight: "bold", fontSize: "0.9em"}}>{eachReview.review_summary}</p> */}
                                                <p className="review-text" style={{color: '#828282', fontSize: "0.8em"}}>{eachReview.review_text}</p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            );

            let salaries = (
                // <div>
                //     <h3 style={{fontWeight: "bold", display: "inline-block"}}>{this.state.companyData.name} salaries: How much does {this.state.companyData.name} pay?</h3>
                //     <div className="row" style={{marginTop: "15px"}}>
                //         <div className="col-md-6">
                //             <label className="em95-bold">Job Title</label>
                //             <div className="dropdown">
                //                 <button className="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" style={{minWidth: "100%", textAlign: "left", border: "1px solid #747474", padding:"10px"}}>All
                //                 <span className="glyphicon glyphicon-menu-down" style={{float: "right", display: "inline-block", marginTop: "2px"}}></span></button>
                //                 <ul className="dropdown-menu" style={{minWidth: "100%"}}>
                //                     <li>All</li>
                //                     <li className="divider"></li>
                //                     <li className="dropdown-header" style={{paddingLeft: "0px"}}>Dropdown header 1</li>
                //                     <li>HTML</li>
                //                     <li>CSS</li>
                //                     <li>JavaScript</li>
                //                     <li className="divider"></li>
                //                     <li className="dropdown-header" style={{paddingLeft: "0px"}}>Dropdown header 2</li>
                //                     <li>About Us</li>
                //                 </ul>
                //             </div>
                //         </div>
                //         <div className="col-md-6">
                //             <label className="em95-bold">Location</label>
                //             <div className="dropdown">
                //                 <button className="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" style={{minWidth: "100%", textAlign: "left", border: "1px solid #747474", padding:"10px"}}>United States
                //                 <span className="glyphicon glyphicon-menu-down" style={{float: "right", display: "inline-block", marginTop: "2px"}}></span></button>
                //                 <ul className="dropdown-menu">
                //                 <li>HTML</li>
                //                 <li>CSS</li>
                //                 <li>JavaScript</li>
                //                 </ul>
                //             </div>
                //         </div>
                //     </div>
                //     <div className="row">

                //     </div>
                // </div>
                <div>
                    <div>
                        <h3 style={{fontWeight: "bold", display: "inline-block"}}>Average Salaries at {this.state.companyData.name}</h3>
                        <span style={{float: "right", margin: "15px"}}><button onClick={this.salaryModalOpener} style={{border: "none", color: "white", backgroundColor: "rgba(59, 125, 231, 1)", padding: "5px 45px", borderRadius: "10px", fontSize: "0.95em"}}>Add a salary</button></span>

                        

                    </div>

                    <div id="myModal2" className="modal2">

                        <div className="modal-content2 container">
                            
                            <div>
                                <form style={{fontSize: "0.8em"}}>
                                    <div className="form-group">
                                        <label htmlFor="salary-input-company-name">Company Name</label>
                                        <input className="form-control" type="text" id="salary-input-company-name"/>
                                    </div>
                                    <div className="form-group">
                                        <label>Are you currently working at this company?</label>
                                        <div class="checkbox">
                                            <label><input type="checkbox" value="" />Yes</label>
                                        </div>
                                        <div class="checkbox">
                                            <label><input type="checkbox" value="" />No</label>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="end-date">End Date</label>
                                        <input className="form-control" type="date" id="end-date"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="job-location">Job Location</label>
                                        <input className="form-control" type="text" id="job-location"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="pay">What's your pay at {this.state.companyData.name}</label>
                                        <input className="form-control" type="text" id="pay"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="pay">How many year's of relevant experience do you have?</label>
                                        <input className="form-control" type="text" id="pay"/>
                                    </div>
                                    <div id="company-benefits">
                                        <label htmlFor="company-benefits">Mode of Delivery</label>
                                        <br/>
                                        <select name="company-benefits" onChange={this.modeOfDeliveryFilterHandler} className="form-control" id="company-benefits">
                                            <option value="delivery" selected>Paid Time Off</option>
                                            <option value="delivery">Health Insurance</option>
                                            <option value="pickup">Life Insurance</option>
                                            <option value="pickup">Dental / Vision Insurance</option>
                                            <option value="pickup">Retirement / (401K)</option>
                                            <option value="pickup">Other Benefits</option>
                                        </select>
                                    </div>
                                    <button type="submit" style={{padding: "10px", margin: "15px 0px"}}>Submit Salary</button>
                                </form>
                            </div>

                            <button id="industryModalClose" onClick={this.salaryModalCloser}>Close</button>
                        </div>
                    </div>
                    {/* <div>
                        <form style={{fontSize: "0.8em"}}>
                            <div className="form-group">
                                <label htmlFor="salary-input-company-name">Company Name</label>
                                <input className="form-control" type="text" id="salary-input-company-name"/>
                            </div>
                            <div className="form-group">
                                <label>Are you currently working at this company?</label>
                                <div class="checkbox">
                                    <label><input type="checkbox" value="" />Yes</label>
                                </div>
                                <div class="checkbox">
                                    <label><input type="checkbox" value="" />No</label>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="end-date">End Date</label>
                                <input className="form-control" type="date" id="end-date"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="job-location">Job Location</label>
                                <input className="form-control" type="text" id="job-location"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="pay">What's your pay at {this.state.companyData.name}</label>
                                <input className="form-control" type="text" id="pay"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="pay">How many year's of relevant experience do you have?</label>
                                <input className="form-control" type="text" id="pay"/>
                            </div>
                            <div id="company-benefits">
                                <label htmlFor="company-benefits">Mode of Delivery</label>
                                <br/>
                                <select name="company-benefits" onChange={this.modeOfDeliveryFilterHandler} className="form-control" id="company-benefits">
                                    <option value="delivery" selected>Paid Time Off</option>
                                    <option value="delivery">Health Insurance</option>
                                    <option value="pickup">Life Insurance</option>
                                    <option value="pickup">Dental / Vision Insurance</option>
                                    <option value="pickup">Retirement / (401K)</option>
                                    <option value="pickup">Other Benefits</option>
                                </select>
                            </div>
                            <button type="submit" style={{padding: "10px", margin: "15px 0px"}}>Submit Salary</button>
                        </form>
                    </div> */}
                    <div id="salary-container">
                        {
                            this.state.companyData.salaries.map((eachSalaryDetail) => {
                                return (
                                    <div className="salaryCard" style={{border: "1px solid grey"}}>
                                        <div className="salary-role-name"><b>{eachSalaryDetail.role}</b></div>
                                        <div className="salary-salary" style={{fontSize: "0.75em"}}>${eachSalaryDetail.salary} {eachSalaryDetail.salary_unit}</div>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            );

            let benefits = (
                <div>
                    BENEFITS
                </div>
            );

            let photos = (
                <div>
                    PHOTOS
                </div>
            );

            let jobs = (
                <div>
                    JOBS
                </div>
            );

            let qNa = (
                <div>
                    Q and A
                </div>
            );

            let interviews = (
                <div>
                    INTERVIEWS
                </div>
            );

            let dataToRender = snapShotData;

            switch (this.state.navBtnClicked) {
                case 'Snapshot':
                    dataToRender = snapShotData;
                    break;

                case 'Why Join Us':
                    dataToRender = whyJoinUs;
                    break;
    
                case 'Reviews':
                    dataToRender = reviews;
                    break;
        
                case 'Salaries':
                    dataToRender = salaries;
                    break;
            
                case 'Benefits':
                    dataToRender = benefits;
                    break;
                
                case 'Photos':
                    dataToRender = photos;
                    break;
                    
                case 'Jobs':
                    dataToRender = jobs;
                    break;
                        
                case 'Q&A':
                    dataToRender = qNa;
                    break;
                            
                case 'Interviews':
                    dataToRender = interviews;
                    break;

                default:
                    break;
            }

        let data = (
            <div className="container">
                <div id="data">
                    {dataToRender}
                </div>
            </div>
        );


        htmlToDisplay = (
            <div>
                {topHalf}
                {data}
            </div>
        );

        return (
            <div>
                {htmlToDisplay}
            </div>
        );
    }
}

export default JSCompanyReviewsTab;