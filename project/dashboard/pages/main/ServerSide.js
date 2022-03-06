const ServerSideFunctions = {
  getServerSideProps: true,
  getStaticProps: true,
  getStaticPaths: true,
};

const getServerSideProps = async (ctx) => {
  console.log("getServerSideProps");

  return {
    props: {
      hello: "world",
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
