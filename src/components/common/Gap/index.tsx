import variables from "@/components/variables";
import { Fragment, PropsWithChildren, ReactNode } from "react";

export type TitleProps = PropsWithChildren<{
  size: keyof (typeof variables)["titleSize"];
}>;

const Gap = ({ size }: TitleProps) => <div style={{ width: size }}></div>;

export default Gap;
