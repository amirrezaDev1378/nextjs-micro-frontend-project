## Next JS micro front-end project

  

As you know the micro front-end is a new and very popular pattern to develop big front-end projects.

If you want to use only React.js or maybe other frameworks, There are several easy ways to do that, but in Next JS it will need a complex setup to do that, but this repository will help you!

There are some packages and ways to create a micro front-end based Next JS project, but they have some issues with Next JS:

 - You can not create routes in your micro project

 - It may run various local hosts to manage your micro-projects

 - You can not use Next JS server-side features such as getServerSideProps

 - You can not create API routes in micro-projects

 - It can create performance issues

 - You may need to install any packages you need for every micro-projects

  

This repository has solved all these problems!

How to use this project?

You need to install yarn first if you don't have it you can install it using :

`npm install yarn -g`

Then you have to install nodemon:

`yarn add nodemon -g`

  

After that, you can clone (or download and unzip) the repository and then in the root folder run `yarn`

  

And now you're ready to start the project!

`yarn dev`

-----------------------------------------------

How to add and sync a micro project?

1. Copy the `initialMicroProject` to the `projects` directory and rename it as you wish.

2. Open the micro project, and then open the `package.json`.

3. Rename your project `"name"` to what you desire, But it should start with `@` and have a `/` in it for example: `@main/test-micro-project`

4. In your micro-project you will no longer use pages to make a route, you will use `routes` instead.

5. open `RoutesInfo.js` and you should address your micro project in the `routePath` section for example if your project folder name is `test` you should write: `routePath: "../test/routes"`

(You have to come one directory up using `../` and then write your project path.

6. open the `main` folder in the projects folder, find `getRoutes.js` and open it

7. first `require` your micro-project `RoutesInfo.js` file in that file for example :

`const dashboardRoutes = require("../dashboard/RoutesInfo");`

8. In the `SetRoute` function add your file to the array like this :

`dashboardRoutes().routeInfo.routePath`

9. We are done! now open your micro project and make your routes in the `routes` folder just like you do in Next JS.

But there is an important note :

You can not use your file in your micro-project like used to do.

You have to create another folder at the root of your micro-project (the name doesn't matter I will use `pages` for example)

You create a component in the pages folder in then you will import and use it in your routes like this :

`import MainPage from "@main/test/pages/main/main";`

`@main/test` is the name you chose in your micro-project `package.json`

  

That's it!

Now you can write your code (outside of the routes folder, in any other place).

  

---------------------------------------

How to use API routes?

just like you create normal pages, you should create a folder called `api` in `routes` folder

Then import your server-side code from another folder (like you do to create pages)

this is an example of how you can use it :

(this is in the `routes` folder)

  


    import {RequestHandler} from "@main/dashboard/apis/testAPI/index";
    
      
    
    export default function handler (req, res) {
    
    RequestHandler(req, res);
    
    }

----------------------------------------

How to use things like getServerSideProps ?

As you can see in example pages there are next server-side functions commented.

You should have another file to handle the functions.

This should be in your `routes` folder



    export const getServerSideProps = async(ctx) => {
    
    const props = SSR.functions.getServerSideProps(ctx);
    
    return props;
    
    }



and in another folder that you create your page you have to use this template :


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


and import it in your route as you know :

`import getSSRFunctions from "@main/test/pages/main/ServerSide";`

  

That's it leave the routes folder and write your code in ServerSide.js (for e.g) file!

  

Using tests:

This repository uses `cypress` you can write tests in the cypress folder (root folder of the project)

these commands are defined to use :

  

`yarn cypress:run-all-tests` : run all tests in terminal

`yarn cypress:run-test` : run a single `spec` test file

`cypress:run-project` : --- not currently available to use ---

  

------------------------

How to install a package?

To install a package that you can access in all of your micro-projects you should use the command in the root folder (not in your micro-project folder) :

  

`yarn add package-name -W`

----------------------------

example micro-projects :

there are some examples of micro-projects with :

Material UI and configuration,

socket.io,

Axios, SWR, ...

------------------------------

In the end, I want to mention a few things:

 * This project is a new project, and It's in the beginning stage of development, so it's not currently stable.
 * If I see that people like this project, and It's worth spending time, I will add some perfect features
 * You can contact me using: `rezarezaamir731@gmail.com`
 - Please if you like this project, like and share the GitHub
   repository.

  

-----------------------------

[To-do]:

* Create an NPM package, so you can create a project or a micro project using a command like these:

    `npx create-mf-next-app app-name`

	and

    `npx add-micro-project micro-project-name --template mui`

  

* improve the document and examples (maybe creating a website)

  

*Add a command-line tool with these features:

get all routes

detect duplicated routes paths

....
