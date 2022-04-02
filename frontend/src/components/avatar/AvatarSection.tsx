import { StyledAvatarSection, StyledAvatar } from "./StyledAvatarSection";

interface Props {
  name: string;
}

function AvatarSection({ name }: Props) {
  return (
    <StyledAvatarSection>
      <StyledAvatar>{name.charAt(0)}</StyledAvatar>
    </StyledAvatarSection>
  );
}

export default AvatarSection;
