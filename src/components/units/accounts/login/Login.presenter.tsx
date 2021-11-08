import { TitleWrapper, Wrapper } from "./Login.styles";

export default function LoginUI() {
  return (
    <>
      <Wrapper>
        <TitleWrapper>
          {/* <img
            src="/images/logo.png"
            style={{
              width: "154px",
              height: "87px",
              fontSize: "64px",
            }}
          /> */}
          <div
            style={{
              fontSize: "64px",
              color: "#FFFFFF",
              fontFamily: "NotoSansitalic",
              lineHeight: "87px",
              fontWeight: "bold",
            }}
          >
            POSH
          </div>
        </TitleWrapper>
        <div
          style={{
            marginTop: "34px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ marginTop: "38px" }}>
            <input
              placeholder="email ID"
              style={{
                width: "358px",
                height: "52px",
                paddingLeft: "24px",
                backgroundColor: "rgba(249,249,249,0.8)",
                borderRadius: "4px",
                border: "0px solid rgba(249,249,249,0.8) ",
                fontSize: "16px",
              }}
            />
            <div></div>
          </div>
          <div style={{ marginTop: "38px" }}>
            <input
              placeholder="Password"
              style={{
                width: "358px",
                height: "52px",
                paddingLeft: "24px",
                backgroundColor: "rgba(249,249,249,0.8)",
                borderRadius: "4px",
                border: "0px solid rgba(249,249,249,0.8) ",
                fontSize: "16px",
              }}
            />
            <div></div>
          </div>
          <div style={{ marginTop: "81px" }}>
            <button
              style={{
                width: "358px",
                height: "54px",
                color: "#8915A6",
                fontFamily: "NotoSansKRmedium",
                fontWeight: 700,
                fontSize: "18px",
                lineHeight: "26px",
                borderRadius: "4px",
                backgroundColor: "#FFFFFF",
                border: "0px solid #FFFFFF ",
              }}
            >
              로그인
            </button>
          </div>
        </div>
      </Wrapper>
    </>
  );
}
