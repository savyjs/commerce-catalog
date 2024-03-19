import type { Schema, Attribute } from '@strapi/strapi';

export interface TimedateUnitsWeekDay extends Schema.Component {
  collectionName: 'components_timedate_units_week_days';
  info: {
    displayName: 'week day';
  };
  attributes: {
    day: Attribute.Integer;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'timedate-units.week-day': TimedateUnitsWeekDay;
    }
  }
}
