import {GenericExtension} from 'gltf-transform-generic-ext'
import {TextureChannel} from '@gltf-transform/core'

export class WebGIMaterialsAnisotropy extends GenericExtension {
    public static readonly EXTENSION_NAME = 'WEBGI_materials_anisotropy'
    readonly extensionName = WebGIMaterialsAnisotropy.EXTENSION_NAME
    textureChannels: Record<string, number> = {
        anisotropyDirection: TextureChannel.R | TextureChannel.G | TextureChannel.B,
    }
}
export class WebGIMaterialsCustomBumpMap extends GenericExtension {
    public static readonly EXTENSION_NAME = 'WEBGI_materials_custom_bump_map'
    readonly extensionName = WebGIMaterialsCustomBumpMap.EXTENSION_NAME
    textureChannels: Record<string, number> = {
        customBumpMap: TextureChannel.R | TextureChannel.G | TextureChannel.B,
    }
}
export class WebGIMaterialsClearcoatTint extends GenericExtension {
    public static readonly EXTENSION_NAME = 'WEBGI_materials_clearcoat_tint'
    readonly extensionName = WebGIMaterialsClearcoatTint.EXTENSION_NAME
}
export class WebGIMaterialsThinFilmLayer extends GenericExtension {
    public static readonly EXTENSION_NAME = 'WEBGI_materials_thin_film_layer'
    readonly extensionName = WebGIMaterialsThinFilmLayer.EXTENSION_NAME
}
export class WebGIMaterialsTriplanarMapping extends GenericExtension {
    public static readonly EXTENSION_NAME = 'WEBGI_materials_triplanar'
    readonly extensionName = WebGIMaterialsTriplanarMapping.EXTENSION_NAME
}
export class WebGIMaterialsSSBevel extends GenericExtension {
    public static readonly EXTENSION_NAME = 'WEBGI_materials_ssbevel'
    readonly extensionName = WebGIMaterialsSSBevel.EXTENSION_NAME
}
export class WebGIMaterialsNoiseBump extends GenericExtension {
    public static readonly EXTENSION_NAME = 'WEBGI_materials_noise_bump'
    readonly extensionName = WebGIMaterialsNoiseBump.EXTENSION_NAME
}
