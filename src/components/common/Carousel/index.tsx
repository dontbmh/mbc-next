import { Fragment, ReactNode } from "react";
import Title, { TitleProps } from "../Title";

type CarouselProps<T> = {
  title: string;
  data: T[];
  renderItem: (item: T) => ReactNode;
  keyExtractor: (item: T) => string;
} & TitleProps;

const Carousel = <T extends any>({
  title,
  data,
  renderItem,
  keyExtractor,
  size,
}: CarouselProps<T>) => {
  return (
    <div>
      <Title size={size}>{title}</Title>
      {data.map((e) => (
        <Fragment key={keyExtractor(e)}>{renderItem(e)}</Fragment>
      ))}
    </div>
  );
};

export default Carousel;
