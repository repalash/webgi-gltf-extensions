import {WebGIViewerExtension} from './WebGIViewerExtension'
import {
    WebGIMaterialsAlphaMap,
    WebGIMaterialsBumpMap,
    WebGIMaterialsDisplacementMap,
    WebGIMaterialsLightMap
} from './WebGIThreeMaterialMaps'
import {WebGIAnimationMarkers, WebGIMaterialsDiamond} from './WebGIExtensions'
import {
    WebGIMaterialsAnisotropy,
    WebGIMaterialsClearcoatTint,
    WebGIMaterialsCustomBumpMap,
    WebGIMaterialsNoiseBump,
    WebGIMaterialsSSBevel,
    WebGIMaterialsThinFilmLayer,
    WebGIMaterialsTriplanarMapping
} from './WebGIMaterialExtensions'
import {WebGILightExtras, WebGIMaterialExtras, WebGIObject3DExtras} from './WebGIExtrasExtensions'


export const WEBGI_EXTENSIONS = [
    WebGIViewerExtension,
    WebGIMaterialsBumpMap,
    WebGIMaterialsLightMap,
    WebGIMaterialsAlphaMap,
    WebGIMaterialsDisplacementMap,
    WebGIMaterialsDiamond,
    WebGIAnimationMarkers,
    WebGIMaterialsAnisotropy,
    WebGIMaterialsCustomBumpMap,
    WebGIMaterialsClearcoatTint,
    WebGIMaterialsThinFilmLayer,
    WebGIMaterialsTriplanarMapping,
    WebGIMaterialsSSBevel,
    WebGIMaterialsNoiseBump,
    WebGILightExtras,
    WebGIObject3DExtras,
    WebGIMaterialExtras,
]
