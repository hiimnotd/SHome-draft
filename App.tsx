import {store} from '@store/store';
import React from 'react';
import {I18nextProvider} from 'react-i18next';
import {View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import I18n from '@library/utils/i18n/i18n';

const App = () => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <I18nextProvider i18n={I18n}>
          <View />
        </I18nextProvider>
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
