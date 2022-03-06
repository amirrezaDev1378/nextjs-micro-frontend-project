import MainPage from "@main/dashboard/pages/main/main";
import getSSRFunctions from "@main/dashboard/pages/main/ServerSide";

const index = (props) => {
  return (
    <>
      <MainPage  {...props}/>
    </>
  );
};
const SSR = getSSRFunctions();
const SSRStatus = SSR.status;


/**
 * uncomment this if you wanna use getServerSideProps.
 */

export const getServerSideProps = async(ctx) => {
  const props = SSR.functions.getServerSideProps(ctx);
  return props;
}


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
