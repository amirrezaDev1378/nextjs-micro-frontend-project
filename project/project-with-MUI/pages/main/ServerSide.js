const ServerSideFunctions = {
  getServerSideProps: true,
  getStaticProps: true,
  getStaticPaths: true,
};

const getServerSideProps = async (ctx) => {
  console.log("using server side props");

  return {
    props: {
      msg: "Hi there from server !",
    },
  };
};

const getStaticProps = async (ctx) => {
  return {
    props: {},
  };
};

const getStaticPaths = async (ctx) => {
  return {
    paths: [
      {
        params: {},
      },
    ],
    fallback: "blocking",
  };
};

export default function getSSRFunctions() {
  let SSRfunctions = {
    status: ServerSideFunctions,
    functions: {
      getServerSideProps: getServerSideProps,
      getStaticProps: getStaticProps,
      getStaticPaths:getStaticPaths
    },
  };
  return SSRfunctions;
}
