declare namespace JSX {
    interface IntrinsicElements {
      "dotlottie-player": any;
    }
  }

  declare module '*.jfif' {
    const jpgPath: string;
    export default jpgPath;
}