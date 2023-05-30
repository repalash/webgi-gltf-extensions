import {GenericExtension} from 'gltf-transform-generic-ext'

export class WebGILightExtras extends GenericExtension {
    public static readonly EXTENSION_NAME = 'WEBGI_light_extras'
    readonly extensionName = WebGILightExtras.EXTENSION_NAME
}
export class WebGIObject3DExtras extends GenericExtension {
    public static readonly EXTENSION_NAME = 'WEBGI_object3d_extras'
    readonly extensionName = WebGIObject3DExtras.EXTENSION_NAME
}
export class WebGIMaterialExtras extends GenericExtension {
    public static readonly EXTENSION_NAME = 'WEBGI_material_extras'
    readonly extensionName = WebGIMaterialExtras.EXTENSION_NAME
}
