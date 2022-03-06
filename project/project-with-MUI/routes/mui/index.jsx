import MainPage from "@main/project-mui/pages/main/main";
import getSSRFunctions from "@main/project-mui/pages/main/ServerSide";
// this is because we are using mui
import React from "react";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider, CssBaseline } from "@mui/material";
// note that whenever we what to address to our project in the "routes" folder, we need to add the the name in package.json and then address it!
// And when we use the package.json name , whe are in the route folder of the project
import createEmotionCache from "@main/project-mui/utility/createEmotionCache";
import mainTheme from "@main/project-mui/styles/theme/mainTheme";

// this is for prop-types
import PropTypes from 'prop-types';
const clientSideEmotionCache = createEmotionCache();

const index = (props) => {
  let emotionCache = clientSideEmotionCache;
  return (
    <>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={mainTheme}>
          <CssBaseline />
          <MainPage {...props} />
        </ThemeProvider>
      </CacheProvider>
    </>
  );
};
const SSR = getSSRFunctions();
const SSRStatus = SSR.status;

/**
 * uncomment this if you wanna use getServerSideProps.
 */

export const getServerSideProps = async (ctx) => {
  const props = SSR.functions.getServerSideProps(ctx);
  return props;
};

/**
 * uncomment this if you wanna use getStaticProps.
 */

// export const getStaticProps = async (ctx) => {
//   const props = SSR.functions.getStaticProps(ctx);
//   return props;
// }

/**
 * uncomment this if you wanna use getStaticPaths.
 */

// export const getStaticPaths = async (ctx) => {
//   const paths = SSR.functions.getStaticPaths(ctx);
//   return paths;
// }

export default index;

index.propTypes = {
  emotionCache: PropTypes.object,
};


// TODO : create a template so using mui be much more easier
