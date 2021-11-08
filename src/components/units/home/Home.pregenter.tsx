import {
  Logo,
  TopWrapper,
  Wrapper,
  Search,
  BodyWrpper,
  BodyBox,
  SearchIcon,
} from "./Home.styles";

export default function HomeUI() {
  return (
    <Wrapper>
      <TopWrapper>
        <Logo src="/images/logo.png"></Logo>
      </TopWrapper>
      <div>
        <Search placeholder="검색어를 입력해주세요"></Search>
        <SearchIcon />
      </div>
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
