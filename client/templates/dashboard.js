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

Template.locationEnabledProducts.events({
  'click .pkg-settings, click [data-event-action=showPackageSettings]': function (event) {
    event.preventDefault();
    event.stopPropagation();
    const pkgData = {
      label: 'Location Enabled Products Settings',
      route: 'dashboard/location-enabled-products',
      provides: 'settings',
      container: 'dashboard',
      template: 'locationEnabledProductsSettings'
    };
    // Show the advanced settings view using this package registry entry
    ReactionCore.showActionView(pkgData);
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
