import React from 'react'

export const SubTitle = (props) => {
  const { title } = props

  return <small>{title}</small>
}

SubTitle.displayName = 'SubTitle'

SubTitle.propTypes = {
  title: React.PropTypes.string
}
