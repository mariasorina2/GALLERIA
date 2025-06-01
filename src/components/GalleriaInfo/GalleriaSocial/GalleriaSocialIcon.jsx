function SocialIcon({ href, children }) {
  return (
    <a href={href} className="icon-wrapper" target="_blank" rel="noreferrer" aria-label={href}>
      {children}
    </a>
  )
}

export default SocialIcon
