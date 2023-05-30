# WebGi GLTF Extensions

GLTF Extensions used in WebGi - https://webgi.xyz/docs

## Usage

### Install

```
npm install webgi-gltf-extensions
```

### Use with glTF-Transform:
```typescript
import {NodeIO} from '@gltf-transform/core'
import {WEBGI_EXTENSIONS, WebGIMaterialsDiamond} from 'webgi-gltf-extensions'

// Use WebIO instead of NodeIO if you are using browser
const io = new NodeIO().registerExtensions(WEBGI_EXTENSIONS)

// Use io normally
// io.read()
// io.write()

```

Check [source code](./src/gltf-transform/index.ts) for a list of all extensions.


### Use with three.js:
All extensions already included in the WebGi SDK and are installed by the plugins automatically. 

## License
MIT

## References
Generated with [rollup-library-starter](https://github.com/repalash/rollup-library-starter)
