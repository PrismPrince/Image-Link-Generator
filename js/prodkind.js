var mix_prodkinds = {
  methods: {
    layout_AIO() {
      var link = [];

      link.push(this.layout_001(true, true));
      link.push(this.layout_002C());
      link.push(this.layout_006());
      link.push(this.layout_007());
      link.push(this.layout_007B());
      link.push(this.layout_008A());

      return link;
    },
    layout_HFS() {
      var link = [];

      link.push(this.layout_001(true));
      link.push(this.layout_002C());
      link.push(this.layout_006());
      link.push(this.layout_007());
      link.push(this.layout_007B());
      link.push(this.layout_008A());

      return link;
    }
  }
}
