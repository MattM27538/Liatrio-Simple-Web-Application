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

## 03/08/25 -Intro to ExpressJS, JSON Minification, and Docker Build Best Practices
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

## 03/09/25 - Docker build Best Practices cont.
## WORKDIR
* The WORKDIR instruction sets the working directory for any RUN, CMD, ENTRYPOINT, COPY and ADD instructions that follow it in the Dockerfile. [14]
  If the WORKDIR doesn't exist, it will be created even if it's not used in any subsequent Dockerfile instruction. [14]
* The WORKDIR instruction can be used multiple times in a Dockerfile. If a relative path is provided, it will be relative to the path of the previous WORKDIR instruction. [14]
* The WORKDIR instruction can resolve environment variables previously set using ENV. You can only use environment variables explicitly set in the Dockerfile. Ex:
  ENV DIRPATH=/path
  WORKDIR $DIRPATH/$DIRNAME
  RUN pwd [14]
* The output of the final pwd command in this Dockerfile would be “/path/$DIRNAME”.
  If not specified, the default working directory is “/“. [14]
* In practice, if you aren't building a Dockerfile from scratch (FROM scratch), the WORKDIR may likely be set by the base image you're using. Therefore, to avoid unintended operations in unknown directories, it's best practice to set your WORKDIR explicitly. [14]
* When specifying WORKDIR in a build stage, you can use an absolute path, like /build, or a relative path, like ./build. Using a relative path means that the working directory is relative to whatever the previous working directory was. So if your base image uses 
 /usr/local/foo as a working directory, and you specify a relative directory like WORKDIR build, the effective working directory becomes /usr/local/foo/build. [14]
## EXPOSE
* The EXPOSE instruction indicates the ports on which a container listens for connections. Consequently, you should use the common, traditional port for your application. For example, an image containing the Apache web server would use EXPOSE 80, while an image 
  containing MongoDB would use EXPOSE 27017 and so on. [10]
* The EXPOSE instruction informs Docker that the container listens on the specified network ports at runtime. You can specify whether the port listens on TCP or UDP, and the default is TCP if you don't specify a protocol. [20]
* By default, EXPOSE assumes TCP. You can also specify UDP: EXPOSE 80/udp [20]
* Note: the EXPOSE instruction doesn't actually publish the port. It functions as a type of documentation between the person who builds the image and the person who runs the container, about which ports are intended to be published. To publish the port when running the 
  container, use the -p flag on docker run to publish and map one or more ports, or the -P flag to publish all exposed ports and map them to high-order ports. [20]
## RUN
* Split long or complex RUN statements on multiple lines separated with backslashes to make your Dockerfile more readable, understandable, and maintainable. Also, you can chain commands with the && operator. [10]

  Ex:
  RUN apt-get update && apt-get install -y --no-install-recommends \
      package-bar \
      package-baz \
      package-foo [17]
* The cache for RUN instructions can be invalidated by using the --no-cache flag, for example docker build --no-cache. [17]
* RUN has two forms: 
  Shell form:
  RUN [OPTIONS] <command> ...
  Exec form:
  RUN [OPTIONS] [ "<command>", ... ] [17]

## ADD or COPY
* COPY supports basic copying of files into the container, from the build context or from a stage in a multi-stage build. ADD supports features for fetching files from remote HTTPS and Git URLs, and extracting tar files automatically when adding files from the build 
  context. [10]
* You'll mostly want to use COPY for copying files from one stage to another in a multi-stage build. If you need to add files from the build context to the container temporarily to execute a RUN instruction, you can often substitute the COPY instruction with a bind 
  mount instead. For example, to temporarily add a requirements.txt file for a RUN pip install instruction:
  RUN --mount=type=bind,source=requirements.txt,target=/tmp/requirements.txt \
      pip install --requirement /tmp/requirements.txt [10]
* Bind mounts are more efficient than COPY for including files from the build context in the container. Note that bind-mounted files are only added temporarily for a single RUN instruction, and don't persist in the final image. If you need to include files from the 
  build context in the final image, use COPY. [10]
* The ADD instruction is best for when you need to download a remote artifact as part of your build. [10]
* ADD is better than manually adding files using something like wget and tar, because it ensures a more precise build cache. ADD also has built-in support for checksum validation of the remote resources, and a protocol for parsing branches, tags, and subdirectories 
  from Git URLs. [10]

## FROM
* The FROM instruction initializes a new build stage and sets the base image for subsequent instructions. [18]
* ARG is the only instruction that may precede FROM in the Dockerfile. [18]
  
* FROM instructions support variables that are declared by any ARG instructions that occur before the first FROM.
  Ex:
  ARG  CODE_VERSION=latest
  FROM base:${CODE_VERSION} [18]

* FROM can appear multiple times within a single Dockerfile to create multiple images or use one build stage as a dependency for another. Note, each FROM instruction clears any state created by previous instructions. [18]

* Optionally a name can be given to a new build stage by adding AS name to the FROM instruction. The name can be used in subsequent FROM <name>, COPY --from=<name>, and RUN --mount=type=bind,from=<name> instructions to refer to the image built in this stage. [18]
  The tag or digest values are optional. If you omit either of them, the builder assumes a latest tag by default.

## CMD
* The CMD instruction should be used to run the software contained in your image, along with any arguments. CMD should almost always be used in the form of CMD ["executable", "param1", "param2"]. [19]
  
* In most other cases, CMD should be given an interactive shell, such as bash, python and perl. For example, CMD ["perl", "-de0"], CMD ["python"], or CMD ["php", "-a"]. Using this form means that when you execute something like docker run -it python, you’ll get dropped 
  into a usable shell, ready to go. [19]
 
* There can only be one CMD instruction in a Dockerfile. If you list more than one CMD, only the last one takes effect. [19]
  
* The purpose of a CMD is to provide defaults for an executing container. These defaults can include an executable, or they can omit the executable, in which case you must specify an ENTRYPOINT instruction as well. [19]


## ENTRYPOINT
* The best use for ENTRYPOINT is to set the image's main command, allowing that image to be run as though it was that command, and then use CMD as the default flags. [21]

## VOLUME
* You should use the VOLUME instruction to expose any database storage area, configuration storage, or files and folders created by your Docker container. You are strongly encouraged to use VOLUME for any combination of mutable or user-serviceable parts of your image.
  The VOLUME instruction creates a mount point with the specified name and marks it as holding externally mounted volumes from native host or other containers. [22]
  Ex:
  VOLUME ["/data"]



  

  
