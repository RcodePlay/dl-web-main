declare global {
  namespace NodeJS {
    interface ProcessEnv {
      [key: string]: string | undefined;
      ATLAS_URI: string;
    }
  }
}
