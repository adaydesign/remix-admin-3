import { LinksGroup } from "../NavbarLinksGroup/NavbarLinksGroup"
import classes from "./NavbarNested.module.css"
import { APP_MENU, AppMenu } from "~/constants/app.menu"
import { useMemo } from "react"


const NavbarNested = () => {
  const links = useMemo(()=>{
    return APP_MENU.map((item: AppMenu) => (
      <LinksGroup {...item} key={item.label} />
    ))
  },[APP_MENU])

  return (
    <nav className={classes.navbar}>
      <div className={classes.links}>
        <div className={classes.linksInner}>{links}</div>
      </div>
    </nav>
  )
}

export default NavbarNested
