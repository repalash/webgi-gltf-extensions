import {Extension, ExtensionProperty, PropertyType, ReaderContext, Texture, WriterContext} from '@gltf-transform/core'

const viewerGLTFExtension = 'WEBGI_viewer'
class WebGIViewerExtensionProperty extends ExtensionProperty {
    readonly extensionName: string = viewerGLTFExtension
    readonly parentTypes: string[] = [PropertyType.SCENE]
    readonly propertyType: string = 'ViewerJSON'

    // eslint-disable-next-line @typescript-eslint/naming-convention
    protected init(): void {return}
}
export class WebGIViewerExtension extends Extension {
    public readonly extensionName = viewerGLTFExtension
    public static readonly EXTENSION_NAME = viewerGLTFExtension
    private _viewerConfig: any = {}
    // @ts-ignore
    private _texturesRef: [any, Texture][] = []

    read(context: ReaderContext): this {
        this._viewerConfig = {}
        context.jsonDoc.json.scenes?.forEach((sceneDef, sceneIndex)=>{
            if (sceneDef.extensions && sceneDef.extensions[viewerGLTFExtension]) {
                const prop = new WebGIViewerExtensionProperty(this.document.getGraph())
                context.scenes[sceneIndex].setExtension(viewerGLTFExtension, prop)
                this._viewerConfig = sceneDef.extensions[viewerGLTFExtension] as any
                // prop.setExtras()

                /*
                const buffers = [] as any[]

                Object.values(viewerConfig.resources).forEach((res: any) => {
                    Object.values(res).forEach((item: any) => {
                        if (!item.url) return
                        if (item.url.data?.image !== null) {
                            buffers.push(item.url)
                        }
                    })
                })
                const jsonDoc = context.jsonDoc
                console.log(buffers)
                for (const buffer of buffers) {
                    const img = buffer.data.image as number
                    const imageDef = jsonDoc.json.images![img]
                    const bufferViewDef = jsonDoc.json.bufferViews![imageDef.bufferView!]
                    const bufferDef = jsonDoc.json.buffers![bufferViewDef.buffer]
                    const bufferData = bufferDef.uri ? jsonDoc.resources[bufferDef.uri] : jsonDoc.resources[GLB_BUFFER]
                    const byteOffset = bufferViewDef.byteOffset || 0
                    const byteLength = bufferViewDef.byteLength
                    const imageData = bufferData.slice(byteOffset, byteOffset + byteLength)
                    const texture = this.document.createTexture(imageDef.name)
                    texture.setImage(imageData)
                    this._texturesRef.push([buffer, texture])
                }
                */


            }
        })
        return this
    }

    write(context: WriterContext): this {
        this.document.getRoot().listScenes().forEach((scene)=>{
            const prop = scene.getExtension(viewerGLTFExtension)
            if (prop) {
                const sceneDef = context.jsonDoc.json.scenes?.[context.jsonDoc.json.scene || 0] // todo: get proper scene index, if working with multiple scenes
                if (sceneDef && Object.keys(this._viewerConfig).length > 0) {
                    sceneDef.extensions = sceneDef.extensions || {}

                    /*
                    console.log(context.jsonDoc.json.images)
                    for (const [buffer, texture] of this._texturesRef) {
                        const imageDef = context.createPropertyDef(texture) as GLTF.IImage
                        context.createImageData(imageDef, texture.getImage()!, texture)
                        buffer.data.image = context.jsonDoc.json.images!.push(imageDef) - 1
                        context.imageIndexMap.set(texture, buffer.data.image)
                    }
                    console.log(context.jsonDoc.json)
                    */

                    sceneDef.extensions[viewerGLTFExtension] = this._viewerConfig

                    this._texturesRef = []
                    this._viewerConfig = {}

                }
            }
        })

        return this
    }

    required = true
}

