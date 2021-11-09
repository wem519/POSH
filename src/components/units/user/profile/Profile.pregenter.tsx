import {
  Wrapper,
  TopWrapper,
  Logo,
  ProfileWrapper,
  ProfileImage,
  ProfileNicname,
  Menu,
  MenuWrapper,
  BodyWrpper,
  BodyBox,
} from "./Profile.styles";

export default function ProfileUI() {
  return (
    <Wrapper>
      <TopWrapper>
        <Logo src="/images/logo.png"></Logo>
      </TopWrapper>
      <ProfileWrapper>
        <ProfileImage />
        <ProfileNicname>뭉치</ProfileNicname>
      </ProfileWrapper>
      <MenuWrapper>
        <Menu>Selling</Menu>
        <Menu>Sould out</Menu>
      </MenuWrapper>
      <BodyWrpper>
        <div style={{ display: "flex" }}>
          <BodyBox />
          <BodyBox />
          <BodyBox />
        </div>
        <div style={{ display: "flex" }}>
          <BodyBox />
          <BodyBox />
          <BodyBox />
        </div>
        <div style={{ display: "flex" }}>
          <BodyBox />
          <BodyBox />
          <BodyBox />
        </div>
        <div style={{ display: "flex" }}>
          <BodyBox />
          <BodyBox />
          <BodyBox />
        </div>
      </BodyWrpper>
    </Wrapper>
  );
}
