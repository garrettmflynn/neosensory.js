# neosensory.js
A JavaScript SDK to help streamline controlling Neosensory devices over Bluetooth Low Energy. This reponsitory is comprised of an example dashboard and reusable module called `neosensory`, containing `neosensory.Buzz`. This will allow you to control Neosensory devices from the browser or Node.js.

[![](https://img.shields.io/badge/github-source_code-blue.svg?logo=github&logoColor=white)](https://github.com/brainsatplay/neosensory.js)
[![License](https://img.shields.io/badge/License-Apache%202.0-yellow.svg)](https://opensource.org/licenses/Apache-2.0)

## Getting Started
### Node.js
```bash
npm install neosensory
``` 

#### CommonJS
```javascript
const neosensory = require('neosensory')
``` 

#### ES Modules
```javascript
import * as neosensory from 'neosensory'
```

### Browser
#### Script Tag
```html
<script src="https://cdn.jsdelivr.net/npm/neosensory"></script>
```

## Hardware

This library connects any Neosensory hardware—currently just Buzz.

## Documentation

See the pages for the module at https://brainsatplay.com/neosensory.js. The platform-agnostic API documentation may be obtained at https://neosensory.com/developers/.

## Examples

Currently this repo contains a browser-based example that allows you to connect to your Buzz device, change its LEDs, and vibrate its motors.

## License

Please note that while this Neosensory SDK has an Apache 2.0 license, 
usage of the Neosensory API to interface with Neosensory products is 
still  subject to the Neosensory developer terms of service located at:
https://neosensory.com/legal/dev-terms-service.

See [LICENSE](https://github.com/brainsatplay/neosensory.js/blob/main/LICENSE).