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
  
## 03/10/25 -Intro to Github Actions
### Understanding Github Actions
* GitHub Actions is a continuous integration and continuous delivery (CI/CD) platform that allows you to automate your build, test, and deployment pipeline. [23]
* You can create workflows that build and test every pull request to your repository, or deploy merged pull requests to production. [23]
* You can configure a GitHub Actions workflow to be triggered when an event occurs in your repository, such as a pull request being opened or an issue being created. [23]
* Your workflow contains one or more jobs which can run in sequential order or in parallel. [23]
* Each job will run inside its own virtual machine runner, or inside a container, and has one or more steps that either run a script that you define or run an action, which is a reusable extension that can simplify your workflow. [23]
* A workflow is a configurable automated process that will run one or more jobs. Workflows are defined by a YAML file checked in to your repository and will run when triggered by an event in your repository, or they can be triggered manually, or at a defined schedule. 
  [23]
* An event is a specific activity in a repository that triggers a workflow run. For example, an activity can originate from GitHub when someone creates a pull request, opens an issue, or pushes a commit to a repository. [23]
* A job is a set of steps in a workflow that is executed on the same runner. Each step is either a shell script that will be executed, or an action that will be run. [23]
* Steps are executed in order and are dependent on each other. Since each step is executed on the same runner, you can share data from one step to another. [23]
* You can configure a job's dependencies with other jobs; by default, jobs have no dependencies and run in parallel. When a job takes a dependency on another job, it waits for the dependent job to complete before running. [23]
* An action is a custom application for the GitHub Actions platform that performs a complex but frequently repeated task. Use an action to help reduce the amount of repetitive code that you write in your workflow files. [23]
* A runner is a server that runs your workflows when they're triggered. Each runner can run a single job at a time. Each workflow run executes in a fresh, newly-provisioned virtual machine. [23]
* If you need a different operating system or require a specific hardware configuration, you can host your own runners. [23]

### About Workflows
* A workflow must contain the following basic components:
  1.	One or more events that will trigger the workflow.
  2.	One or more jobs, each of which will execute on a runner machine and run a series of one or more steps.
  3.	Each step can either run a script that you define or run an action, which is a reusable extension that can simplify your workflow. [26]
* Workflow triggers are events that cause a workflow to run. These events can be:
  Events that occur in your workflow's repository
  Events that occur outside of GitHub and trigger a repository_dispatch event on GitHub  
  Scheduled times
  Manual [26]

#### Storing secrets
* If your workflows use sensitive data, such as passwords or certificates, you can save these in GitHub as secrets and then use them in your workflows as environment variables. This means that you will be able to create and share workflows without having to embed 
  sensitive values directly in the workflow's YAML source. [26]
#### Creating dependent jobs
* By default, the jobs in your workflow all run in parallel at the same time. If you have a job that must only run after another job has completed, you can use the needs keyword to create this dependency. If one of the jobs fails, all dependent jobs are skipped; 
  however, if you need the jobs to continue, you can define this using the if conditional statement. [26]
#### Using a matrix
* A matrix strategy lets you use variables in a single job definition to automatically create multiple job runs that are based on the combinations of the variables. [26]
#### Caching dependencies
* If your jobs regularly reuse dependencies, you can consider caching these files to help improve performance. Once the cache is created, it is available to all workflows in the same repository. [26]
#### Using databases and service containers
* If your job requires a database or cache service, you can use the services keyword to create an ephemeral container to host the service; the resulting container is then available to all steps in that job and is removed when the job has completed. [26]
#### Reusing workflows
* You can call one workflow from within another workflow. This allows you to reuse workflows, avoiding duplication and making your workflows easier to maintain. [26]
#### Security hardening for workflows
* GitHub provides security features that you can use to increase the security of your workflows. You can use GitHub's built-in features to ensure you are notified about vulnerabilities in the actions you consume, or to automate the process of keeping the actions in 
  your workflows up to date. [26]
#### Using environments
* You can configure environments with protection rules and secrets to control the execution of jobs in a workflow. Each job in a workflow can reference a single environment. Any protection rules configured for the environment must pass before a job referencing the 
  environment is sent to a runner. [26]

## 03/11/25 -Intro to Github Actions (cont.)
### Triggering a workflow
* Workflow triggers are events that cause a workflow to run. [27]

### Triggering a workflow from a workflow
* When you use the repository's GITHUB_TOKEN to perform tasks, events triggered by the GITHUB_TOKEN, with the exception of workflow_dispatch and repository_dispatch, will not create a new workflow run. This prevents you from accidentally creating recursive workflow 
  runs. [27]

* To minimize your GitHub Actions usage costs, ensure that you don't create recursive or unintended workflow runs. [27]

### Using events to trigger workflows
* Use the “on” key to specify what events trigger your workflow. Ex: on: [push], on: [push, fork]. The second example use either event.  If multiple triggering events for your workflow occur at the same time, multiple workflow runs will be triggered. [27]

### Using activity types and filters with multiple events
* You can use activity types and filters to further control when your workflow will run. If you specify activity types or filters for an event and your workflow triggers on multiple events, you must configure each event separately. You must append a colon (:) to all 
  events, including events without configuration. [27]

### Using event activity types
* Some events have activity types that give you more control over when your workflow should run. Use on.<event_name>.types to define the type of event activity that will trigger a workflow run. If you specify multiple activity types, only one of those event activity 
  types needs to occur to trigger your workflow. [27]

### Using filters
* Some events have filters that give you more control over when your workflow should run. For example, the push event has a branches filter that causes your workflow to run only when a push to a branch that matches the branches filter occurs, instead of when any push 
  occurs. [27]

### Using filters to target specific branches or tags for push events
* When using the push event, you can configure a workflow to run on specific branches or tags. [27]
* Use the branches filter when you want to include branch name patterns or when you want to both include and exclude branch names patterns. Use the branches-ignore filter when you only want to exclude branch name patterns. You cannot use both the branches and branches- 
  ignore filters for the same event in a workflow. [27]
* Use the tags filter when you want to include tag name patterns or when you want to both include and exclude tag names patterns. Use the tags-ignore filter when you only want to exclude tag name patterns. You cannot use both the tags and tags-ignore filters for the 
  same event in a workflow. [27]
* When a pattern matches the branches-ignore or tags-ignore pattern, the workflow will not run. The patterns defined in branches and tags are evaluated against the Git ref's name. [27]
* If you want to both include and exclude branch or tag patterns for a single event, use the branches or tags filter along with the ! character to indicate which branches or tags should be excluded. [27]
* If you define a branch with the ! character, you must also define at least one branch without the ! character. Similarly, if you define a tag with the ! character, you must also define at least one tag without the ! [27]

* Order matters!
  A matching negative pattern (prefixed with !) after a positive match will exclude the Git ref. [27] 
  A matching positive pattern after a negative match will include the Git ref again. [27]

### Using filters to target specific paths for pull request or push events
* Use the paths filter when you want to include file path patterns or when you want to both include and exclude file path patterns. Use the paths-ignore filter when you only want to exclude file path patterns. You cannot use both the paths and paths-ignore filters for 
  the same event in a workflow. If you want to both include and exclude path patterns for a single event, use the paths filter prefixed with the ! character to indicate which paths should be excluded. [27]
* If at least one path matches a pattern in the paths filter, the workflow runs. [27]
* The rules for including and excluding paths match the rules for branches and tags. [27]

### Using filters to target specific branches for workflow run events
* When using the workflow_run event, you can specify what branches the triggering workflow must run on in order to trigger your workflow. [27]

### Defining inputs for manually triggered workflows
* When using the workflow_dispatch event, you can optionally specify inputs that are passed to the workflow. [27]
  Defining inputs, outputs, and secrets for reusable workflows
* You can define inputs and secrets that a reusable workflow should receive from a calling workflow. You can also specify outputs that a reusable workflow will make available to a calling workflow. [27]

### Using event information
* Information about the event that triggered a workflow run is available in the github.event context. The properties in the github.event context depend on the type of event that triggered the workflow. For example, a workflow triggered when an issue is labeled would 
  have information about the issue and label. [27]

### Further controlling how your workflow will run
* You can use conditionals to further control whether jobs or steps in your workflow will run. [27]
  jobs:
    run_if_label_matches:
      if: github.event.label.name == 'bug'
* If you want to run different jobs or steps depending on what event triggered the workflow, you can use a conditional to check whether a specific event type exists in the event context.
  - name: if_issue
        if: github.event.issue
        run: |
          echo An issue was closed
      - name: if_pr
        if: github.event.pull_request
        run: |
          echo A pull request was closed [27]

### Using environments to manually trigger workflow jobs
* If you want to manually trigger a specific job in a workflow, you can use an environment that requires approval from a specific team or user. First, configure an environment with required reviewers. Then, reference the environment name in a job in your workflow using 
  the environment: key. Any job referencing the environment will not run until at least one reviewer approves the job. [27]

## 03/12/25 -Intro to Github Action (cont.)
### Using pre-written building blocks in your workflow
* You can use pre-written building blocks, called actions, in your workflow. An action is a pre-defined, reusable set of jobs or code that perform specific tasks within a workflow.

### You can add an action to your workflow by referencing the action in your workflow file.
* You can view the actions referenced in your GitHub Actions workflows as dependencies in the dependency graph of the repository containing your workflows.

### Adding an action from GitHub Marketplace
* An action's listing page includes the action's version and the workflow syntax required to use the action. To keep your workflow stable even when updates are made to an action, you can reference the version of the action to use by specifying the Git or Docker tag 
  number in your workflow file.

### Adding an action from the same repository
* If an action is defined in the same repository where your workflow file uses the action, you can reference the action with either the ‌{owner}/{repo}@{ref} or ./path/to/dir syntax in your workflow file.

### Adding an action from a different repository
* If an action is defined in a different repository than your workflow file, you can reference the action with the {owner}/{repo}@{ref} syntax in your workflow file.

### Referencing a container on Docker Hub
* If an action is defined in a published Docker container image on Docker Hub, you must reference the action with the docker://{image}:{tag} syntax in your workflow file. To protect your code and data, we strongly recommend you verify the integrity of the Docker 
  container image from Docker Hub before using it in your workflow.

### Using tags
* Tags are useful for letting you decide when to switch between major and minor versions of an action, but these are more ephemeral and can be moved or deleted by the maintainer. Example: 
  steps:
    - uses: actions/javascript-action@v1.0.1

### Using SHAs
* If you need more reliable versioning, you should use the SHA value associated with the version of the action. SHAs are immutable and therefore more reliable than tags or branches. However, this approach means you will not automatically receive updates for an action, 
  including important bug fixes and security updates.
* When selecting a SHA, you should verify it is from the action's repository and not a repository fork. Example: 
  steps:
    - uses: actions/javascript-action@a824008085750b8e136effc585c3cd6082bd575f

### Using branches
* Specifying a target branch for the action means it will always run the version currently on that branch. This approach can create problems if an update to the branch includes breaking changes. Example: 
  steps:
    - uses: actions/javascript-action@main

### Using inputs and outputs with an action
* An action often accepts or requires inputs and generates outputs that you can use. For example, an action might require you to specify a path to a file, the name of a label, or other data it will use as part of the action processing.

## 03/13/25 -Intro to Github Action (cont.) - Secrets
### About secrets
* Secrets allow you to store sensitive information in your organization, repository, or repository environments. Secrets are variables that you create to use in GitHub Actions workflows in an organization, repository, or repository environment. [33]
### Naming your secrets
* To help ensure that GitHub redacts your secrets in logs correctly, avoid using structured data as the values of secrets. [33]
* The following rules apply to secret names:
  Can only contain alphanumeric characters ([a-z], [A-Z], [0-9]) or underscores (_). Spaces are not allowed.
  Must not start with the GITHUB_ prefix.
  Must not start with a number.
  Are case insensitive.
  Must be unique to the repository, organization, or enterprise where they are created. [33]
* If a secret with the same name exists at multiple levels, the secret at the lowest level takes precedence. Example: if an organization, repository, and environment all have a secret with the same name, the environment-level secret takes precedence. [33]
### Using your secrets in workflows
* Organization-level secrets let you share secrets between multiple repositories, which reduces the need for creating duplicate secrets. [33]
* For environment secrets, you can enable required reviewers to control access to the secrets. A workflow job cannot access environment secrets until approval is granted by required approvers. [33]
* To make a secret available to an action, you must set the secret as an input or environment variable in your workflow file. [33]
* Organization and repository secrets are read when a workflow run is queued, and environment secrets are read when a job referencing the environment starts. [33]
### Limiting credential permissions
* When generating credentials, we recommend that you grant the minimum permissions possible. For example, instead of using personal credentials, use deploy keys or a service account. [33]
* Consider granting read-only permissions if that's all that is needed, and limit access as much as possible. [33]
* When generating a personal access token (classic), select the fewest scopes necessary. When generating a fine-grained personal access token, select the minimum permissions and repository access required. [33]
### Creating secrets for a repository
* To create secrets or variables on GitHub for a personal account repository, you must be the repository owner. To create secrets or variables on GitHub for an organization repository, you must have admin access. Lastly, to create secrets or variables for a personal 
  account repository or an organization repository through the REST API, you must have collaborator access. [34]
### Creating secrets for an organization
* When creating a secret or variable in an organization, you can use a policy to limit access by repository. For example, you can grant access to all repositories, or limit access to only private repositories or a specified list of repositories. [34]
### Using secrets in a workflow
* To provide an action with a secret as an input or environment variable, you can use the secrets context to access secrets you've created in your repository. [34]
* Secrets cannot be directly referenced in if: conditionals. Instead, consider setting secrets as job-level environment variables, then referencing the environment variables to conditionally run steps in the job. [34]
* If a secret has not been set, the return value of an expression referencing the secret will be an empty string. [34]
* Avoid passing secrets between processes from the command line, whenever possible. Command-line processes may be visible to other users (using the ps command) or captured by security audit events. [34]
### Limits for secrets
* You can store up to 1,000 organization secrets, 100 repository secrets, and 100 environment secrets. [34]
* Secrets are limited to 48 KB in size. [34]
* To use secrets that are larger than 48 KB, you can use a workaround to store secrets in your repository and save the decryption passphrase as a secret on GitHub. For example, you can use gpg to encrypt a file containing your secret locally before checking the 
  encrypted file in to your repository on GitHub. [34]
* Be careful that your secrets do not get printed when your workflow runs. When using this workaround, GitHub does not redact secrets that are printed in logs. [34]
### Redacting secrets from workflow run logs
* GitHub Actions automatically redacts the contents of all GitHub secrets that are printed to workflow logs. [34]
* As a habit of best practice, you should mask all sensitive information that is not a GitHub secret by using ::add-mask::VALUE. This causes the value to be treated as a secret and redacted from logs. [34]
* Redacting of secrets is performed by your workflow runners. This means a secret will only be redacted if it was used within a job and is accessible by the runner. If an unredacted secret is sent to a workflow run log, you should delete the log and rotate the secret. [34]

## 03/13/25 -Intro to Github Action (cont.) - Security Hardening
### Using secrets
* Sensitive values should never be stored as plaintext in workflow files, but rather as secrets.
#### Never use structured data as a secret
* Structured data can cause secret redaction within logs to fail, because redaction largely relies on finding an exact match for the specific secret value. For example, do not use a blob of JSON, XML, or YAML (or similar) to encapsulate a secret value, as this 
  significantly reduces the probability the secrets will be properly redacted. Instead, create individual secrets for each sensitive value.
#### Register all secrets used within workflows
* If a secret is used to generate another sensitive value within a workflow, that generated value should be formally registered as a secret, so that it will be redacted if it ever appears in the logs.
* Registering secrets applies to any sort of transformation/encoding as well. If your secret is transformed in some way (such as Base64 or URL-encoded), be sure to register the new value as a secret too.
### Audit how secrets are handled 
* Audit how secrets are used, to help ensure they’re being handled as expected. You can do this by reviewing the source code of the repository executing the workflow, and checking any actions used in the workflow. For example, check that they’re not sent to unintended 
  hosts, or explicitly being printed to log output.
* View the run logs for your workflow after testing valid/invalid inputs, and check that secrets are properly redacted, or not shown.
* It is good practice to manually review the workflow logs after testing valid and invalid inputs.
### Use credentials that are minimally scoped
* Make sure the credentials being used within workflows have the least privileges required, and be mindful that any user with write access to your repository has read access to all secrets configured in your repository.
* Actions can use the GITHUB_TOKEN by accessing it from the github.token context. You should therefore make sure that the GITHUB_TOKEN is granted the minimum required permissions. 
* It's good security practice to set the default permission for the GITHUB_TOKEN to read access only for repository contents. The permissions can then be increased, as required, for individual jobs within the workflow file.
### Audit and rotate registered secrets
* Periodically review the registered secrets to confirm they are still required. Remove those that are no longer needed.
* Rotate secrets periodically to reduce the window of time during which a compromised secret is valid.
### Consider requiring review for access to secrets
* You can use required reviewers to protect environment secrets. A workflow job cannot access environment secrets until approval is granted by a reviewer.
### Using CODEOWNERS to monitor changes
* You can use the CODEOWNERS feature to control how changes are made to your workflow files. For example, if all your workflow files are stored in .github/workflows, you can add this directory to the code owners list, so that any proposed changes to these files will 
 first require approval from a designated reviewer.


### Understanding the risk of script injections
* When creating workflows, custom actions, and composite actions, you should always consider whether your code might execute untrusted input from attackers. This can occur when an attacker adds malicious commands and scripts to a context. When your workflow runs, those 
  strings might be interpreted as code which is then executed on the runner.
* Attackers can add their own malicious content to the github context, which should be treated as potentially untrusted input. 
* You should ensure that these values do not flow directly into workflows, actions, API calls, or anywhere else where they could be interpreted as executable code.
### Good practices for mitigating script injection attacks
#### Using an action instead of an inline script (recommended)
* Use an action that passes in the value as an argument instead of using the value in an inline script.
#### Using an intermediate environment variable
* For inline scripts, the preferred approach to handling untrusted input is to set the value of the expression to an intermediate environment variable.
* With this approach, the value of the expression is stored in memory and used as a variable, and doesn't interact with the script generation process.
#### Using workflow templates for code scanning
* Workflow templates for Advanced Security have been consolidated in a "Security" category in the Actions tab of a repository. Code scanning allows you to find security vulnerabilities before they reach production. GitHub provides workflow templates for code scanning. * You can use these suggested workflows to construct your code scanning workflows, instead of starting from scratch.
#### Restricting permissions for tokens
* To help mitigate the risk of an exposed token, consider restricting the assigned permissions.
### Using OpenID Connect to access cloud resources
* If your GitHub Actions workflows need to access resources from a cloud provider that supports OpenID Connect (OIDC), you can configure your workflows to authenticate directly to the cloud provider. This will let you stop storing these credentials as long-lived * 
  secrets and provide other security benefits.
### Using third-party actions
* The individual jobs in a workflow can interact with (and compromise) other jobs. As such the compromise of a single action within a workflow can be very significant, as that compromised action would have access to all secrets configured on your repository, and may be 
  able to use the GITHUB_TOKEN to write to the repository. Consequently, there is significant risk in sourcing actions from third-party repositories on GitHub.
* You can help mitigate this risk by following these good practices:
    Pin actions to a full length commit SHA
    Pinning an action to a full length commit SHA is currently the only way to use an action as an immutable release. Pinning to a particular SHA helps mitigate the risk of a bad actor adding a backdoor to the action's repository, as they would need to generate a SHA-1     collision for a valid Git object payload. When selecting a SHA, you should verify it is from the action's repository and not a repository fork.
    Audit the source code of the action
    Ensure that the action is handling the content of your repository and secrets as expected. For example, check that secrets are not sent to unintended hosts, or are not inadvertently logged.
    Pin actions to a tag only if you trust the creator
    Although pinning to a commit SHA is the most secure option, specifying a tag is more convenient and is widely used. If you’d like to specify a tag, then be sure that you trust the action's creators. Note that there is risk to this approach even if you trust the         author, because a tag can be moved or deleted if a bad actor gains access to the repository storing the action.
### Reusing third-party workflows
* The same principles described above for using third-party actions also apply to using third-party workflows. You can help mitigate the risks associated with reusing workflows by following the same good practices outlined above.
### Using Dependabot version updates to keep actions up to date
* You can use Dependabot to ensure that references to actions and reusable workflows used in your repository are kept up to date.
### Preventing GitHub Actions from creating or approving pull requests
* You can choose to allow or prevent GitHub Actions workflows from creating or approving pull requests. Allowing workflows, or any other automation, to create or approve pull requests could be a security risk if the pull request is merged without proper oversight.
### Using code scanning to secure workflows
* Code scanning can automatically detect and suggest improvements for common vulnerable patterns used in GitHub Actions workflows.
### Using OpenSSF Scorecards to secure workflow dependencies
* Scorecards is an automated security tool that flags risky supply chain practices. Once configured, the Scorecards action runs automatically on repository changes, and alerts developers about risky supply chain practices using the built-in code scanning experience.
## Potential impact of a compromised runner
### Accessing secrets
* Workflows triggered from a forked repository using the pull_request event have read-only permissions and have no access to secrets. However, these permissions differ for various event triggers such as issue_comment, issues, push and pull_request from a branch within 
  the repository, where the attacker could attempt to steal repository secrets or use the write permission of the job's GITHUB_TOKEN.
* If the secret or token is set to an environment variable, it can be directly accessed through the environment using printenv.
* If the secret is used directly in an expression, the generated shell script is stored on-disk and is accessible
* For a custom action, the risk can vary depending on how a program is using the secret it obtained from the argument.
### Stealing the job's GITHUB_TOKEN
* It is possible for an attacker to steal a job's GITHUB_TOKEN. The GitHub Actions runner automatically receives a generated GITHUB_TOKEN with permissions that are limited to just the repository that contains the workflow, and the token expires after the job has 
  completed. Once expired, the token is no longer useful to an attacker. To work around this limitation, they can automate the attack and perform it in fractions of a second by calling an attacker-controlled server with the token.

### Modifying the contents of a repository
* The attacker server can use the GitHub API to modify repository content, including releases, if the assigned permissions of GITHUB_TOKEN are not restricted.

### Considering cross-repository access
* This list describes the recommended approaches for accessing repository data within a workflow, in descending order of preference:
#### The GITHUB_TOKEN
* This token is intentionally scoped to the single repository that invoked the workflow, and can have the same level of access as a write-access user on the repository. The token is created before each job begins and expires when the job is finished. 
* The GITHUB_TOKEN should be used whenever possible.
#### Repository deploy key
* Deploy keys are one of the only credential types that grant read or write access to a single repository, and can be used to interact with another repository within a workflow.
* Note that deploy keys can only clone and push to the repository using Git, and cannot be used to interact with the REST or GraphQL API, so they may not be appropriate for your requirements.
#### GitHub App tokens
* GitHub Apps can be installed on select repositories, and even have granular permissions on the resources within them.
#### Personal access tokens
* You should never use a personal access token (classic). These tokens grant access to all repositories within the organizations that you have access to, as well as all personal repositories in your personal account. This indirectly grants broad access to all write- 
  access users of the repository the workflow is in.
* If you do use a personal access token, you should never use a personal access token from your own account. If you later leave an organization, workflows using this token will immediately break, and debugging this issue can be challenging.
#### SSH keys on a personal account
* Workflows should never use the SSH keys on a personal account. Similar to personal access tokens (classic), they grant read/write permissions to all of your personal repositories as well as all the repositories you have access to through organization membership. You 
  should use individual deploy keys instead.  


### Hardening for GitHub-hosted runners
* Reviewing the supply chain for GitHub-hosted runners
* For GitHub-hosted runners created from images maintained by GitHub, you can view a software bill of materials (SBOM) to see what software was pre-installed on the runner. You can provide your users with the SBOM which they can run through a vulnerability scanner to 
  validate if there are any vulnerabilities in the product. If you are building artifacts, you can include this SBOM in your bill of materials for a comprehensive list of everything that went into creating your software.
* For third-party images, such as the images for ARM-powered runners, you can find details of the software that's included in the image in the actions/partner-runner-images repository.

### Denying access to hosts
* GitHub-hosted runners are provisioned with an etc/hosts file that blocks network access to various cryptocurrency mining pools and malicious sites. Hosts such as MiningMadness.com and cpu-pool.com are rerouted to localhost so that they do not present a significant 
  security risk. 
### Auditing GitHub Actions events
* You can use the security log to monitor activity for your user account and the audit log to monitor activity in your organization. The security and audit log records the type of action, when it was run, and which personal account performed the action.


  
