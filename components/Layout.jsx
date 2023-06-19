import Head from 'next/head';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

// Styling for the background
const backgroundStyle = {
  backgroundColor: '#C5BCB5'
}

// Styling for the layout container
const layoutStyle = {
  maxWidth: 1440,
  margin: '0 auto',
  padding: '0 2rem',
  backgroundColor: '#CFCCC5',
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh'
}

const Layout = (props) => (
  <div>
    <Head>
      {/* Define the title of the page */}
      <title>portfol.io</title>

      {/* Include Bootstrap CSS */}
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossorigin="anonymous"
      />

      {/* Include Bootstrap JS */}
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js"
        integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
        crossorigin="anonymous"
      ></script>
    </Head>
    <div style={backgroundStyle}>
      <div style={layoutStyle}>
        {/* Render the header component */}
        <Header />

        {/* Main content section */}
        <div style={{ flex: '1' }}>
          {/* Render the child components */}
          {props.children}
        </div>

        {/* Render the footer component */}
        <Footer/>
      </div>
    </div>
  </div>
)

export default Layout;
