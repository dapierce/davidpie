import React from "react"

const Footer = () => (
  <footer>
    <p>
      © {new Date().getFullYear()} David Aaron Pierce
      <br />
      Built with{` `}
      <span className="emoji">
        <span role="img" aria-label="coffee">
          <a href="https://ko-fi.com/dapierce">☕</a>
        </span>
      </span>
      {` `}
      and <a href="https://www.gatsbyjs.org">Gatsby</a>
    </p>
  </footer>
)

export default Footer
