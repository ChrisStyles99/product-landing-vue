const app = new Vue({
  el: '#app',
  data: {
    darkMode: true,
    isActive: false,
    navLinks: ['Welcome', 'About', 'Pricing'],
    pricingList: [
    {
      name: 'Lorem SE',
      price: '$300',
      image: 'https://images.unsplash.com/photo-1513918596785-a2fcc5a5d302?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
      features: ['Economic', 'Something', 'Lorem']
    },
    {
      name: 'Lorem Normal',
      price: '$500',
      image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
      features: ['Normal one', 'Something', 'Lorem']
    },
    {
      name: 'Lorem XL',
      price: '$700',
      image: 'https://images.unsplash.com/photo-1509227035009-4bef0b738dd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1266&q=80',
      features: ['Powerful', 'Something', 'Lorem']
    }]
  },
  methods: {
    modeToggle: function() {
      this.darkMode = !this.darkMode;
    },
    navToggle: function() {
      this.isActive = !this.isActive;
    }
  }
});