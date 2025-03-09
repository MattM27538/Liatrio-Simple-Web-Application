# Matthew Martinez Liatrio Apprenticeship Personal Notes
- Trailing numbers refer to reference resource in [Resources.md](https://github.com/MattM27538/Liatrio-Simple-Web-Application/blob/main/Resources.md#resources).
## 03/07/25 -Intro to NodeJS
* Node.js is an open-source and cross-platform JavaScript runtime environment. [1]
* A Node.js app runs in a single process, without creating a new thread for every request. Node.js provides a set of asynchronous I/O primitives in its standard library that prevent JavaScript code from blocking and generally, libraries in Node.js are written using non-blocking paradigms, making blocking behavior the exception rather than the norm. [1]
* When Node.js performs an I/O operation, like reading from the network, accessing a database or the filesystem, instead of blocking the thread and wasting CPU cycles waiting, Node.js will resume the operations when the response comes back. This allows Node.js to handle thousands of concurrent connections with a single server without introducing the burden of managing thread concurrency, which could be a significant source of bugs. [1]
* npm is the standard package manager for Node.js. npm installs, updates and manages downloads of dependencies of your project. [3]
* Installing all dependencies if a project has a package.json file, by running npm install. You can also install a specific package by running npm install <package-name>. [3]
* Updating is also made easy, by running npm update. You can specify a single package to update as well: npm update <package-name>. [3]
* You can install a specific version of a package, by running npm install <package-name>@<version>. [3]
* The difference between devDependencies and dependencies is that the former contains development tools, like a testing library, while the latter is bundled with the app in production. [3]
* In Node.js you control the environment. Unless you are building an open source application that anyone can deploy anywhere, you know which version of Node.js you will run the application on. [4]

## 03/08/25 -Intro to ExpressJS, JSON minification, and Docker build best practices
### Express js
* Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
* Routing refers to determining how an application responds to a client request to a particular endpoint, which is a URI (or path) and a specific HTTP request method (GET, POST, and so on). [7]
* Each route can have one or more handler functions, which are executed when the route is matched. [7]
* Route definition takes the following structure:
  app.METHOD(PATH, HANDLER) app is an instance of express, METHOD is an HTTP request method, PATH is a path on the server and HANDLER is the function executed when the route is matched. [7]

### JSON minification
* JSON minification is the process of reducing the file size of a JSON file so that it can be parsed efficiently by web applications. [8]
* JSON minification works by removing unnecessary characters from a JSON file. This results in a much smaller file size, which can be parsed more quickly by the web application. [8]
* For example, removing unnecessary characters such as whitespace, line breaks, and comments can significantly reduce the file size without affecting the data itself. [8]
* Minifying a JSON file can be done manually or with the help of a minifier tool. [8]
* Minifying JSON has two main advantages: reduced file size and improved performance. [8]
* By reducing the size of a JSON file, web applications can parse it more quickly, resulting in improved performance. [8]
* Minifying JSON can also help to improve the security of web applications. By reducing the size of the JSON file, it is more difficult for malicious actors to gain access to sensitive information. [8]
* When minifying JSON, it’s important to follow best practices to ensure code quality and readability. [8]
* Start by making sure that there are no unnecessary characters or lines in the original JSON file prior to minifying. [8]
* If you’re using a tool that rewrites elements, it’s important to validate the syntax of the resulting file against the original. [8]
* Testing your application after minifying any file is key; if any errors are introduced then they can easily be traced back to the minification process. [8]
* It is important to consider the security implications of minifying a file. If the file contains sensitive information, it is important to ensure that the minified version is secure and not easily readable. [8]

### Docker build - Best Practices
* Use multi-stage builds - Multi-stage builds let you reduce the size of your final image. Everything that isn’t needed in the final image can be used in an earlier stage and discarded for the final stage as the final stage is what forms the final image. Split your     
  Dockerfile instructions into distinct stages to make sure that the resulting output only contains the files that are needed to run the application. [10]

  Using multiple stages can also let you build more efficiently by executing build steps in parallel. [10]

* Create reusable stages - If you have multiple images with a lot in common, consider creating a reusable stage that includes the shared components, and basing your unique stages on that. Docker only needs to build the common stage once. This means that your derivative    images use memory on the Docker host more efficiently and load more quickly. [10]

* Choose the right base image - When choosing an image, ensure it's built from a trusted source and keep it small. Examples: Docker Official Images, Verified Publisher images, and Docker-Sponsored Open Source images.
  When building your own image from a Dockerfile, ensure you choose a minimal base image that matches your requirements. A smaller base image not only offers portability and fast downloads, but also shrinks the size of your image and minimizes the number of 
  vulnerabilities introduced through the dependencies. [10]

  You should also consider using two types of base image: one for building and unit testing, and another (typically slimmer) image for production. In the later stages of development, your image may not require build tools such as compilers, 
  build systems, and debugging tools. A small image with minimal dependencies can considerably lower the attack surface.
  To ensure you get the same image every time you build can pin the image version to a specific digest. By pinning your images to a digest, you're guaranteed to always use the same image version, even if a publisher replaces the tag with a new image. [10]

  To exclude files not relevant to the build, without restructuring your source repository, use a .dockerignore file. [10]

  Building an image includes any base images, libraries, or other software you use in your build.  To keep your images up-to-date and secure, make sure to rebuild your image often, with updated dependencies.
  To ensure that you're getting the latest versions of dependencies in your build, you can use the --no-cache option to avoid cache hits. 
  Example: docker build --no-cache -t my-image:my-tag. [10]

* Don't install unnecessary packages - Avoid installing extra or unnecessary packages just because they might be nice to have. This allows for images to have reduced complexity, reduced dependencies, reduced file sizes, and reduced build times. [10]

* Decouple applications - As a rule of thumb each container you create should have only one concern. Decoupling applications into multiple containers makes it easier to scale horizontally and reuse containers. [10]

  Try to keep containers as clean and modular as possible. [10]

* Sort multi-line arguments - Whenever possible, sort multi-line arguments alphanumerically to make maintenance easier. This helps to avoid duplication of packages and make the list much easier to update. 
  Adding a space before a backslash (\) helps as well. [10]

* Leverage build cache - When building an image, Docker steps through the instructions in your Dockerfile, executing each in the order specified. For each instruction, Docker checks whether it can reuse the instruction from the build cache. [10]

* Docker build cache - Each instruction in a Dockerfile translates to a layer in your final image. You can think of image layers as a stack, with each layer adding more content on top of the layers that came before it. [11]

  Whenever a layer changes, that layer will need to be re-built.  All layers that come after that layer will need to run again as well. [10]

* Pin base image versions - Ex: FROM alpine:3.19@sha256:13b7e62e8df80264dbb747995705a986aa530415763a6c 58f84a3ca8af9a5bcd [10]

  Docker Scout's default Up-to-Date Base Images policy checks whether the base image version you're using is in fact the latest version. [10]



  

  
