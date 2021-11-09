import {
  Wrapper,
  ProfileWrapper,
  Profile,
  AccountWrapper,
  AccountInfo,
  Label,
  AccountInput,
  SubmitWrapper,
  Signup,
} from "./Signup.styles";

export default function SignupUI() {
  return (
    <Wrapper>
      <div>
        <ProfileWrapper>
          <Profile>P</Profile>
        </ProfileWrapper>
        <AccountWrapper>
          <AccountInfo>
            <Label>이메일*</Label>
            <AccountInput
              type="text"
              placeholder="이메일을 입력해주세요"
            ></AccountInput>
            <div></div>
          </AccountInfo>
          <AccountInfo>
            <Label>아이디*</Label>
            <AccountInput
              type="text"
              placeholder="아이디를 입력해주세요"
            ></AccountInput>
            <div></div>
          </AccountInfo>
          <AccountInfo>
            <Label>비밀번호*</Label>
            <AccountInput
              type="password"
              placeholder="비밀번호를 입력해주세요"
            ></AccountInput>
            <div></div>
          </AccountInfo>
          <AccountInfo>
            <Label>비밀번호 확인*</Label>
            <AccountInput
              type="password"
              placeholder="비밀번호를 입력해주세요"
            ></AccountInput>
            <div></div>
          </AccountInfo>
        </AccountWrapper>
        <SubmitWrapper>
          <Signup>시작하기</Signup>
        </SubmitWrapper>
      </div>
    </Wrapper>
  );
}
