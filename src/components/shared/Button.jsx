import PropTypes from 'prop-types'

export default function Button({children,version,type,isDesabled}) {
  return (
    <button type={type} disabled={isDesabled} className={`btn btn-${version}`}>
        {children}   
    </button>
  )
}

Button.defaultProps={
    version:'primary',
    type:'button',
    isDesabled:false

}
Button.propTypes={
    children:PropTypes.node.isRequired,
    version:PropTypes.string,
    type:PropTypes.string,
    isDesabled:PropTypes.bool

}