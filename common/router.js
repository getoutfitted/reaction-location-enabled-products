locationEnabledProductsController = ShopAdminController.extend({
  onBeforeAction: function () {
    let locationEnabledProdcuts = ReactionCore.Collections.Packages.findOne({
      name: 'reaction-location-enabled-products'
    });
    if (! locationEnabledProdcuts.enabled) {
      this.render('notFound');
    } else {
      this.next();
    }
  }
});

Router.route('set-cart-location', {
  controller: locationEnabledProductsController,
  template: 'setCartLocation'
});

Router.route('dashboard/location-enabled-products', {
  controller: ShopAdminController,
  path: 'dashboard/location-enabled-products',
  template: 'locationEnabledProducts',
  waitOn: function () {
    return ReactionCore.Subscriptions.Packages;
  }
});
