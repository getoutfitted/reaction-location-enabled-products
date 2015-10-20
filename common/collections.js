ReactionCore.Schemas.LocationEnabledProductsPackageConfig = new SimpleSchema([
  ReactionCore.Schemas.PackageConfig, {
    'settings.google_maps_api_key': {
      type: String,
      label: 'Google Maps Browser API Key'
    },
    'settings.mapbox_api_key': {
      type: String,
      label: 'Mapbox API Key'
    }
  }
]);
