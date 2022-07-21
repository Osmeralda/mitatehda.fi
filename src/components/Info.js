import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import * as styles from '../styles/global.css'
import { Button } from 'reactstrap'


export default function Info() {
  return (
    <div className='infobox'>
    <div>
        <StaticImage className='imageInfo' src='../images/OskariKurtti1.jpg' />
        </div>
        <div>
          <p>
          Moikka!
          </p>
          <p>
          Olen Oskari Kurtti ja olen luonut tämän sivun harjoituksena itselleni, sekä auttaakseni esittelemään Rukan alueen mahtavia yrityksiä kaikille. Tarkoituksena olisi että näiltä sivuilta löytyisi jokainen Rukan alueen yritys, mikä helpottaisi matkailijoita nauttimaan ajastaan Rukalla.</p><p> Tällä hetkellä olen keskittynyt vain talvikauteen, mutta ensi kesäksi olisi tarkoitus saada myös kasvavan kesäsesongin tarjonta mukaan. Jos olet Rukan alueen yrittäjä ja haluaisit yrityksesi näkyviin sivuille, tai korjata yrityksesi tietoja/kuvaa, olethan yhteydessä Facebookin kautta. Tai jos sinulla on yritys, jonka haluaisit esittelyyn tällä paikalla tai "valitut" osiossa, olethan yhteydessä.
          </p>
          <Button href='https://www.facebook.com/Mit%C3%A4Tehd%C3%A4fi-104893475469082' className="infoButton">Ota yhteyttä!</Button>
        </div>
    </div>
  )
}
