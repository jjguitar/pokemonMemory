import pokemon from '../assets/img/pokemon.svg'
const Header = () => {
  return `
    <div class="logo-container">
      <img src="${pokemon}" width="300" height="140" alt="logo">
    </div>
  `
}

export default Header;