import type {GLTFLoaderPlugin, GLTFParser} from 'three/examples/jsm/loaders/GLTFLoader'
import type {MeshStandardMaterial} from 'three'
import type {GLTFExporterPlugin, GLTFWriter} from 'three/examples/jsm/exporters/GLTFExporter'

/**
 * Light Map Extension
 *
 * lightMapTexture and lightMapIntensity are added to the material
 *
 * Specification: https://webgi.xyz/docs/gltf-extensions/WEBGI_materials_lightmap.html
 */
export class GLTFMaterialsLightMapExtension {
    static readonly WebGiMaterialsLightMapExtension = 'WEBGI_materials_lightmap'
    static Import = (parser: GLTFParser): GLTFLoaderPlugin=> new GLTFMaterialsLightMapExtensionImport(parser)
    static Export = (writer: GLTFWriter): GLTFExporterPlugin => new GLTFMaterialsLightMapExtensionExport(writer)
}

class GLTFMaterialsLightMapExtensionImport {

    public name: string
    constructor(public parser: GLTFParser) {

        this.name = GLTFMaterialsLightMapExtension.WebGiMaterialsLightMapExtension

    }

    // getMaterialType(materialIndex: number) { // todo: required?
    //
    //     const parser = this.parser
    //     const materialDef = parser.json.materials[ materialIndex ]
    //
    //     if (!materialDef.extensions || !materialDef.extensions[ this.name ]) return null
    //
    //     return MeshPhysicalMaterial
    //
    // }

    async extendMaterialParams(materialIndex: number, materialParams: any) {

        const parser = this.parser
        const materialDef = parser.json.materials[ materialIndex ]

        if (!materialDef.extensions || !materialDef.extensions[ this.name ]) {

            return Promise.resolve()

        }

        const pending = []

        const extension = materialDef.extensions[ this.name ]

        if (extension.lightMapIntensity !== undefined) {

            materialParams.lightMapIntensity = extension.lightMapIntensity

        }

        if (extension.lightMapTexture !== undefined) {

            pending.push(parser.assignTexture(materialParams, 'lightMap', extension.lightMapTexture))

        }

        return Promise.all(pending)

    }

}
export type {GLTFMaterialsLightMapExtensionImport}

class GLTFMaterialsLightMapExtensionExport {

    public name: string

    constructor(public writer: GLTFWriter) {

        this.name = GLTFMaterialsLightMapExtension.WebGiMaterialsLightMapExtension

    }

    writeMaterial(material: MeshStandardMaterial, materialDef: any) {

        if (!material.isMeshStandardMaterial || material.lightMapIntensity === 0) return

        const writer = this.writer
        const extensionsUsed = writer.extensionsUsed

        const extensionDef: any = {}

        extensionDef.lightMapIntensity = material.lightMapIntensity

        if (material.lightMap) {

            const lightMapDef = {index: writer.processTexture(material.lightMap)}
            writer.applyTextureTransform(lightMapDef, material.lightMap)
            extensionDef.lightMapTexture = lightMapDef

        }

        materialDef.extensions = materialDef.extensions || {}
        materialDef.extensions[ this.name ] = extensionDef

        extensionsUsed[ this.name ] = true

    }

}
export type {GLTFMaterialsLightMapExtensionExport}
