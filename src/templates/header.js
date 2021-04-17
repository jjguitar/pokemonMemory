import pokemon from '../assets/img/pokemon.svg'
const Header = () => {
  return `
    <div class="logo-container">
      <img src="${pokemon}" width="240" height="100" alt="logo">
    </div>
  `
}

export default Header;