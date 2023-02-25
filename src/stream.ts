export const setupMicrophoneSource = async (context: AudioContext) => {
  const stream = await navigator.mediaDevices.getUserMedia({
    audio: {
      echoCancellation: false,
      noiseSuppression: false,
      sampleRate: 48000,
    },
  });
  const source = context.createMediaStreamSource(stream);
  return source;
};
