declare interface IYWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
}

declare module 'YWebPartStrings' {
  const strings: IYWebPartStrings;
  export = strings;
}
