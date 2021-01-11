import React from "react"
import ReactDOM from "react-dom"
import styled from "@emotion/styled"
import css from "@emotion/css"


const getEmotion11Library1Chunk = async () => {
  return await import("emotion-11-library-1")
}

const getEmotion11Library2Chunk = async () => {
  return await import("emotion-11-library-2")
}

setTimeout(() => {
  getEmotion11Library1Chunk().then((chunk) => {
    ReactDOM.render(<chunk.Library1 />, document.getElementById(`placeholder1`))
  })
}, 2000)

setTimeout(() => {
  getEmotion11Library2Chunk().then((chunk) => {
    ReactDOM.render(<chunk.Library2 />, document.getElementById(`placeholder2`))
  })
}, 4000)

const redStyle = () => css`
  color: red;
`

const Title = styled.h1`
  color: pink;
  ${redStyle};
`

ReactDOM.render(
    <Title>Welcome!</Title>,
  document.getElementById(`app`)
)
