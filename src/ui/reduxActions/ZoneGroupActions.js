import _ from 'lodash';
import { createAction } from 'redux-actions';
import Constants from '../constants';

import SonosService from '../services/SonosService';

export const selectGroup = createAction(Constants.ZONE_GROUP_SELECT, group => {
    const zone = _(group).find({
        coordinator: 'true'
    });

    SonosService.selectCurrentZone(zone);
    SonosService.queryState();

    return zone;
});

export const showGroupManagement = createAction(
    Constants.GROUP_MANAGEMENT_SHOW
);
