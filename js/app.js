const app = new Vue({
  el: '#app',
  mixins: [mix_prodkinds, mix_layouts],
  data: {
    sku: '',
    colorways: null,
    greetings: [],
    prepend_parameter: false,
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
    clear() {
      this.sku = '';
      this.colorways = null;
      this.greetings = [];
      this.prepend_parameter = false;
      this.links = {
        string: '',
        array: []
      };
    },
    generate_links() {
      switch (this.prodkind) {
        case 'AIO':
          this.links.array = this.layout_AIO().toString().split(',').reverse();
          break;
        case 'FPC':
          this.links.array = this.layout_FPC().toString().split(',').reverse();
          break;
        case 'HFM':
          this.links.array = this.layout_HFM().toString().split(',').reverse();
          break;
        case 'HFS':
          this.links.array = this.layout_HFS().toString().split(',').reverse();
          break;
        case 'HSM':
          this.links.array = this.layout_HSM().toString().split(',').reverse();
          break;
        case 'HNY':
        case 'HYC':
          this.links.array = this.layout_HNY_HYC().toString().split(',').reverse();
          break;
        case 'HMC':
          this.links.array = this.layout_HMC().toString().split(',').reverse();
          break;
      }

      this.links.string = this.links.array.toString().replace(/,/g, '\n');
    }
  }
})
