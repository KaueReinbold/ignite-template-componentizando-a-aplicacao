import './styles/global.scss';

import { WatchMeContextProvider } from './contexts/WatchMeContext';

import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

export function App() {
  return (
    <WatchMeContextProvider>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <SideBar />

        <Content />
      </div>
    </WatchMeContextProvider>
  );
}
