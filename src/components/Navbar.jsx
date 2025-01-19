import { NavbarItem } from "./NavbarItem"
function Navbar() {
  return (
    <div className="flex bg-yellow-200 dark:bg-gray-800 p-4 justify-center items-center gap-6 sm:gap-12">
            <NavbarItem title="Trending" param="trending" />
            <NavbarItem title="Top Rated" param="rated" />
    </div>
  )
}

export default Navbar