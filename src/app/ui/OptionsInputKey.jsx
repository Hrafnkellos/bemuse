
import './OptionsInputKey.scss'
import React from 'react'
import c     from 'classnames'
import pure  from 'recompose/pure'

export const OptionsInputKey = React.createClass({
  render () {
    return <div className="OptionsInputKey" data-n={this.props.n}>
      <div
        className={c('OptionsInputKeyのcontents',
              { 'is-editing': this.props.isEditing })}
        onClick={this.handleClick}>
        <div className="OptionsInputKeyのtext">{this.props.text}</div>
      </div>
    </div>
  },
  handleClick () {
    this.props.onEdit('' + this.props.n)
  },
})

export default pure(OptionsInputKey)
