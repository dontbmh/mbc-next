import variables from "@/components/variables";
import { Fragment, PropsWithChildren, ReactNode } from "react";

export type TitleProps = PropsWithChildren<{
  size: keyof (typeof variables)["titleSize"];
}>;

const Title = (props: TitleProps) => <></>;

export default Title;
