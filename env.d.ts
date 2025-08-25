declare global {
  namespace NodeJS {
    interface ProcessEnv {
      USER_NAME: string;
      USER_PASSWORD: string;
      dashboardurl: string;
      prodURL: string;
    }
  }
}

export {};