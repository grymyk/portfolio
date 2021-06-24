import * as React from 'react'
import Layout from '../components/layout'

const AboutPage = () => {
    const title = 'About Me';
    const content = `Hi there! I'm the proud creator of this site,
        which I built with Gatsby.`;

    return (
        <Layout pageTitle = {title}>
            <p>{ content }</p>
        </Layout>
    )
}

export default AboutPage
