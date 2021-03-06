import React from 'react';
import { render } from '@testing-library/react';

import { Transactions } from './index';

describe('Transactions', () => {
  it('should render', () => {
    const { getByTestId } = render(
      <Transactions transactions={[
        {
          companyName: 'PayPal',
          abbreviatedCount: '2.8M',
          countPercentage: 100,
        },
        {
          companyName: 'Google Play',
          abbreviatedCount: '476K',
          countPercentage: 17,
        },
        {
          companyName: 'Klarna',
          abbreviatedCount: '76',
          countPercentage: 0,
        },
      ]}
      />,
    );

    expect(getByTestId('transactions')).toBeInTheDocument();
    expect(getByTestId('transactions').children).toHaveLength(3);
  });
});
