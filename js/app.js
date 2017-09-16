const app = new Vue({
  el: '#app',
  mixins: [mix_prodkinds, mix_layouts],
  data: {
    sku: '',
    colorway: '',
    greetings: [],
    layouts: [],
    formats: [],
    prepend_parameter: false,
    links: {
      string: '',
      array: []
    },
    filter: {
      colorway: '',
      layout: '',
      format: '',
      greeting: '',
      images: [],
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
    },
    colorways() {
      var colorways = [];

      switch (this.colorway) {
        case 'H':
          colorways.push('H');
        case 'G':
          colorways.push('G');
        case 'F':
          colorways.push('F');
        case 'E':
          colorways.push('E');
        case 'D':
          colorways.push('D');
        case 'C':
          colorways.push('C');
        case 'B':
          colorways.push('B');
        case 'A':
          colorways.push('A');
      }

      return colorways.reverse();
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
    clear_filter() {
      var links = [];

      for (var link of this.links.array) {
        links.push(link.link);
      }

      this.filter = {
        colorway: '',
        layout: '',
        format: '',
        greeting: '',
        images: links
      };
    },
    normalize_greeting(greeting) {
      switch (greeting) {
        case 'HOLIDAY': return 'Holiday';
        case 'CHRISTMAS': return 'Christmas';
        case 'NEWYEAR': return 'New Year';
        case 'RELIGIOUS': return 'Religious';
      }
    },
    filter_images() {
      var filter = this.links.array;
      var temp = [];

      if (this.filter.colorway != '') {
        for (var z of filter.filter((img) => {return this.filter.colorway == img.colorway})) {
          temp.push(z);
        }
        filter = temp;
        temp = [];
      }

      if (this.filter.layout != '') {
        for (var y of filter.filter((img) => {return this.filter.layout == img.layout})) {
          temp.push(y);
        }
        filter = temp;
        temp = [];
      }

      if (this.filter.format != '') {
        for (var x of filter.filter((img) => {return this.filter.format == img.format})) {
          temp.push(x);
        }
        filter = temp;
        temp = [];
      }

      if (this.filter.greeting != '' && this.greetings.length > 1) {
        for (var w of filter.filter((img) => {return this.filter.greeting == img.greeting})) {
          temp.push(w);
        }
        filter = temp;
        temp = [];
      }

      for (var f of filter) {
        temp.push(f.link)
      }

      this.filter.images = temp;
    },
    generate_links() {
      var links = [];

      this.clear_filter();

      switch (this.prodkind) {
        case 'AIO':
          this.links.array = this.layout_AIO().reverse();
          break;
        case 'FPC':
          this.links.array = this.layout_FPC().reverse();
          break;
        case 'HFM':
          this.links.array = this.layout_HFM().reverse();
          break;
        case 'HFS':
          this.links.array = this.layout_HFS().reverse();
          break;
        case 'HSM':
          this.links.array = this.layout_HSM().reverse();
          break;
        case 'HNY':
        case 'HYC':
          this.links.array = this.layout_HNY_HYC().reverse();
          break;
        case 'HMC':
          this.links.array = this.layout_HMC().reverse();
          break;
        default: return;
      }

      for (var link of this.links.array) {
        links.push(link.link);
      }

      this.links.string = links.toString().replace(/,/g, '\n');
      this.filter.images = links;
    }
  }
})
