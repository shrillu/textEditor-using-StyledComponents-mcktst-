import styled from 'styled-components'

export const BgContainer = styled.div`
  background-color: #25262c;
  height: 100vh;
  padding: 40px;
`
export const ImageContainer = styled.div`
  background-color: #1b1c22;
  height: 85%;
  display: flex;
  width: 80%;
  justify-content: center;
  padding: 30px;
`

export const Image = styled.img`
  width: 400px;
  height: 70%;
`

export const ButtonTextContainer = styled.div`
  margin-left: 50px;
`

export const ButtonContainer = styled.ul`
  list-style-type: none;
  background-color: #25262c;
  width: 100%;
  min-height: 40px;
  border: 1px solid #cbd5e1;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  display: flex;
  padding-top: 20px;
  padding-left: 20px;
  padding-bottom: 20px;
`
export const TextArea = styled.textarea`
  background-color: #25262c;
  width: 100%;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  height: 90%;
  color: #ffffff;
  font-size: 18px;
  font-family: 'Roboto';
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
  font-style: ${props => (props.italic ? 'italic' : 'normal')};
  text-decoration: ${props => (props.underline ? 'underline' : 'normal')};
`

export const ButtonOne = styled.button`
  background-color: transparent;
  border: 0px;
  margin-right: 20px;
  font-size: 18px;
  color: ${props => (props.outline ? '#faff00' : '#f1f5f9')};
  font-weight: bold;
`
export const ButtonTwo = styled(ButtonOne)`
  font-style: italic;
  color: ${props => (props.outline ? '#faff00' : '#f1f5f9')};
`

export const ButtonThree = styled(ButtonOne)`
  text-decoration: underline;
  ${props => (props.outline ? '#faff00' : '#f1f5f9')};
`
