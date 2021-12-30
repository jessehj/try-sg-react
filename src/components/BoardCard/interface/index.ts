import ThumnailImageProps from "../ThumbnailImage/interface";

export default interface BoardCardProps extends ThumnailImageProps {
  width?: string;
  height?: string;
  title?: string;
  explain?: string;
  isOwner: boolean;
}
