type CommonCardHeaderType = {
  data: {
    heading: string;
    title: string;
    desc: string;
    list: CardItemType[];
  };
  children: any;
};

type CommonCardType = {
  item: CardItemType
  type : string
};

type CardItemType = {
  title: string;
  desc: string;
  img: StaticImageData;
  img2?: StaticImageData;
  size?: number;
};