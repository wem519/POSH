import styled from '@emotion/styled'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const TopWrapper = styled.div`
  width: 390px;
  height: 96px;
  text-align: center;
  background-color: #8915A6;
`
export const Logo = styled.img`
  margin-top: 44px;
`
export const Search = styled.input`
  width: 358px;
  height: 42px;
  background-color: #F3F3F3;
  border-radius: 4px;
  margin-top: 13px;
  padding-left: 12px;
  border: none;
  font-family: "NotoSansKRregular";
  font-size: 16px;
  ::placeholder {
    color: #8915A6;
    opacity: 30%;
  }
`

export const SearchIcon = styled(SearchOutlinedIcon)`
  position: absolute;
  right: 30px;
  top: 118px;
  color: #8915A6;
`
export const BodyWrpper = styled.div`
  width: 358px;
  height: 590px;
  margin-top: 13px;
  display: flex;
  flex-direction: column;
`
export const BodyBox = styled.div`
  width: 120px;
  height: 120px;
  background-color: #F3F3F3;
  border: #fff solid 1px;
`