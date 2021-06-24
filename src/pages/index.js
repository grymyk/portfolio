import * as React from 'react';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
    const title = 'Home Page';
    const content = `I'm making this by following the Gatsby
          Tutorial.`;

    const imgProps = {
        alt: `gatsby logo`,
        src: `../images/icon.png`
    };

    return (
        <Layout pageTitle = { title }>
            <p>{ content }</p>
            <StaticImage { ...imgProps } />
        </Layout>
    )
}

export default IndexPage
