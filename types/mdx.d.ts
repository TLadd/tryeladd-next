declare module "*.mdx" {
  let MDXComponent: (props: any) => JSX.Element;
  export default MDXComponent;

  interface FrontMatter {
    __resourcePath: string;
    date: string;
    description: string;
    title: string;
  }

  export var frontMatter: FrontMatter;
}
