import {
  TitleWrapper,
  Wrapper,
  Title,
  AccountWrapper,
  Account,
  AccountInfo,
  Error,
  ButtonWrapper,
  Login,
} from "./Login.styles";

export default function LoginUI() {
  return (
    <>
      <Wrapper>
        <TitleWrapper>
          <Title>POSH</Title>
        </TitleWrapper>
        <AccountWrapper>
          <Account>
            <AccountInfo placeholder="email ID" type="text" />
            <Error></Error>
          </Account>
          <Account>
            <AccountInfo placeholder="Password" type="password" />
            <Error></Error>
          </Account>
          <ButtonWrapper>
            <Login>로그인</Login>
          </ButtonWrapper>
        </AccountWrapper>
      </Wrapper>
    </>
  );
}
