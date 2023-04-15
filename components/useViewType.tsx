import { ViewType } from "../types";

export const viewSizes = {
  normal: 1024,
  tablet: 768,
  mobile: 320,
};

export default (width: number) => {
  if (width > viewSizes.normal) return ViewType.NORMAL;
  if (width > viewSizes.tablet) return ViewType.TABLET;
  return ViewType.MOBILE;
};

