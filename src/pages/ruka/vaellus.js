import React from 'react'
import * as styles from "../../styles/keskukset.module.css"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import RukaSidebar from "../../components/RukaSidebar"
import { Container } from "reactstrap"
import { Helmet } from 'react-helmet'


export default function LasketteluRuka({ data }) {
    console.log(data)
    

    return (

        <Container>
        <div className="flexRow margingbottom bg">
    <div className="flexColumn width100">
        <Navbar />
    </div>
    </div>
    <div className={styles.resortPage}>
    <h1>
    Rukan ja lähialueen vaellusreitit!
    </h1>
    </div>
    <div className="flexRow">
                <div>
                <RukaSidebar />
                </div>

                <div className="hikingbox justify-content-end">
                    <div>
                    <h2>Valtavaara-pyhävaaran reitistö</h2>
                    <p>Konttaisen kuhaus, 2 km</p>
                    <p>Hirsilammen talvireitti, 4 km</p>
                    <p>Pyhän jyssäys, 6 km</p>
                    <p>Valtavaaran talvireitti, 5.5 km</p>
                    <p>Antinperän talvireitti, 4.4 km</p>
                    <Link to="https://www.luontoon.fi/valtavaara/talviretkeily" className="hikingButton" target="_blank">Klikkaa tästä reittikarttaan</Link>
                    </div>
                    <div>
        <StaticImage className='imageInfo-skiing' src='../../images/valtavaara.jpg' 
                 alt="Frosty tree with mountain in the back"
                 placeholder="blurred"
                 objectFit="cover"
                 objectPosition="bottom"
                 cropFocus="SOUTHEAST"
                   />
        </div>
                    </div>
                    </div>
                    <div className='hikingbox'>
                    <div>
        <StaticImage className='imageInfo-skiing' src='../../images/ilya-panasenko-9J8HJLTn41o-unsplash.jpg' 
                 alt="Snowy forest scenery forest"
                 placeholder="blurred"
                 objectFit="cover"
                 objectPosition="bottom"
                 cropFocus="SOUTHEAST"
                   />
        </div>
                    <div className='flexColumn'>
                    <h2>Karhunkierros</h2>
                    <p>82 km</p>
                    <Link to="https://www.luontoon.fi/karhunkierros/kartat" className="hikingButton" target="_blank">Klikkaa tästä reittikarttaan</Link>
                    </div>
        </div>
        <div>
        <div className='hikingbox justify-content-end'>
                    <div>
                    <h2>Oulangan patikointireitit</h2>
                    <p>Napapiirin nopia, esteetön reitti, 1 km</p>
                    <p>Keroharjun kuiskaus, 17 km</p>
                    <p>Kanjonin kurkkaus, 6 km</p>
                    <p>Rytikönkään reissu, 5 km</p>
                    <p>Kiutakönkään polku, 2 km</p>
                    <p>Hiiden hurmos, 5 km</p>
                    <p>Könkään keino, 8 km</p>
                    <p>Könkään kuohu, esteetön reitti, 200 m</p>
                    <p>Pieni karhunkierros, 12 km</p>
                    <Link to="https://www.luontoon.fi/oulanka/patikointireitit" className="hikingButton" target="_blank">Klikkaa tästä reittikarttaan</Link>
                    </div>
                    <div>
        <StaticImage className='imageInfo-skiing' src='../../images/alexander-ulbrich-VDmYHoB8SSg-unsplash.jpg' 
                 alt="Snowy river scenery"
                 placeholder="blurred"
                 objectFit="cover"
                 objectPosition="bottom"
                 cropFocus="SOUTHEAST"
                   />
        </div>
        </div>
        </div>
                <div className='hikingbox'>
                <div>
        <StaticImage className='imageInfo-skiing' src='../../images/mika-korhonen-5vq4DfXX7rs-unsplash.jpg' 
                 alt="A snowy slope and a tree"
                 placeholder="blurred"
                 objectFit="cover"
                 objectPosition="bottom"
                 cropFocus="SOUTHEAST"
                   />
        </div>
        <div>
                    <h2>Riisitunturin reitistö (33km Rukalta)</h2>
                    <p>Talvireitti Riisitunturin autiotuvalle 1,5 km</p>
                    <p>Talvireitti Riisin rääpäsy 4,3 km </p>
                    <p>Riisitunturin monitoimireitti 20 km</p>
                    <Link to="https://www.luontoon.fi/riisitunturi/talviretkeilyreitit" className="hikingButton" target="_blank">Klikkaa tästä reittikarttaan</Link>
                    </div>
                    </div>
                    
<div>
           <Footer />
           </div>
           <Helmet>
        <title>MitäTehdä.fi Ruka</title>
        <meta name="description" content="Kaikki Rukan ja lähialueiden vaellusreitit kätevästi yhdellä sivulla!" />
        <meta name="keywords" content="Pohjois-Suomi, Ruka, Kuusamo, vaellusreitit, kävelyreitit, Valtavaara, pyhävaara, riisitunturi, posio, kaupat, vuokraamot, ravintolat, laskettelu, hiihto, paljut, elämykset, elämys" />
        <meta property="og:title" content="MitäTehdä.fi" />
        <meta property="og:type" content="Kaikki pohjois-Suomen aktiviteetit listattuna" />
        <meta property='og:image' content='' />
        <meta property='og:locale' content='fi_FI' />
        <meta property='og:url' content='www.mitatehda.fi/ruka/vaellus' />
        <link rel="canonical" href="www.mitatehda.fi/ruka/vaellus" />
    </Helmet>
           </Container>
                  
    )
}