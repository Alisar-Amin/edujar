import './NavBar.css'

export default function NavBar({ logoPartOne, logoPartTwo, navItems, btn }) {
  function showMenu() {
    const navMenu = document.querySelector(".navMenu");
    const icon = document.querySelector(".burger svg");

    if (icon.classList.contains("fa-bars")) {
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-xmark");
    }
    else {
      icon.classList.add("fa-bars");
      icon.classList.remove("fa-xmark");
    }
    navMenu.classList.toggle("active");
  }
  return (
    <>
      <nav>
        <h1 className='logo'>{logoPartOne}<span>{logoPartTwo}</span></h1>
        <ul>
          {navItems.map((element, index) => {
            return (
              <li key={index}><a href="#">{element}</a></li>
            )
          })}
        </ul>
        <button className='sign'>{btn}</button>
        <button className="burger" onClick={showMenu}><i className="fas fa-bars"></i></button>
      </nav>

      <div className="navMenu active">
        <ul>
          {navItems.map((element, index) => {
            return (
              <li key={index}><a href="#">{element}</a></li>
            )
          })}
        </ul>
        <button>{btn}</button>
      </div>
    </>
  )
}
