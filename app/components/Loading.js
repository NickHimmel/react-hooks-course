import React from 'react'
import PropTypes from 'prop-types'

const styles = {
  content: {
    fontSize: '35px',
    position: 'absolute',
    left: '0',
    right: '0',
    marginTop: '20px',
    textAlign: 'center',
  }
}

export default function Loading(props) {
  const [text, setText] = React.useState(props.text);
  const id = React.useRef(null)

  const clear = () => window.clearInterval(id.current)

  React.useEffect(() => {
    id.current = window.setInterval(() => {
      setText(text + '.')
    }, props.speed)

    return clear
  }, [])

  React.useEffect(() => {
    if (text === props.text + '...') {
      clear()
    }
  }, [text])

  return (
    <p style={styles.content}>
      {text}
    </p>
  )
}

Loading.propTypes = {
  text: PropTypes.string.isRequired,
  speed: PropTypes.number.isRequired,
}

Loading.defaultProps = {
  text: 'Loading',
  speed: 300
}
