import React from "react"
import { Link, graphql, useStaticQuery } from 'gatsby';

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import Hero from "../components/hero"
import Nav from "../components/nav"

import Img from "gatsby-image"


const IndexPage = () => (


  <Layout >
    <SEO title="Home" />
    <Nav></Nav>
    <div style={{display: 'flex', justifyContent: 'center', height: '100vh'}}>
    <Image />
    <svg style={{ width: '80%', position: 'absolute', right: '0'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1502 1077.34"><defs></defs>
    <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1"><path style={{ fill: '#ef4538'}}  d="M74.93,871.45C65.3,859.13,60,843,60,826.13c0-.67,0-1.49,0-2.51l.12-3.85-.17-1.7V0H0V820.26a14.76,14.76,0,0,0,.08,1.5c0,1.45-.08,2.91-.08,4.37,0,62.93,41.72,115.06,96.16,124.22l1405.84,127V1017.1L104.35,890.85C93.31,888.5,82.92,881.66,74.93,871.45Z"/>
        </g>
    </g>
  </svg>
  <Hero />
  </div>
  </Layout>
)

export default IndexPage
