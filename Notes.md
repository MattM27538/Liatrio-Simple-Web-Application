# Matthew Martinez Liatrio Apprenticeship Personal Notes
- Trailing numbers refer to reference resource in [Resources.md](https://github.com/MattM27538/Liatrio-Simple-Web-Application/blob/main/Resources.md#resources).
## 3/7/25 -Intro to NodeJS
* Node.js is an open-source and cross-platform JavaScript runtime environment. [1]
* A Node.js app runs in a single process, without creating a new thread for every request. Node.js provides a set of asynchronous I/O primitives in its standard library that prevent JavaScript code from blocking and generally, libraries in Node.js are written using non-blocking paradigms, making blocking behavior the exception rather than the norm. [1]
* When Node.js performs an I/O operation, like reading from the network, accessing a database or the filesystem, instead of blocking the thread and wasting CPU cycles waiting, Node.js will resume the operations when the response comes back. This allows Node.js to handle thousands of concurrent connections with a single server without introducing the burden of managing thread concurrency, which could be a significant source of bugs. [1]
* npm is the standard package manager for Node.js. npm installs, updates and manages downloads of dependencies of your project. [3]
* Installing all dependencies if a project has a package.json file, by running npm install. You can also install a specific package by running npm install <package-name>. [3]
* Updating is also made easy, by running npm update. You can specify a single package to update as well: npm update <package-name>. [3]
* You can install a specific version of a package, by running npm install <package-name>@<version>. [3]
* The difference between devDependencies and dependencies is that the former contains development tools, like a testing library, while the latter is bundled with the app in production. [3]
* In Node.js you control the environment. Unless you are building an open source application that anyone can deploy anywhere, you know which version of Node.js you will run the application on. [4]
