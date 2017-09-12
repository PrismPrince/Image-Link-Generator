const app = new Vue({
  el: '#app',
  mixins: [mix_prodkinds, mix_layouts],
  data: {
    sku: '',
    colorways: null,
    links: {
      string: '',
      array: []
    }
  },
  computed: {
    normalize_sku() {
      return this.sku.trim().toUpperCase();
    },
    code() {
      return this.normalize_sku.split('-')[1];
    },
    prodkind() {
      return this.normalize_sku.split('-')[2];
    }
  },
  methods: {
    copy_to_clipboard() {
      document.getElementById('links').select();
      document.execCommand('copy');
    },
    generate_links() {
      switch (this.prodkind) {
        case 'AIO':
          this.links.array = this.layout_AIO().toString().split(',').reverse();
          break;
        case 'HFS':
          this.links.array = this.layout_AIO().toString().split(',').reverse();
          break;
      }

      this.links.string = this.links.array.toString().replace(/,/g, '\n');
    }
  }
})
