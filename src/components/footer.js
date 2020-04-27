import React from "react"
import UserLink from './userLinks'
import config from '../../data/siteConfig'

const Footer = () => {
    return(
        <div><UserLink link={config.reponame} user={config.gitUsername}/></div>
    )
}
export default Footer