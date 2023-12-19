export {};

declare global {
  interface standardFirebaseResponse {
    title: string;
    description: string;
    urlLink?: string;
  }

  interface Articles extends standardFirebaseResponse {
    asideImage?: string;
  }

  interface Experiences extends standardFirebaseResponse {
    title2?: string;
    title3?: string;
    asideText?: string;
    technologies?: string[];
    orderId?: number;
  }

  interface Projects extends standardFirebaseResponse {
    asideImage?: string;
    technologies?: string[];
  }
}
