import * as React from "react";
import { Helmet } from "react-helmet";

import { useConfig } from "gatsby-theme-advanced";

import Layout from "../layouts";

const contentStyles = {fontFamily: 'Alfa Slab One', margin:'40px'}

const mapouterStyles = {position:'relative',textAlign:'right',height:'500px',width:'1600px'}

const colomnStyles = { display: 'table', width: '100%', tableLayout: 'fixed', borderSpacing: '10px'}

const gmap_canvasStyles = {overflow:'hidden',background:'none!important',height:'500px',width:'1600px'}
const buttonStyles = { backgroundColor:'#d83850',display: 'table-cell', borderRadius: '8px', textAlign: 'center',
color: 'white',fontFamily: 'Alfa Slab One',textDecoration: 'none',margin: '4%',marginRight: '60%'}

const AboutPage = (): JSX.Element => {
  const config = useConfig();

  return (
    <Layout>
      <div>
        <Helmet title={`About | ${config.website.title}`} />
     
         <div style={contentStyles}>
         <h3>
About us
</h3>
<br></br>
<br></br>
         <p><b>PANORAMA RENT A CAR</b> established in 2022 at the emirates of Abu Dhabi, United Arab Emirates. Our first branch is located strategically within Al Nayhan
District to serve the booming area at the center of Abu Dhabi and beyond.
&nbsp;&nbsp;&nbsp;&nbsp;</p>
<br></br>
<p>
We provide flexible & affordable car rental contracts fit-for-purpose and carefully customized to serve our clients needs.
<br></br>
<br></br>
At <b>PANORAMA RENT A CAR</b>, we are
committed on delivering the highest level of customer satisfaction which remains at the top of our priory. We do ensure that our vehicles are safe, well maintained,
and fully insured at all times. </p>
<br></br>
<p>Furthermore, we do provide 24/7 road side assistant to our clients as a free service at all times.
We are relentlessly exploring local markets to acquire distinguished brand-new cars which will add value to the customers for short, mid, and long term lease
contracts with a wide range of economy and practical collection of cars.</p>
<br></br>
<br></br>
<h3>
Our Services
</h3>
<br></br>
<br></br>
<p>We provide<b> Daily, Weekly, Monthly </b>and Annual lease contracts on flexible and affordable
terms as part of our commitment towards our partners.</p>
<br></br>
<b>4-Seaters Cars :</b><p>Wide verity of reliable and convenient
economy cars.</p>
<br></br>
<b>7-Seaters Cars :</b><p>Provide partners extra passengers space on
their journey.</p>
<br></br>
<b>Buses & Vans :</b><p>Serving the need of our partners who needs
to commute large number of passengers.</p>
<br></br>
<b>Chilled Delivery Vehicles :</b><p>Providing our F&B partners with reliable and
safe Chilled Delivery Vehicles.</p>
<br></br>
<br></br>
<h3>
Mission 
</h3>
<p>Provide our partners and
clients with unmatchable car
rental experience. </p>
<br></br>
<br></br>
<h3>
Vision
</h3>
<p>Became a leading Car Rental agency
in UAE and GCC Markets while
participating effectively on the
development of the UAE economy. </p>
<br></br>
<br></br>
<h3>
Contact Us
</h3>
<br></br>
<br></br>
Panorama Rent a Car
<br></br>
Building 41
<br></br>
Al Nayhan District
<br></br>
Abu Dhabi
<br></br> United Arab
Emirates
<br></br>
<br></br>
Office : <a href="tel:971-2-6418811">+971-2-6418811</a>
<br></br>
Mobile : <a href="tel:971-52-7900414">+971-52-7900414</a>
<br></br>
Email : <a href="mailto: abc@example.com">info@panoramacars.ae</a>
<br></br>
P.O BOX: 110177
</div>
 </div>

<div style={buttonStyles}>
     <a style={colomnStyles} href="https://www.google.com/maps/place/Panorama+Rent+A+Car+-+Al+Hafiz+St+-+Al+Nahyan+-+E25+-+Abu+Dhabi/@24.4625916,54.3868063,17z/data=!4m6!3m5!1s0x3e5e691864e9fa93:0xae942f6d9cca5632!8m2!3d24.4625916!4d54.3868063!16s%2Fg%2F11tbz0dxv1?hl=en>"> Get Location</a>
  </div>
    <div style={mapouterStyles}>
    <div style={gmap_canvasStyles}>
      <iframe width="1600" height="1000" id="gmap_canvas" 
      src="https://maps.google.com/maps?q=panorama%20rent%20a%20car&t=&z=13&ie=UTF8&iwloc=&output=embed" 
      frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
        </iframe>
  </div>
</div>

    
    </Layout>
    
  );
};

export default AboutPage;
