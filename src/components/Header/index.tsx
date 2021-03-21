import './styles.scss';

import { useWatchMe } from "../../hooks/useWatchMe";

export function Header() {
    const { selectedGenre } = useWatchMe();
    
  return (
    <header>
      <span className='category'>
        Categoria:<span> {selectedGenre.title}</span>
      </span>
    </header>
  );
}
