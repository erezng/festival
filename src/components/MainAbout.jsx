import LaToya from '../images/LaToya.jpg'; // Tell webpack this JS file uses this image

function MainAbout() {
  return (
    <div> 
         <div className="row">
                <div className="col-md-8">
                    <h2>Office of Mayor LaToya Cantrell
                    </h2>
                    <p>
                        Mayor of New Orleans
                        Cantrell was inaugurated as mayor on May 7, 2018, the first woman to hold the position in the
                        city's
                        history.[28] Once
                        in office, she established a new Office of Youth and Families, with the goal of creating a
                        strategic
                        plan to address
                        families in crisis in the city. Cantrell also founded a Gun Violence Reduction Council, tasked
                        with
                        finding solutions to
                        violent crime.[29] Starting with a push to rededicate hotel taxes collected within the city for
                        city
                        use, Cantrell has
                        focused on her #fairshare initiative to improve city infrastructure, public transportation,
                        public
                        parks, and green
                        spaces.[30] As part of that initiative, in October 2018 the City of New Orleans filed a lawsuit
                        against four opioid
                        manufacturers and distributors.[31]

                        During the 2019 session of the Louisiana Legislature, Cantrell negotiated the Fair Share
                        Agreement
                        with Governor John
                        Bel Edwards and city, state, and tourism officials. The agreement secured $50 million in upfront
                        funding for the city's
                        infrastructure needs as well as $26 million in annual recurring revenue for the city.[32]
                        Following
                        the approval of the
                        Fair Share Agreement, New Orleans voters approved 3 of the 4 proposals Cantrell and the City
                        Council
                        put on the ballot
                        in the 2019 general election. Voters approved a $500 million bond sale and a tax on short-term
                        rental properties, as
                        well the establishment of a Human Right Commission under the New Orleans Home Rule Charter.[33]

                        Awards
                        In 2016, Cantrell was given a lifetime achievement award by the presidents of Tulane, Loyola and
                        Xavier universities and
                        the University of New Orleans for her service to the community.[34]

                        2021 mayoral election
                        Main article: 2021 New Orleans mayoral election
                        Cantrell was re-elected to office by a wide margin in November 2021, securing 65% of the vote.
                        Her campaign focused
                        on the city's status in 2020 as a COVID-19 hotspot and her efforts, which at times were
                        unpopular,
                        to stop the disease's
                        spread. She also stressed the need for higher-paying jobs for city workers, better public health
                        outcomes and new
                        technologies for the future of New Orleans.
                    </p>
                </div>
                <div className="col-md-4"><img src={LaToya} alt="LaToya" /></div>
            </div>
    </div> 


  )
}

export default MainAbout