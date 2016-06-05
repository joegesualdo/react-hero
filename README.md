## ReactHero
> Tools to get started with react quickly

## Create Server

#### Create HTML file
> You must have and index.html file in the current directory
```
$ touch index.html
```

#### Start Server
```javascript
const ReactHero = require('react-hero');

ReactHero.createServer('entry.js', 'assets/bundle.js', 'localhost', 8080)
```

#### Reference the server and output file in your HTML file
```html
<html>
  <body>
    ...
    <script src="http://localhost:8080/assets/bundle.js"></script>
  </body>
</html>
```
> NOTE: Make sure host, port, and outputFile match what was passed to `.createServer(...)`

#### View the html file
Visit [http://localhost:8080](http://localhost:8080) 
> NOTE: Make sure host and port are the ones specified when creating the server

## Create Distribution File 
```javascript
const ReactHero = require('react-hero');

ReactHero.createDistribution('entry.js', 'dist/bundle.js')
```
