Template.locationEnabledProductsSettings.helpers({
  packageData: function () {
    return ReactionCore.Collections.Packages.findOne({
      name: 'reaction-location-enabled-products'
    });
  }
});

Template.locationEnabledProducts.helpers({
  packageData: function () {
    return ReactionCore.Collections.Packages.findOne({
      name: 'reaction-location-enabled-products'
    });
  }
});

AutoForm.hooks({
  'location-enabled-products-update-form': {
    onSuccess: function () {
      Alerts.removeSeen();
      return Alerts.add('Location Enabled Products settings saved.', 'success');
    },
    onError: function (operation, error) {
      Alerts.removeSeen();
      return Alerts.add('Location Enabled Products settings update failed. ' + error, 'danger');
    }
  }
});
