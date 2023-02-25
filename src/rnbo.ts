import { createDevice } from "@rnbo/js";
export const setupRnbo = async (context: AudioContext) => {
  const rawPatcher = await fetch("patch.export.json"); // これでhttpリクエストを投げることができる
  const patcher = await rawPatcher.json();
  const device = await createDevice({ patcher, context });
  const dependencies = await (await fetch("dependencies.json")).json();
  await device.loadDataBufferDependencies(dependencies); // bufferをロードする
  return device;
};
