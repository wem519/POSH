import { Wrapper, UploadBtn, Label, InputBox } from "./ProductWrite.styles";
import LayoutFooterM from "../../../../commons/layout/footer_mobile/LayoutFooter";
import LayoutHeader from "../../../../commons/layout/header_mobile/Layoutheader";
// import LayoutHeader from "../../../../commons/layout/header_mobile/LayoutHeader";

export default function ProductWrite() {
  return (
    <>
      <LayoutHeader />
      <Wrapper>
        <div>
          {new Array(5).fill(1).map((el) => (
            <UploadBtn>+</UploadBtn>
          ))}
        </div>
        <div>
          {new Array(5).fill(1).map((el) => (
            <UploadBtn>+</UploadBtn>
          ))}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Label>상품명*</Label>
          <InputBox type="text" placeholder="상품명을 입력해주세요" />
          <Label>가격*</Label>
          <InputBox type="text" placeholder="가격을 입력해주세요" />
          <Label>상세설명*</Label>
          <InputBox
            type="text"
            placeholder="상품 상세 설명을 입력해주세요
      ex. 사이즈, 색상 등"
          />
          <Label>거래장소*</Label>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div>
              <InputBox type="text" placeholder="02810" />
              <button>우편번호검색</button>
            </div>
            <InputBox type="text" />
            <InputBox type="text" />
          </div>
        </div>
        <button>등록하기</button>
        {/* <button>수정하기</button> */}
      </Wrapper>
      <LayoutFooterM />
    </>
  );
}
