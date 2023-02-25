import { createDevice } from "@rnbo/js";
export const setupRnbo = async (context: AudioContext) => {
  const rawPatcher = await fetch("patch.export.json"); // これでhttpリクエストを投げることができる
  const patcher = await rawPatcher.json();
  const device = await createDevice({ patcher, context });
  return device;
};
