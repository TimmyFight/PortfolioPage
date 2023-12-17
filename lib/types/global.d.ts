export {};

declare global {
  interface Articles {
    title: string;
    description: string;
    asideImage?: string;
    urlLink?: string;
  }

  interface Experiences {
    title: string;
    title2?: string;
    title3?: string;
    description: string;
    asideText?: string;
    technologies?: string[];
  }

  interface Projects {
    title: string;
    description: string;
    asideImage?: string;
    technologies?: string[];
    urlLink?: string;
  }
}
