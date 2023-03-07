# Typescript Web
This is a simple HelloWorld project using typescript. This is the nodejs webapp way to begin with typescript and run javascript web project. This is a poor project configuration without bundler like webpack ; rollup ; gulp ; grunt...

To start working on this project:
- Check and adapt the typescript version into package.json then save this file
- run `npm install` or `yarn install` or `pnpm install` depending the package tool you like to use

From now, you can test your project by building it and run it from the command line.
Ex:
- run `node_modules/.bin/tsc` to build the typescript sources in a terminal.
- run `node_modules/.bin/http-server ./src/public -a 127.0.0.1 -p 8080` in another terminal process.
- Go to http://localhost:8080

PS. Considerate using the `npm start` script (_see package.json_) to watch on typescript changes when saving files and run the http-server.

PS2. Considerate to find your favorite tool and implement it on this project to add a hot reload functionnality (auto page refresh when you lokking for changes in the browser)

Dependencies References:
- https://www.npmjs.com/package/http-server
- https://www.npmjs.com/package/concurrently