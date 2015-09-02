# cross-platform-app
Use this sample to kick-start your own cross platform app development with Cordova.

# Latest technologies and techniques

This sample is built using the latest technologies and techniques, and it will be kept updated as future
improvements to the build process and tools arrive. The last major update to this sample was September 2015.

# What's included

This sample is an extensive example that enables you to kick-start the development of a cross platform app
built using Cordova Tools for Visual Studio 2015.

Some keywords on what the sample includes.

- Proper structure for organizing your project into separate features (modules).
- Built according to [John Papa's Angular Style Guide](https://github.com/johnpapa/angular-styleguide), with
some modifications to work better with Browserify.
- Uses only NPM for packages, no dependency on Bower.
- Uses Browserify to simplifying packaging of dependencies such as Angular.
- Gulp script that helps you build and verify your source code.
- Testing using Mocha, Chai, Sinon, Karma and PhantomJS.
- Code analysis using JSHint, CSSHint and more.

# Structure

## Libraries / Packages

All third party packages are embedded into the lib.js and lib.css. The third party libaries are 
built in a separate bundle for performance reasons, it greatly improves the performance with 
watches and re-builds.

## Code Improvements

- Minification automatically injects the dependencies, no need to write inject statements.
- Controllers, Services, Directives will all be independent of the module, they don't reference the
module by name (e.g. var app = require('./');). Improves reuse of code.
- Automatic Immediately Invoked Function Expression (IIFE), your script files don't need enclosure and
will not leak objects into global namespace.


# Server?

There are no server code included with this sample, this is to both simplify the sample a tiny bit and
to avoid putting even more restrictions to those who want to use it as a starting point.

# Why develop this?

While there are many different simpler samples for Angular out there, I needed a better starting point and
a repository where I could try out new techniques and technologies as they arrive.

While Microsoft does have some [samples for Cordova](https://github.com/Microsoft/cordova-samples), they 
are rather simple and does not include Gulp tasks to help with the build process of your apps.

# Links

Useful links related to this project

[Minifying Browserified Angular Modules](http://chrisdoingweb.com/blog/minifying-browserified-angular-modules/)
[angularjs-gulp-browserify-boilerplate ](https://github.com/jakemmarsh/angularjs-gulp-browserify-boilerplate/)

## License

MIT © [Sondre Bjellås](http://sondreb.com)