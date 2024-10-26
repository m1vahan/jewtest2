import { ViewerApp, AssetManagerPlugin, GBufferPlugin, ProgressivePlugin, TonemapPlugin, SSRPlugin, SSAOPlugin, BloomPlugin, GammaCorrectionPlugin, addBasePlugins } from "@webgi/core";

async function setupViewer() {
    const viewer = new ViewerApp({
        canvas: document.getElementById("mcanvas")
    });

    await addBasePlugins(viewer);

    const manager = await viewer.addPlugin(AssetManagerPlugin);

    // Add some plugins
    await viewer.addPlugin(GBufferPlugin);
    await viewer.addPlugin(new ProgressivePlugin(32));
    await viewer.addPlugin(new TonemapPlugin(true));
    await viewer.addPlugin(GammaCorrectionPlugin);
    await viewer.addPlugin(SSRPlugin);
    await viewer.addPlugin(SSAOPlugin);
    await viewer.addPlugin(BloomPlugin);

    // Load a model
    const model = "https://demo-assets.pixotronics.com/pixo/gltf/earringScene2.glb";
    await manager.addFromPath(model);

    viewer.renderer.refreshPipeline();
}

setupViewer();
