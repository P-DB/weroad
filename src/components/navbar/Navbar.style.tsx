const NavbarStyle = {
    nav: 'bg-white border-b border-gray-5 lg:fixed lg:top-0 lg:left-0 lg:right-0 lg:z-50',
    container : 'flex items-center justify-between max-w-6xl mx-auto pl-3 py-4 pr-4',
    content:'flex items-center',
    find: 'flex items-center ml-2 pl-2 lg:ml-5 lg:pl-4 border-l border-gray-4-200 lg:border-gray-4 hover:cursor-pointer',
    magnify:'mr-2 lg:mr-4',
    findTextMobile:'text-gray-2 lg:hidden',
    findTextDesktop:'hidden lg:inline-block text-gray-2 text-base',
    button: 'hidden lg:block mr-5',
    menuButton: 'lg:hidden ml-4',
    menu:'hidden lg:flex items-center',
    menuItem: 'flex items-center mr-7 text-gray-2 hover:cursor-pointer',
    menuItemArrow: 'ml-2',
    userBadge:'hidden hover:cursor-pointer lg:flex items-center border border-gray-5 rounded-full mr-4 py-1 pl-1 pr-2',
    userIcon:'mr-1' 
}

export default NavbarStyle;