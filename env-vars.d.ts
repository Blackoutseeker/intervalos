export declare global {
  namespace NodeJS {
    interface ProcessEnv {
      SOURCE_CODE_URL: string
      SITE_URL: string
      AUTHOR: string
    }
  }
}
