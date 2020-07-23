import React from 'react';

import { Auth } from './auth';

const AppProvider: React.FC = ({ children }) => <Auth>{children}</Auth>;

export default AppProvider;
