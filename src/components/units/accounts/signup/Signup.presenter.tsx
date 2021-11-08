export default function SignupUI() {
  return (
    <div
      style={{
        fontFamily: "NotoSansKRregular",
        width: "390px",
        height: "844px",
        backgroundColor: "#8915A6",
      }}
    >
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "75px",
          }}
        >
          <div
            style={{
              borderRadius: "50%",
              backgroundColor: "#f1f1f1",
              width: "118px",
              height: "118px",
              paddingRight: "10px",
              display: "flex",
              //   flexDirection: "row",
              justifyContent: "center",
              textAlign: "center",
              alignItems: "center",
              color: "#8915A6",
              fontFamily: "NotoSansregular",
              fontStyle: "italic",
              fontSize: "64px",
            }}
          >
            P
          </div>
        </div>
        <div
          style={{
            paddingTop: "30px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ paddingTop: "30px" }}>
            <div style={{ color: "#FFFFFF" }}>이메일*</div>
            <input
              style={{
                width: "358px",
                height: "52px",
                marginTop: "9px",
                paddingLeft: "24px",
                borderRadius: "4px",
                border: "0px solid #FFFFFF",
              }}
              placeholder="이메일을 입력해주세요"
            ></input>
            <div></div>
          </div>
          <div style={{ paddingTop: "39px" }}>
            <div style={{ color: "#FFFFFF" }}>아이디*</div>
            <input
              style={{
                width: "358px",
                height: "52px",
                marginTop: "9px",
                paddingLeft: "24px",
                borderRadius: "4px",
                border: "0px solid #FFFFFF",
              }}
              placeholder="아이디를 입력해주세요"
            ></input>
            <div></div>
          </div>
          <div style={{ paddingTop: "39px" }}>
            <div style={{ color: "#FFFFFF" }}>비밀번호*</div>
            <input
              style={{
                width: "358px",
                height: "52px",
                marginTop: "9px",
                paddingLeft: "24px",
                borderRadius: "4px",
                border: "0px solid #FFFFFF",
              }}
              placeholder="비밀번호를 입력해주세요"
            ></input>
            <div></div>
          </div>
          <div style={{ paddingTop: "39px" }}>
            <div style={{ color: "#FFFFFF" }}>비밀번호 확인*</div>
            <input
              style={{
                width: "358px",
                height: "52px",
                marginTop: "9px",
                paddingLeft: "24px",
                borderRadius: "4px",
                border: "0px solid #FFFFFF",
              }}
              placeholder="비밀번호를 입력해주세요"
            ></input>
            <div></div>
          </div>
        </div>
        <div
          style={{
            paddingTop: "50px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button
            style={{
              width: "358px",
              height: "54px",
              color: "#8915A6",
              borderRadius: "4px",
              border: "0px solid #FFFFFF",
            }}
          >
            시작하기
          </button>
        </div>
      </div>
    </div>
  );
}
