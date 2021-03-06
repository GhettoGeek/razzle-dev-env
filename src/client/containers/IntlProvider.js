import React from 'react';
import PropTypes from 'prop-types';
import { IntlProvider as Provider, addLocaleData } from 'react-intl';

import en from 'react-intl/locale-data/en';
import ru from 'react-intl/locale-data/ru';
import uz from 'react-intl/locale-data/uz';
import 'intl/locale-data/jsonp/en.js';
import 'intl/locale-data/jsonp/ru.js';
import 'intl/locale-data/jsonp/uz.js';

import { flatten } from '../helpers';
import messages from '../translations';

addLocaleData([...en, ...ru, ...uz]);

export const IntlProvider = React.memo(({ children, locale }) => {
  return (
    <Provider locale={locale} messages={flatten(messages[locale])}>
      {children}
    </Provider>
  );
});

IntlProvider.displayName = 'IntlProvider';

IntlProvider.propTypes = {
  children: PropTypes.any,
  locale: PropTypes.string
};
