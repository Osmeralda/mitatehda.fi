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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris bibendum, nisi non fringilla tempus, justo ipsum pharetra tortor, et imperdiet risus nibh quis nibh. Aenean ut sollicitudin tellus, at lobortis quam. Integer mattis vulputate odio et molestie. Nullam ut leo ornare, pretium diam porta, egestas est. Sed ac turpis id risus gravida molestie nec id turpis. Fusce sit amet mauris mi. Vivamus suscipit maximus diam, eu euismod leo blandit non. Sed condimentum, massa at laoreet suscipit, leo enim dapibus ligula, sed convallis lorem enim at lacus. Sed at dui a metus tempus porta. Quisque quis turpis risus. Vivamus sollicitudin eros.
          </p>
          <Button href='https://www.facebook.com/Mit%C3%A4Tehd%C3%A4fi-104893475469082' className="infoButton">Ota yhteyttä!</Button>
        </div>
    </div>
  )
}
