# neosensory.js
A JavaScript SDK to help streamline controlling Neosensory devices over Bluetooth Low Energy. This reponsitory is comprised of an example dashboard and reusable module called `neosensory`, containing `neosensory.Buzz`. This will allow you to control Neosensory devices from the browser or Node.js.

Note: Chromium browsers only (e.g. Google Chrome, Microsoft Edge, Opera, etc.)

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

This library connects any Neosensory hardware (currently just Buzz).

## Documentation

See detailed documentation for this library at https://brainsatplay.com/neosensory.js. Additionally, Neosensory's platform-agnostic API documentation may be obtained at https://neosensory.com/developers/.

## Examples

Currently this repo contains a browser-based example in the `docs/examples` folder that allows you to connect to your Buzz device, change its LEDs, and vibrate its motors.

## License

Please note that while this Neosensory SDK has an Apache 2.0 license,  usage of the Neosensory API to interface with Neosensory products is  still  subject to the Neosensory developer terms of service located at: https://neosensory.com/legal/dev-terms-service.

See [LICENSE](https://github.com/brainsatplay/neosensory.js/blob/main/LICENSE).
