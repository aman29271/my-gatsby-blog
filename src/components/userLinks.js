import React from "react"
import footerStyles from "./modules/footer.module.scss"
const UserLink = ({ user, link }) => {
  return (
    <div>
      <a
        href={`https://github.com/${user}/${link}`}
        target="_blank"
        rel="noopener noreferrer"
        className={footerStyles.link}
      >
        <span>GitHub</span>
      </a>
    </div>
  )
}
export default UserLink
