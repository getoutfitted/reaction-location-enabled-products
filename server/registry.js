ReactionCore.registerPackage({
  label: 'Location Enabled Products',
  name: 'reaction-location-enabled-products',
  icon: 'fa fa-map-marker',
  autoEnable: false,
  settings: {
    mode: false,
    // Tell eslint not to worry about the underscore vars in settings.
    /* eslint camelcase: [2, {properties: "never"}] */
    google_maps_api_key: '',
    mapbox_api_key: ''
  },
  registry: [
    // Dashboard card
    {
      provides: 'dashboard',
      label: 'Location Enabled Products',
      description: 'Location Enabled Products for Reaction Commerce',
      route: 'dashboard/location-enabled-products',
      icon: 'fa fa-map-marker',
      cycle: '3',
      container: 'dashboard'
    },

    // Settings panel
    {
      label: 'Location Enabled Products Settings',
      route: 'dashboard/location-enabled-products',
      provides: 'settings',
      container: 'dashboard',
      template: 'locationEnabledProductsSettings'
    }
  ],
  permissions: [
    {
      label: 'Location Enabled Products Settings',
      permission: 'dashboard/locationEnabledProducts',
      group: 'Shop Settings'
    }
  ]
});
