import React from 'react';
import CookieConsent from 'react-cookie-consent';

function Layout({ children }) {
  return (
    <div>
    {children}
    <CookieConsent
    enableDeclineButton
    overlay
    location="bottom"
    buttonText="Accept"
    declineButtonText="Decline"
    cookieName="gatsby-gdpr-google-analytics"
    expires={180}
    style={{background: "white"}}
    buttonStyle={{ background:"green", fontWeight:"bold" }}
    declineButtonStyle={{ fontWeight: "bold"}}>
<p>Tämä sivusto käyttää Google analytics palvelua käyttäjämäärien seurantaan. Jos et halua osallistua paina "DECLINE". Kieltäytyminen ei vaikuta sivuston käyttöön.</p>
</CookieConsent>

</div>
  )
}

export default Layout