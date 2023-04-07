import {Component} from 'react'

import {AiOutlineUnderline} from 'react-icons/ai'
import {GoItalic} from 'react-icons/go'
import {VscBold} from 'react-icons/vsc'

import './App.css'

import {
  BgContainer,
  ImageContainer,
  Image,
  ButtonContainer,
  ButtonTextContainer,
  TextArea,
  ButtonOne,
  ButtonTwo,
  ButtonThree,
} from './styledComponent'
// Replace your code here

class App extends Component {
  state = {bold: false, italic: false, underline: false}

  onClickButtonOne = () => {
    this.setState(prevState => ({bold: !prevState.bold}))
  }

  onClickButtonTwo = () => {
    this.setState(prevState => ({italic: !prevState.italic}))
  }

  onClickButtonThree = () => {
    this.setState(prevState => ({underline: !prevState.underline}))
  }

  render() {
    const {bold, italic, underline} = this.state
    console.log(bold)

    return (
      <BgContainer>
        <ImageContainer>
          <div>
            <h1>Text Editor</h1>
            <Image
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </div>
          <ButtonTextContainer>
            <ButtonContainer>
              <li>
                <ButtonOne
                  type="button"
                  outline={bold}
                  onClick={this.onClickButtonOne}
                  data-testid="bold"
                >
                  <VscBold size={25} />
                </ButtonOne>
              </li>
              <li>
                <ButtonTwo
                  type="button"
                  outline={italic}
                  onClick={this.onClickButtonTwo}
                  data-testid="italic"
                >
                  <GoItalic size={25} />
                </ButtonTwo>
              </li>
              <li>
                <ButtonThree
                  type="button"
                  outline={underline}
                  onClick={this.onClickButtonThree}
                  data-testid="underline"
                >
                  <AiOutlineUnderline size={25} />
                </ButtonThree>
              </li>
            </ButtonContainer>
            <TextArea
              rows="32"
              cols="55"
              bold={bold}
              italic={italic}
              underline={underline}
            />
          </ButtonTextContainer>
        </ImageContainer>
      </BgContainer>
    )
  }
}

export default App
