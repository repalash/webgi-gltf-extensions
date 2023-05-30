import {GenericExtension} from 'gltf-transform-generic-ext'
import {TextureChannel} from '@gltf-transform/core'

export class WebGIMaterialsBumpMap extends GenericExtension {
    public static readonly EXTENSION_NAME = 'WEBGI_materials_bumpmap'
    readonly extensionName = WebGIMaterialsBumpMap.EXTENSION_NAME
    textureChannels: Record<string, number> = {
        bumpTexture: TextureChannel.R,
    }
}

export class WebGIMaterialsLightMap extends GenericExtension {
    public static readonly EXTENSION_NAME = 'WEBGI_materials_lightmap'
    readonly extensionName = WebGIMaterialsLightMap.EXTENSION_NAME
    textureChannels: Record<string, number> = {
        lightMapTexture: TextureChannel.R | TextureChannel.G | TextureChannel.B,
    }
}
export class WebGIMaterialsAlphaMap extends GenericExtension {
    public static readonly EXTENSION_NAME = 'WEBGI_materials_alphamap'
    readonly extensionName = WebGIMaterialsAlphaMap.EXTENSION_NAME
    textureChannels: Record<string, number> = {
        alphaTexture: TextureChannel.G,
    }
}
export class WebGIMaterialsDisplacementMap extends GenericExtension {
    public static readonly EXTENSION_NAME = 'WEBGI_materials_displacementmap'
    readonly extensionName = WebGIMaterialsDisplacementMap.EXTENSION_NAME
    textureChannels: Record<string, number> = {
        displacementTexture: TextureChannel.R,
    }
}
