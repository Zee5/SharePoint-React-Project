# SharePoint Framework
## Why did you choose this SharePoint framework and What problem does it solve?

The SharePoint Framework (SPFx) is a page and web part model that provides full support for client-side SharePoint development, easy integration with SharePoint data, and support for open source tooling. With the SharePoint Framework, you can use modern web technologies and tools in your preferred development environment to build productive experiences and apps that are responsive and mobile-ready from day one. The SharePoint Framework works for SharePoint Online and soon also for on-premises (SharePoint 2016 Feature Pack 2).

#### Client-side web parts are client-side components that run inside the context of a SharePoint page. Client-side web parts can be deployed to SharePoint Online, and you can also use modern JavaScript tools and libraries to build them.+
### Why does one use it?
If you are in Sharepoint environment, it is the best known client side object model. 
###### What are the alternatives?
As fas as my knowldge of SharePoint, I do not know other SharePoint Patterns and Practices which is  an open source initiative to this framework. 
 

##### What is the history of this technology and who built it?
SharePoint started as an on-premise product back in 2001. It is Owned and maintained by Microsoft company.  It picked up a lot of users along the way, and a large developer community to extend and shape it in ways that we couldn’t foresee. For the most part, the extensibility that customers did followed the same patterns and practices that the developers inside the team used. Things like web parts, SharePoint feature XML, etc. were all the same, and a large majority of the features were written in C#, compiled to DLLs, and deployed to the servers.

While that solution works well in an environment with only one enterprise, it doesn’t work and scale in the cloud, where multiple tenants all run side-by-side. Because of this, traditional extensibility models don’t work, and alternate methods were introduced. Two popular ways of customizing SharePoint are through client-side JavaScript injection and the SharePoint add-in model. Both of these solutions have pros and cons. Let’s start with script injection.


##### What is your opinion on the technology after having built something with it?
It is nice to add react UI compnents to SharePoint framework.  

##### What resources do you recommend for interested students?
https://github.com/SharePoint/PnP
##### What article or forum was most helpful to you in learning this?
Microsoft developer network and Sharepoint Patterns and Pratices 
##### What are 3 interview questions one might be asked about this technology?
* Why to use SharePoint Framework- SPFx?
* How do you implement  SharePoint client-side web parts?
* How do you  integration SharePoint framework to  SharePoint data, and provides support for open source tooling development.


Client-side web parts support:

Building with HTML and JavaScript.
Both SharePoint online and on-premises environments.

##### How to use 
To create a new web part project
Create a new project directory in your favorite location.


Copy
mkdir helloworld-webpart
Go to the project directory.


Copy
cd helloworld-webpart
Create a new HelloWorld web part by running the Yeoman SharePoint Generator.


Copy
yo @microsoft/sharepoint
When prompted:

Accept the default helloworld-webpart as your solution name, and then select Enter.
Select SharePoint Online only (latest), and select Enter.
Select Use the current folder for where to place the files.
Select N to require the extension to be installed on each site explicitly when it's being used.
Select WebPart as the client-side component type to be created.
The next set of prompts ask for specific information about your web part:

Accept the default HelloWorld as your web part name, and then select Enter.
Accept the default HelloWorld description as your web part description, and then select Enter.
Accept the default No javascript web framework as the framework you would like to use, and then select Enter.
Yeoman SharePoint generator prompts to create a web part client-side solution

At this point, Yeoman installs the required dependencies and scaffolds the solution files along with the HelloWorld web part. This might take a few minutes.

When the scaffold is complete, you should see the following message indicating a successful scaffold.

SharePoint client-side solution scaffolded successfully

For information about troubleshooting any errors, see Known issues.

Using your favorite Code Editor
Because the SharePoint client-side solution is HTML/TypeScript based, you can use any code editor that supports client-side development to build your web part, such as:

Visual Studio Code
Atom
Webstorm
SharePoint Framework documentation uses Visual Studio code in the steps and examples. Visual Studio Code is a lightweight but powerful source code editor from Microsoft that runs on your desktop and is available for Windows, Mac, and Linux. It comes with built-in support for JavaScript, TypeScript, and Node.js, and has a rich ecosystem of extensions for other languages (such as C++, C#, Python, PHP) and runtimes.

Preview the web part
To preview your web part, build and run it on a local web server. The client-side toolchain uses HTTPS endpoint by default. However, because a default certificate is not configured for the local dev environment, your browser reports a certificate error. The SPFx toolchain comes with a developer certificate that you can install for building web parts.

To install the developer certificate and preview your web part
Switch to your console, ensure that you are still in the helloworld-webpart directory, and then enter the following command:


Copy
gulp trust-dev-cert
Now that we have installed the developer certificate, enter the following command in the console to build and preview your web part:


Copy
gulp serve
This command executes a series of gulp tasks to create a local, node-based HTTPS server on localhost:4321 and launches your default browser to preview web parts from your local dev environment.

Gulp serve web part project

SharePoint client-side development tools use gulp as the task runner to handle build process tasks such as:

Bundling and minifying JavaScript and CSS files.
Running tools to call the bundling and minification tasks before each build.
Compiling SASS files to CSS.
Compiling TypeScript files to JavaScript.
Visual Studio Code provides built-in support for gulp and other task runners. Select Ctrl+Shift+B on Windows or Cmd+Shift+B on Mac to debug and preview your web part.

SharePoint Workbench is a developer design surface that enables you to quickly preview and test web parts without deploying them in SharePoint. SharePoint Workbench includes the client-side page and the client-side canvas in which you can add, delete, and test your web parts in development.

SharePoint Workbench running locally

To use SharePoint Workbench to preview and test your web part
To add the HelloWorld web part, select the add icon. This opens the toolbox where you can see a list of web parts available for you to add. The list includes the HelloWorld web part as well other web parts available locally in your development environment.

## y

This is where you include your WebPart documentation.

### Building the code

```bash
git clone the repo
npm i
npm i -g gulp
gulp
```

This package produces the following:

* lib/* - intermediate-stage commonjs build artifacts
* dist/* - the bundled script, along with other resources
* deploy/* - all resources which should be uploaded to a CDN.

### Build options

gulp clean - TODO
gulp test - TODO
gulp serve - TODO
gulp bundle - TODO
gulp package-solution - TODO


Building with HTML and JavaScript.
Both SharePoint online and on-premises environments.

##### How to use 
To create a new web part project
Create a new project directory in your favorite location.



* mkdir helloworld-webpart
Go to the project directory.
* cd helloworld-webpart
* Create a new HelloWorld web part by running the Yeoman SharePoint Generator.
yo @microsoft/sharepoint
* When prompted:
Accept the default helloworld-webpart as your solution name, and then select Enter.
Select SharePoint Online only (latest), and select Enter.
Select Use the current folder for where to place the files.
Select N to require the extension to be installed on each site explicitly when it's being used.
Select WebPart as the client-side component type to be created.
The next set of prompts ask for specific information about your web part:

Accept the default HelloWorld as your web part name, and then select Enter.
Accept the default HelloWorld description as your web part description, and then select Enter.
Accept the default No javascript web framework as the framework you would like to use, and then select Enter.
Yeoman SharePoint generator prompts to create a web part client-side solution

At this point, Yeoman installs the required dependencies and scaffolds the solution files along with the HelloWorld web part. This might take a few minutes.

When the scaffold is complete, you should see the following message indicating a successful scaffold.

SharePoint client-side solution scaffolded successfully

For information about troubleshooting any errors, see Known issues.

Using your favorite Code Editor
Because the SharePoint client-side solution is HTML/TypeScript based, you can use any code editor that supports client-side development to build your web part, such as:

Visual Studio Code
Atom
Webstorm
SharePoint Framework documentation uses Visual Studio code in the steps and examples. Visual Studio Code is a lightweight but powerful source code editor from Microsoft that runs on your desktop and is available for Windows, Mac, and Linux. It comes with built-in support for JavaScript, TypeScript, and Node.js, and has a rich ecosystem of extensions for other languages (such as C++, C#, Python, PHP) and runtimes.

Preview the web part
To preview your web part, build and run it on a local web server. The client-side toolchain uses HTTPS endpoint by default. However, because a default certificate is not configured for the local dev environment, your browser reports a certificate error. The SPFx toolchain comes with a developer certificate that you can install for building web parts.

To install the developer certificate and preview your web part
Switch to your console, ensure that you are still in the helloworld-webpart directory, and then enter the following command:


Copy
gulp trust-dev-cert
Now that we have installed the developer certificate, enter the following command in the console to build and preview your web part:


Copy
gulp serve
This command executes a series of gulp tasks to create a local, node-based HTTPS server on localhost:4321 and launches your default browser to preview web parts from your local dev environment.

Gulp serve web part project

SharePoint client-side development tools use gulp as the task runner to handle build process tasks such as:

Bundling and minifying JavaScript and CSS files.
Running tools to call the bundling and minification tasks before each build.
Compiling SASS files to CSS.
Compiling TypeScript files to JavaScript.
Visual Studio Code provides built-in support for gulp and other task runners. Select Ctrl+Shift+B on Windows or Cmd+Shift+B on Mac to debug and preview your web part.

SharePoint Workbench is a developer design surface that enables you to quickly preview and test web parts without deploying them in SharePoint. SharePoint Workbench includes the client-side page and the client-side canvas in which you can add, delete, and test your web parts in development.

SharePoint Workbench running locally

To use SharePoint Workbench to preview and test your web part
To add the HelloWorld web part, select the add icon. This opens the toolbox where you can see a list of web parts available for you to add. The list includes the HelloWorld web part as well other web parts available locally in your development environment.

## y

This is where you include your WebPart documentation.

### Building the code


```bash
git clone the repo
npm i
npm i -g gulp
gulp
```

This package produces the following:

* lib/* - intermediate-stage commonjs build artifacts
* dist/* - the bundled script, along with other resources
* deploy/* - all resources which should be uploaded to a CDN.

### Build options

gulp clean - TODO
gulp test - TODO
gulp serve - TODO
gulp bundle - TODO
gulp package-solution - TODO
