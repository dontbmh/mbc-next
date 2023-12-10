import { ReactNode, useCallback } from "react";
import { Carousel } from "../common";

type PropertyItem = {
  id: string;
  type: string;
  imageUrl: string;
};

type PropertyCarouselProps = {
  data: PropertyItem[];
};

const PropertyCarousel = ({ data }: PropertyCarouselProps) => {
  const renderItem = useCallback((item: PropertyItem) => {
    return <div></div>;
  }, []);

  return (
    <Carousel
      title="start your xxxx"
      data={data}
      renderItem={renderItem}
      keyExtractor={({ id }) => id}
    ></Carousel>
  );
};

export default PropertyCarousel;
