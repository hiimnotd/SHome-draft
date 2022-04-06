import {RootState} from '@store/allReducers';
import isEqual from 'react-fast-compare';
import {useSelector as useReduxSelector} from 'react-redux';

function useSelector<T>(
  selector: (state: RootState) => T,
  equalityFn = isEqual,
): T {
  return useReduxSelector<RootState, T>(selector, equalityFn);
}

export {useSelector};
