import React from 'react';
import { render } from '@testing-library/react';

import { TabPanel } from 'Components/Commons/Tabs';

describe('Tests for component <TabPanel />', () => {
    test('Take Snapshot', () => {
        const { asFragment } = render(
            <TabPanel value={0} index={0}>
                Tab Panel
            </TabPanel>,
        );

        expect(asFragment()).toMatchSnapshot();
    });
});
