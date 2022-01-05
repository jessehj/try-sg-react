export default interface BoardFooterProps {
  isOwner: boolean;
  userProfileImg: string;
  userName?: string;
  onDelete?: () => void;
  onReWrite?: () => void;
}
