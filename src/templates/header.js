import pokemon from '../assets/img/pokemon.svg'
const Header = () => {
  return `
    <div class="logo-container">
      <img src="${pokemon}" width="170" height="80" alt="logo">
    </div>
  `
}

export default Header;