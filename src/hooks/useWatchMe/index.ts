import { useContext } from 'react';

import { WatchMeContext } from '../../contexts/WatchMeContext';

export function useWatchMe() {
  const context = useContext(WatchMeContext);

  return context;
}
