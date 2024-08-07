import React from 'react';
function NavbarIcon({icon, text = 'tooltip 💡'}) {
  return (
    <div className='sidebar-icon group'>
        {icon}

        <span className='sidebar-tooltip group-hover:scale-100'>{text}</span>
    </div>
  )
}


export default function Navbar({ id, links, footer}) {
  if (!id) {
    return null;
  }

  return (
    <nav className="">
      <div className="fixed top-0 left-0 h-screen w-16 flex flex-col justify-between bg-[#202225]">
        <ul className="">
          {links.map((link, index) => (
            <li key={index}>
              <a href={`/${id}${link.href}`}>
                  <NavbarIcon icon={link.icon} text={link.text} />
              </a>
            </li>
          ))}
        </ul>
        <div>
          {footer}
        </div>
      </div>
    </nav>
  );
}