var mix_layouts = {
  methods: {
    layout_001(animation_PD = false, animation_PZ = false) {
      var link = [];

      switch (this.colorways) {
        case 'H':
          if (animation_PD) link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001_H_PD.gif');
          if (animation_PZ) link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001_H_PZ.gif');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001_H_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001_H_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001_H_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001_H_TH.jpg');
        case 'G':
          if (animation_PD) link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001_G_PD.gif');
          if (animation_PZ) link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001_G_PZ.gif');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001_G_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001_G_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001_G_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001_G_TH.jpg');
        case 'F':
          if (animation_PD) link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001_F_PD.gif');
          if (animation_PZ) link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001_F_PZ.gif');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001_F_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001_F_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001_F_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001_F_TH.jpg');
        case 'E':
          if (animation_PD) link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001_E_PD.gif');
          if (animation_PZ) link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001_E_PZ.gif');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001_E_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001_E_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001_E_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001_E_TH.jpg');
        case 'D':
          if (animation_PD) link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001_D_PD.gif');
          if (animation_PZ) link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001_D_PZ.gif');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001_D_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001_D_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001_D_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001_D_TH.jpg');
        case 'C':
          if (animation_PD) link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001_C_PD.gif');
          if (animation_PZ) link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001_C_PZ.gif');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001_C_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001_C_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001_C_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001_C_TH.jpg');
        case 'B':
          if (animation_PD) link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001_B_PD.gif');
          if (animation_PZ) link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001_B_PZ.gif');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001_B_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001_B_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001_B_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001_B_TH.jpg');
        case 'A':
          if (animation_PD) link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001_A_PD.gif');
          if (animation_PZ) link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001_A_PZ.gif');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001_A_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001_A_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001_A_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001_A_TH.jpg');
      }
      return link;
    },
    layout_001A() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_001ACF() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_001ACHRISTMAS() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ACHRISTMAS_H_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ACHRISTMAS_H_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ACHRISTMAS_H_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ACHRISTMAS_H_TH.jpg');
        case 'G':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ACHRISTMAS_G_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ACHRISTMAS_G_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ACHRISTMAS_G_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ACHRISTMAS_G_TH.jpg');
        case 'F':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ACHRISTMAS_F_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ACHRISTMAS_F_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ACHRISTMAS_F_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ACHRISTMAS_F_TH.jpg');
        case 'E':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ACHRISTMAS_E_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ACHRISTMAS_E_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ACHRISTMAS_E_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ACHRISTMAS_E_TH.jpg');
        case 'D':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ACHRISTMAS_D_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ACHRISTMAS_D_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ACHRISTMAS_D_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ACHRISTMAS_D_TH.jpg');
        case 'C':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ACHRISTMAS_C_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ACHRISTMAS_C_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ACHRISTMAS_C_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ACHRISTMAS_C_TH.jpg');
        case 'B':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ACHRISTMAS_B_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ACHRISTMAS_B_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ACHRISTMAS_B_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ACHRISTMAS_B_TH.jpg');
        case 'A':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ACHRISTMAS_A_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ACHRISTMAS_A_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ACHRISTMAS_A_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ACHRISTMAS_A_TH.jpg');
      }
      return link;
    },
    layout_001AHOLIDAY() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001AHOLIDAY_H_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001AHOLIDAY_H_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001AHOLIDAY_H_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001AHOLIDAY_H_TH.jpg');
        case 'G':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001AHOLIDAY_G_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001AHOLIDAY_G_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001AHOLIDAY_G_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001AHOLIDAY_G_TH.jpg');
        case 'F':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001AHOLIDAY_F_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001AHOLIDAY_F_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001AHOLIDAY_F_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001AHOLIDAY_F_TH.jpg');
        case 'E':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001AHOLIDAY_E_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001AHOLIDAY_E_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001AHOLIDAY_E_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001AHOLIDAY_E_TH.jpg');
        case 'D':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001AHOLIDAY_D_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001AHOLIDAY_D_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001AHOLIDAY_D_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001AHOLIDAY_D_TH.jpg');
        case 'C':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001AHOLIDAY_C_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001AHOLIDAY_C_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001AHOLIDAY_C_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001AHOLIDAY_C_TH.jpg');
        case 'B':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001AHOLIDAY_B_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001AHOLIDAY_B_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001AHOLIDAY_B_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001AHOLIDAY_B_TH.jpg');
        case 'A':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001AHOLIDAY_A_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001AHOLIDAY_A_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001AHOLIDAY_A_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001AHOLIDAY_A_TH.jpg');
      }
      return link;
    },
    layout_001ANEWYEAR() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ANEWYEAR_H_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ANEWYEAR_H_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ANEWYEAR_H_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ANEWYEAR_H_TH.jpg');
        case 'G':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ANEWYEAR_G_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ANEWYEAR_G_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ANEWYEAR_G_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ANEWYEAR_G_TH.jpg');
        case 'F':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ANEWYEAR_F_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ANEWYEAR_F_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ANEWYEAR_F_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ANEWYEAR_F_TH.jpg');
        case 'E':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ANEWYEAR_E_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ANEWYEAR_E_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ANEWYEAR_E_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ANEWYEAR_E_TH.jpg');
        case 'D':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ANEWYEAR_D_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ANEWYEAR_D_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ANEWYEAR_D_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ANEWYEAR_D_TH.jpg');
        case 'C':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ANEWYEAR_C_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ANEWYEAR_C_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ANEWYEAR_C_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ANEWYEAR_C_TH.jpg');
        case 'B':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ANEWYEAR_B_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ANEWYEAR_B_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ANEWYEAR_B_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ANEWYEAR_B_TH.jpg');
        case 'A':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ANEWYEAR_A_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ANEWYEAR_A_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ANEWYEAR_A_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ANEWYEAR_A_TH.jpg');
      }
      return link;
    },
    layout_001ARELIGIOUS() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ARELIGIOUS_H_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ARELIGIOUS_H_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ARELIGIOUS_H_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ARELIGIOUS_H_TH.jpg');
        case 'G':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ARELIGIOUS_G_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ARELIGIOUS_G_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ARELIGIOUS_G_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ARELIGIOUS_G_TH.jpg');
        case 'F':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ARELIGIOUS_F_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ARELIGIOUS_F_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ARELIGIOUS_F_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ARELIGIOUS_F_TH.jpg');
        case 'E':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ARELIGIOUS_E_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ARELIGIOUS_E_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ARELIGIOUS_E_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ARELIGIOUS_E_TH.jpg');
        case 'D':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ARELIGIOUS_D_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ARELIGIOUS_D_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ARELIGIOUS_D_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ARELIGIOUS_D_TH.jpg');
        case 'C':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ARELIGIOUS_C_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ARELIGIOUS_C_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ARELIGIOUS_C_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ARELIGIOUS_C_TH.jpg');
        case 'B':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ARELIGIOUS_B_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ARELIGIOUS_B_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ARELIGIOUS_B_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ARELIGIOUS_B_TH.jpg');
        case 'A':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ARELIGIOUS_A_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ARELIGIOUS_A_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ARELIGIOUS_A_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ARELIGIOUS_A_TH.jpg');
      }
      return link;
    },
    layout_001B() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_001BC() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_001BCCF() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_001BCF() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_001BCHRISTMAS() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001BCHRISTMAS_H_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001BCHRISTMAS_H_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001BCHRISTMAS_H_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001BCHRISTMAS_H_TH.jpg');
        case 'G':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001BCHRISTMAS_G_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001BCHRISTMAS_G_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001BCHRISTMAS_G_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001BCHRISTMAS_G_TH.jpg');
        case 'F':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001BCHRISTMAS_F_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001BCHRISTMAS_F_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001BCHRISTMAS_F_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001BCHRISTMAS_F_TH.jpg');
        case 'E':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001BCHRISTMAS_E_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001BCHRISTMAS_E_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001BCHRISTMAS_E_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001BCHRISTMAS_E_TH.jpg');
        case 'D':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001BCHRISTMAS_D_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001BCHRISTMAS_D_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001BCHRISTMAS_D_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001BCHRISTMAS_D_TH.jpg');
        case 'C':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001BCHRISTMAS_C_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001BCHRISTMAS_C_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001BCHRISTMAS_C_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001BCHRISTMAS_C_TH.jpg');
        case 'B':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001BCHRISTMAS_B_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001BCHRISTMAS_B_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001BCHRISTMAS_B_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001BCHRISTMAS_B_TH.jpg');
        case 'A':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001BCHRISTMAS_A_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001BCHRISTMAS_A_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001BCHRISTMAS_A_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001BCHRISTMAS_A_TH.jpg');
      }
      return link;
    },
    layout_001BHOLIDAY() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001BHOLIDAY_H_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001BHOLIDAY_H_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001BHOLIDAY_H_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001BHOLIDAY_H_TH.jpg');
        case 'G':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001BHOLIDAY_G_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001BHOLIDAY_G_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001BHOLIDAY_G_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001BHOLIDAY_G_TH.jpg');
        case 'F':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001BHOLIDAY_F_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001BHOLIDAY_F_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001BHOLIDAY_F_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001BHOLIDAY_F_TH.jpg');
        case 'E':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001BHOLIDAY_E_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001BHOLIDAY_E_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001BHOLIDAY_E_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001BHOLIDAY_E_TH.jpg');
        case 'D':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001BHOLIDAY_D_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001BHOLIDAY_D_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001BHOLIDAY_D_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001BHOLIDAY_D_TH.jpg');
        case 'C':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001BHOLIDAY_C_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001BHOLIDAY_C_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001BHOLIDAY_C_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001BHOLIDAY_C_TH.jpg');
        case 'B':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001BHOLIDAY_B_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001BHOLIDAY_B_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001BHOLIDAY_B_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001BHOLIDAY_B_TH.jpg');
        case 'A':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001BHOLIDAY_A_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001BHOLIDAY_A_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001BHOLIDAY_A_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001BHOLIDAY_A_TH.jpg');
      }
      return link;
    },
    layout_001BNEWYEAR() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001BNEWYEAR_H_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001BNEWYEAR_H_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001BNEWYEAR_H_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001BNEWYEAR_H_TH.jpg');
        case 'G':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001BNEWYEAR_G_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001BNEWYEAR_G_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001BNEWYEAR_G_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001BNEWYEAR_G_TH.jpg');
        case 'F':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001BNEWYEAR_F_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001BNEWYEAR_F_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001BNEWYEAR_F_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001BNEWYEAR_F_TH.jpg');
        case 'E':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001BNEWYEAR_E_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001BNEWYEAR_E_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001BNEWYEAR_E_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001BNEWYEAR_E_TH.jpg');
        case 'D':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001BNEWYEAR_D_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001BNEWYEAR_D_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001BNEWYEAR_D_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001BNEWYEAR_D_TH.jpg');
        case 'C':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001BNEWYEAR_C_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001BNEWYEAR_C_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001BNEWYEAR_C_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001BNEWYEAR_C_TH.jpg');
        case 'B':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001BNEWYEAR_B_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001BNEWYEAR_B_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001BNEWYEAR_B_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001BNEWYEAR_B_TH.jpg');
        case 'A':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001BNEWYEAR_A_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001BNEWYEAR_A_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001BNEWYEAR_A_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001BNEWYEAR_A_TH.jpg');
      }
      return link;
    },
    layout_001BRELIGIOUS() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001BRELIGIOUS_H_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001BRELIGIOUS_H_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001BRELIGIOUS_H_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001BRELIGIOUS_H_TH.jpg');
        case 'G':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001BRELIGIOUS_G_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001BRELIGIOUS_G_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001BRELIGIOUS_G_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001BRELIGIOUS_G_TH.jpg');
        case 'F':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001BRELIGIOUS_F_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001BRELIGIOUS_F_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001BRELIGIOUS_F_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001BRELIGIOUS_F_TH.jpg');
        case 'E':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001BRELIGIOUS_E_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001BRELIGIOUS_E_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001BRELIGIOUS_E_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001BRELIGIOUS_E_TH.jpg');
        case 'D':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001BRELIGIOUS_D_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001BRELIGIOUS_D_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001BRELIGIOUS_D_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001BRELIGIOUS_D_TH.jpg');
        case 'C':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001BRELIGIOUS_C_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001BRELIGIOUS_C_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001BRELIGIOUS_C_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001BRELIGIOUS_C_TH.jpg');
        case 'B':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001BRELIGIOUS_B_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001BRELIGIOUS_B_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001BRELIGIOUS_B_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001BRELIGIOUS_B_TH.jpg');
        case 'A':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001BRELIGIOUS_A_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001BRELIGIOUS_A_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001BRELIGIOUS_A_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001BRELIGIOUS_A_TH.jpg');
      }
      return link;
    },
    layout_001C() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_001CCF() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_001CCHRISTMAS() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CCHRISTMAS_H_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CCHRISTMAS_H_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CCHRISTMAS_H_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CCHRISTMAS_H_TH.jpg');
        case 'G':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CCHRISTMAS_G_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CCHRISTMAS_G_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CCHRISTMAS_G_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CCHRISTMAS_G_TH.jpg');
        case 'F':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CCHRISTMAS_F_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CCHRISTMAS_F_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CCHRISTMAS_F_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CCHRISTMAS_F_TH.jpg');
        case 'E':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CCHRISTMAS_E_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CCHRISTMAS_E_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CCHRISTMAS_E_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CCHRISTMAS_E_TH.jpg');
        case 'D':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CCHRISTMAS_D_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CCHRISTMAS_D_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CCHRISTMAS_D_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CCHRISTMAS_D_TH.jpg');
        case 'C':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CCHRISTMAS_C_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CCHRISTMAS_C_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CCHRISTMAS_C_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CCHRISTMAS_C_TH.jpg');
        case 'B':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CCHRISTMAS_B_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CCHRISTMAS_B_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CCHRISTMAS_B_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CCHRISTMAS_B_TH.jpg');
        case 'A':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CCHRISTMAS_A_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CCHRISTMAS_A_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CCHRISTMAS_A_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CCHRISTMAS_A_TH.jpg');
      }
      return link;
    },
    layout_001CF() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_001CHOLIDAY() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CHOLIDAY_H_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CHOLIDAY_H_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CHOLIDAY_H_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CHOLIDAY_H_TH.jpg');
        case 'G':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CHOLIDAY_G_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CHOLIDAY_G_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CHOLIDAY_G_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CHOLIDAY_G_TH.jpg');
        case 'F':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CHOLIDAY_F_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CHOLIDAY_F_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CHOLIDAY_F_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CHOLIDAY_F_TH.jpg');
        case 'E':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CHOLIDAY_E_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CHOLIDAY_E_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CHOLIDAY_E_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CHOLIDAY_E_TH.jpg');
        case 'D':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CHOLIDAY_D_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CHOLIDAY_D_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CHOLIDAY_D_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CHOLIDAY_D_TH.jpg');
        case 'C':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CHOLIDAY_C_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CHOLIDAY_C_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CHOLIDAY_C_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CHOLIDAY_C_TH.jpg');
        case 'B':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CHOLIDAY_B_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CHOLIDAY_B_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CHOLIDAY_B_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CHOLIDAY_B_TH.jpg');
        case 'A':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CHOLIDAY_A_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CHOLIDAY_A_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CHOLIDAY_A_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CHOLIDAY_A_TH.jpg');
      }
      return link;
    },
    layout_001CHRISTMAS(animation_PD = false) {
      var link = [];

      switch (this.colorways) {
        case 'H':
          if (animation_PD) link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CHRISTMAS_H_PD.gif');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CHRISTMAS_H_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CHRISTMAS_H_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CHRISTMAS_H_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CHRISTMAS_H_TH.jpg');
        case 'G':
          if (animation_PD) link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CHRISTMAS_G_PD.gif');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CHRISTMAS_G_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CHRISTMAS_G_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CHRISTMAS_G_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CHRISTMAS_G_TH.jpg');
        case 'F':
          if (animation_PD) link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CHRISTMAS_F_PD.gif');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CHRISTMAS_F_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CHRISTMAS_F_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CHRISTMAS_F_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CHRISTMAS_F_TH.jpg');
        case 'E':
          if (animation_PD) link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CHRISTMAS_E_PD.gif');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CHRISTMAS_E_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CHRISTMAS_E_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CHRISTMAS_E_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CHRISTMAS_E_TH.jpg');
        case 'D':
          if (animation_PD) link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CHRISTMAS_D_PD.gif');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CHRISTMAS_D_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CHRISTMAS_D_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CHRISTMAS_D_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CHRISTMAS_D_TH.jpg');
        case 'C':
          if (animation_PD) link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CHRISTMAS_C_PD.gif');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CHRISTMAS_C_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CHRISTMAS_C_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CHRISTMAS_C_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CHRISTMAS_C_TH.jpg');
        case 'B':
          if (animation_PD) link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CHRISTMAS_B_PD.gif');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CHRISTMAS_B_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CHRISTMAS_B_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CHRISTMAS_B_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CHRISTMAS_B_TH.jpg');
        case 'A':
          if (animation_PD) link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CHRISTMAS_A_PD.gif');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CHRISTMAS_A_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CHRISTMAS_A_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CHRISTMAS_A_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CHRISTMAS_A_TH.jpg');
      }
      return link;
    },
    layout_001CNEWYEAR() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CNEWYEAR_H_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CNEWYEAR_H_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CNEWYEAR_H_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CNEWYEAR_H_TH.jpg');
        case 'G':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CNEWYEAR_G_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CNEWYEAR_G_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CNEWYEAR_G_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CNEWYEAR_G_TH.jpg');
        case 'F':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CNEWYEAR_F_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CNEWYEAR_F_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CNEWYEAR_F_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CNEWYEAR_F_TH.jpg');
        case 'E':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CNEWYEAR_E_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CNEWYEAR_E_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CNEWYEAR_E_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CNEWYEAR_E_TH.jpg');
        case 'D':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CNEWYEAR_D_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CNEWYEAR_D_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CNEWYEAR_D_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CNEWYEAR_D_TH.jpg');
        case 'C':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CNEWYEAR_C_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CNEWYEAR_C_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CNEWYEAR_C_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CNEWYEAR_C_TH.jpg');
        case 'B':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CNEWYEAR_B_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CNEWYEAR_B_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CNEWYEAR_B_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CNEWYEAR_B_TH.jpg');
        case 'A':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CNEWYEAR_A_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CNEWYEAR_A_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CNEWYEAR_A_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CNEWYEAR_A_TH.jpg');
      }
      return link;
    },
    layout_001CRELIGIOUS() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CRELIGIOUS_H_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CRELIGIOUS_H_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CRELIGIOUS_H_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CRELIGIOUS_H_TH.jpg');
        case 'G':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CRELIGIOUS_G_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CRELIGIOUS_G_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CRELIGIOUS_G_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CRELIGIOUS_G_TH.jpg');
        case 'F':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CRELIGIOUS_F_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CRELIGIOUS_F_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CRELIGIOUS_F_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CRELIGIOUS_F_TH.jpg');
        case 'E':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CRELIGIOUS_E_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CRELIGIOUS_E_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CRELIGIOUS_E_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CRELIGIOUS_E_TH.jpg');
        case 'D':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CRELIGIOUS_D_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CRELIGIOUS_D_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CRELIGIOUS_D_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CRELIGIOUS_D_TH.jpg');
        case 'C':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CRELIGIOUS_C_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CRELIGIOUS_C_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CRELIGIOUS_C_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CRELIGIOUS_C_TH.jpg');
        case 'B':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CRELIGIOUS_B_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CRELIGIOUS_B_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CRELIGIOUS_B_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CRELIGIOUS_B_TH.jpg');
        case 'A':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CRELIGIOUS_A_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CRELIGIOUS_A_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CRELIGIOUS_A_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001CRELIGIOUS_A_TH.jpg');
      }
      return link;
    },
    layout_001D() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_001DCF() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_001DCHRISTMAS() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001DCHRISTMAS_H_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001DCHRISTMAS_H_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001DCHRISTMAS_H_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001DCHRISTMAS_H_TH.jpg');
        case 'G':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001DCHRISTMAS_G_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001DCHRISTMAS_G_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001DCHRISTMAS_G_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001DCHRISTMAS_G_TH.jpg');
        case 'F':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001DCHRISTMAS_F_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001DCHRISTMAS_F_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001DCHRISTMAS_F_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001DCHRISTMAS_F_TH.jpg');
        case 'E':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001DCHRISTMAS_E_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001DCHRISTMAS_E_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001DCHRISTMAS_E_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001DCHRISTMAS_E_TH.jpg');
        case 'D':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001DCHRISTMAS_D_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001DCHRISTMAS_D_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001DCHRISTMAS_D_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001DCHRISTMAS_D_TH.jpg');
        case 'C':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001DCHRISTMAS_C_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001DCHRISTMAS_C_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001DCHRISTMAS_C_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001DCHRISTMAS_C_TH.jpg');
        case 'B':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001DCHRISTMAS_B_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001DCHRISTMAS_B_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001DCHRISTMAS_B_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001DCHRISTMAS_B_TH.jpg');
        case 'A':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001DCHRISTMAS_A_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001DCHRISTMAS_A_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001DCHRISTMAS_A_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001DCHRISTMAS_A_TH.jpg');
      }
      return link;
    },
    layout_001DHOLIDAY() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001DHOLIDAY_H_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001DHOLIDAY_H_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001DHOLIDAY_H_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001DHOLIDAY_H_TH.jpg');
        case 'G':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001DHOLIDAY_G_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001DHOLIDAY_G_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001DHOLIDAY_G_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001DHOLIDAY_G_TH.jpg');
        case 'F':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001DHOLIDAY_F_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001DHOLIDAY_F_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001DHOLIDAY_F_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001DHOLIDAY_F_TH.jpg');
        case 'E':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001DHOLIDAY_E_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001DHOLIDAY_E_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001DHOLIDAY_E_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001DHOLIDAY_E_TH.jpg');
        case 'D':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001DHOLIDAY_D_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001DHOLIDAY_D_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001DHOLIDAY_D_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001DHOLIDAY_D_TH.jpg');
        case 'C':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001DHOLIDAY_C_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001DHOLIDAY_C_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001DHOLIDAY_C_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001DHOLIDAY_C_TH.jpg');
        case 'B':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001DHOLIDAY_B_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001DHOLIDAY_B_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001DHOLIDAY_B_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001DHOLIDAY_B_TH.jpg');
        case 'A':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001DHOLIDAY_A_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001DHOLIDAY_A_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001DHOLIDAY_A_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001DHOLIDAY_A_TH.jpg');
      }
      return link;
    },
    layout_001DNEWYEAR() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001DNEWYEAR_H_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001DNEWYEAR_H_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001DNEWYEAR_H_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001DNEWYEAR_H_TH.jpg');
        case 'G':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001DNEWYEAR_G_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001DNEWYEAR_G_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001DNEWYEAR_G_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001DNEWYEAR_G_TH.jpg');
        case 'F':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001DNEWYEAR_F_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001DNEWYEAR_F_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001DNEWYEAR_F_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001DNEWYEAR_F_TH.jpg');
        case 'E':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001DNEWYEAR_E_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001DNEWYEAR_E_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001DNEWYEAR_E_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001DNEWYEAR_E_TH.jpg');
        case 'D':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001DNEWYEAR_D_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001DNEWYEAR_D_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001DNEWYEAR_D_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001DNEWYEAR_D_TH.jpg');
        case 'C':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001DNEWYEAR_C_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001DNEWYEAR_C_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001DNEWYEAR_C_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001DNEWYEAR_C_TH.jpg');
        case 'B':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001DNEWYEAR_B_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001DNEWYEAR_B_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001DNEWYEAR_B_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001DNEWYEAR_B_TH.jpg');
        case 'A':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001DNEWYEAR_A_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001DNEWYEAR_A_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001DNEWYEAR_A_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001DNEWYEAR_A_TH.jpg');
      }
      return link;
    },
    layout_001DRELIGIOUS() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001DRELIGIOUS_H_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001DRELIGIOUS_H_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001DRELIGIOUS_H_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001DRELIGIOUS_H_TH.jpg');
        case 'G':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001DRELIGIOUS_G_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001DRELIGIOUS_G_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001DRELIGIOUS_G_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001DRELIGIOUS_G_TH.jpg');
        case 'F':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001DRELIGIOUS_F_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001DRELIGIOUS_F_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001DRELIGIOUS_F_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001DRELIGIOUS_F_TH.jpg');
        case 'E':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001DRELIGIOUS_E_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001DRELIGIOUS_E_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001DRELIGIOUS_E_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001DRELIGIOUS_E_TH.jpg');
        case 'D':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001DRELIGIOUS_D_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001DRELIGIOUS_D_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001DRELIGIOUS_D_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001DRELIGIOUS_D_TH.jpg');
        case 'C':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001DRELIGIOUS_C_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001DRELIGIOUS_C_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001DRELIGIOUS_C_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001DRELIGIOUS_C_TH.jpg');
        case 'B':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001DRELIGIOUS_B_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001DRELIGIOUS_B_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001DRELIGIOUS_B_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001DRELIGIOUS_B_TH.jpg');
        case 'A':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001DRELIGIOUS_A_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001DRELIGIOUS_A_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001DRELIGIOUS_A_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001DRELIGIOUS_A_TH.jpg');
      }
      return link;
    },
    layout_001E() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_001F() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_001FCHRISTMAS() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_001FHOLIDAY() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_001FNEWYEAR() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_001FRELIGIOUS() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_001HOLIDAY(animation_PD = false) {
      var link = [];

      switch (this.colorways) {
        case 'H':
          if (animation_PD) link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001_H_PD.gif');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001_H_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001_H_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001_H_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001_H_TH.jpg');
        case 'G':
          if (animation_PD) link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001_G_PD.gif');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001_G_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001_G_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001_G_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001_G_TH.jpg');
        case 'F':
          if (animation_PD) link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001_F_PD.gif');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001_F_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001_F_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001_F_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001_F_TH.jpg');
        case 'E':
          if (animation_PD) link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001_E_PD.gif');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001_E_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001_E_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001_E_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001_E_TH.jpg');
        case 'D':
          if (animation_PD) link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001_D_PD.gif');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001_D_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001_D_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001_D_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001_D_TH.jpg');
        case 'C':
          if (animation_PD) link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001_C_PD.gif');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001_C_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001_C_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001_C_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001_C_TH.jpg');
        case 'B':
          if (animation_PD) link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001_B_PD.gif');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001_B_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001_B_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001_B_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001_B_TH.jpg');
        case 'A':
          if (animation_PD) link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001_A_PD.gif');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001_A_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001_A_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001_A_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001_A_TH.jpg');
      }
      return link;
    },
    layout_001I() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_001ICF() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_001ICHRISTMAS() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ICHRISTMAS_H_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ICHRISTMAS_H_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ICHRISTMAS_H_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ICHRISTMAS_H_TH.jpg');
        case 'G':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ICHRISTMAS_G_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ICHRISTMAS_G_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ICHRISTMAS_G_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ICHRISTMAS_G_TH.jpg');
        case 'F':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ICHRISTMAS_F_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ICHRISTMAS_F_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ICHRISTMAS_F_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ICHRISTMAS_F_TH.jpg');
        case 'E':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ICHRISTMAS_E_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ICHRISTMAS_E_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ICHRISTMAS_E_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ICHRISTMAS_E_TH.jpg');
        case 'D':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ICHRISTMAS_D_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ICHRISTMAS_D_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ICHRISTMAS_D_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ICHRISTMAS_D_TH.jpg');
        case 'C':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ICHRISTMAS_C_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ICHRISTMAS_C_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ICHRISTMAS_C_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ICHRISTMAS_C_TH.jpg');
        case 'B':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ICHRISTMAS_B_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ICHRISTMAS_B_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ICHRISTMAS_B_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ICHRISTMAS_B_TH.jpg');
        case 'A':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ICHRISTMAS_A_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ICHRISTMAS_A_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ICHRISTMAS_A_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ICHRISTMAS_A_TH.jpg');
      }
      return link;
    },
    layout_001IHOLIDAY() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001IHOLIDAY_H_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001IHOLIDAY_H_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001IHOLIDAY_H_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001IHOLIDAY_H_TH.jpg');
        case 'G':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001IHOLIDAY_G_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001IHOLIDAY_G_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001IHOLIDAY_G_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001IHOLIDAY_G_TH.jpg');
        case 'F':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001IHOLIDAY_F_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001IHOLIDAY_F_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001IHOLIDAY_F_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001IHOLIDAY_F_TH.jpg');
        case 'E':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001IHOLIDAY_E_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001IHOLIDAY_E_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001IHOLIDAY_E_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001IHOLIDAY_E_TH.jpg');
        case 'D':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001IHOLIDAY_D_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001IHOLIDAY_D_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001IHOLIDAY_D_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001IHOLIDAY_D_TH.jpg');
        case 'C':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001IHOLIDAY_C_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001IHOLIDAY_C_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001IHOLIDAY_C_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001IHOLIDAY_C_TH.jpg');
        case 'B':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001IHOLIDAY_B_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001IHOLIDAY_B_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001IHOLIDAY_B_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001IHOLIDAY_B_TH.jpg');
        case 'A':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001IHOLIDAY_A_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001IHOLIDAY_A_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001IHOLIDAY_A_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001IHOLIDAY_A_TH.jpg');
      }
      return link;
    },
    layout_001INEWYEAR() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001INEWYEAR_H_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001INEWYEAR_H_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001INEWYEAR_H_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001INEWYEAR_H_TH.jpg');
        case 'G':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001INEWYEAR_G_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001INEWYEAR_G_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001INEWYEAR_G_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001INEWYEAR_G_TH.jpg');
        case 'F':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001INEWYEAR_F_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001INEWYEAR_F_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001INEWYEAR_F_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001INEWYEAR_F_TH.jpg');
        case 'E':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001INEWYEAR_E_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001INEWYEAR_E_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001INEWYEAR_E_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001INEWYEAR_E_TH.jpg');
        case 'D':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001INEWYEAR_D_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001INEWYEAR_D_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001INEWYEAR_D_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001INEWYEAR_D_TH.jpg');
        case 'C':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001INEWYEAR_C_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001INEWYEAR_C_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001INEWYEAR_C_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001INEWYEAR_C_TH.jpg');
        case 'B':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001INEWYEAR_B_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001INEWYEAR_B_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001INEWYEAR_B_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001INEWYEAR_B_TH.jpg');
        case 'A':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001INEWYEAR_A_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001INEWYEAR_A_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001INEWYEAR_A_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001INEWYEAR_A_TH.jpg');
      }
      return link;
    },
    layout_001IRELIGIOUS() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001IRELIGIOUS_H_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001IRELIGIOUS_H_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001IRELIGIOUS_H_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001IRELIGIOUS_H_TH.jpg');
        case 'G':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001IRELIGIOUS_G_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001IRELIGIOUS_G_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001IRELIGIOUS_G_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001IRELIGIOUS_G_TH.jpg');
        case 'F':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001IRELIGIOUS_F_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001IRELIGIOUS_F_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001IRELIGIOUS_F_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001IRELIGIOUS_F_TH.jpg');
        case 'E':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001IRELIGIOUS_E_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001IRELIGIOUS_E_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001IRELIGIOUS_E_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001IRELIGIOUS_E_TH.jpg');
        case 'D':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001IRELIGIOUS_D_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001IRELIGIOUS_D_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001IRELIGIOUS_D_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001IRELIGIOUS_D_TH.jpg');
        case 'C':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001IRELIGIOUS_C_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001IRELIGIOUS_C_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001IRELIGIOUS_C_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001IRELIGIOUS_C_TH.jpg');
        case 'B':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001IRELIGIOUS_B_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001IRELIGIOUS_B_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001IRELIGIOUS_B_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001IRELIGIOUS_B_TH.jpg');
        case 'A':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001IRELIGIOUS_A_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001IRELIGIOUS_A_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001IRELIGIOUS_A_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001IRELIGIOUS_A_TH.jpg');
      }
      return link;
    },
    layout_001J() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_001JCF() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_001JCHRISTMAS() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001JCHRISTMAS_H_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001JCHRISTMAS_H_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001JCHRISTMAS_H_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001JCHRISTMAS_H_TH.jpg');
        case 'G':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001JCHRISTMAS_G_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001JCHRISTMAS_G_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001JCHRISTMAS_G_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001JCHRISTMAS_G_TH.jpg');
        case 'F':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001JCHRISTMAS_F_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001JCHRISTMAS_F_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001JCHRISTMAS_F_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001JCHRISTMAS_F_TH.jpg');
        case 'E':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001JCHRISTMAS_E_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001JCHRISTMAS_E_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001JCHRISTMAS_E_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001JCHRISTMAS_E_TH.jpg');
        case 'D':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001JCHRISTMAS_D_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001JCHRISTMAS_D_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001JCHRISTMAS_D_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001JCHRISTMAS_D_TH.jpg');
        case 'C':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001JCHRISTMAS_C_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001JCHRISTMAS_C_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001JCHRISTMAS_C_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001JCHRISTMAS_C_TH.jpg');
        case 'B':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001JCHRISTMAS_B_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001JCHRISTMAS_B_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001JCHRISTMAS_B_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001JCHRISTMAS_B_TH.jpg');
        case 'A':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001JCHRISTMAS_A_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001JCHRISTMAS_A_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001JCHRISTMAS_A_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001JCHRISTMAS_A_TH.jpg');
      }
      return link;
    },
    layout_001JHOLIDAY() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001JHOLIDAY_H_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001JHOLIDAY_H_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001JHOLIDAY_H_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001JHOLIDAY_H_TH.jpg');
        case 'G':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001JHOLIDAY_G_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001JHOLIDAY_G_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001JHOLIDAY_G_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001JHOLIDAY_G_TH.jpg');
        case 'F':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001JHOLIDAY_F_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001JHOLIDAY_F_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001JHOLIDAY_F_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001JHOLIDAY_F_TH.jpg');
        case 'E':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001JHOLIDAY_E_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001JHOLIDAY_E_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001JHOLIDAY_E_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001JHOLIDAY_E_TH.jpg');
        case 'D':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001JHOLIDAY_D_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001JHOLIDAY_D_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001JHOLIDAY_D_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001JHOLIDAY_D_TH.jpg');
        case 'C':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001JHOLIDAY_C_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001JHOLIDAY_C_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001JHOLIDAY_C_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001JHOLIDAY_C_TH.jpg');
        case 'B':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001JHOLIDAY_B_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001JHOLIDAY_B_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001JHOLIDAY_B_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001JHOLIDAY_B_TH.jpg');
        case 'A':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001JHOLIDAY_A_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001JHOLIDAY_A_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001JHOLIDAY_A_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001JHOLIDAY_A_TH.jpg');
      }
      return link;
    },
    layout_001JNEWYEAR() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001JNEWYEAR_H_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001JNEWYEAR_H_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001JNEWYEAR_H_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001JNEWYEAR_H_TH.jpg');
        case 'G':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001JNEWYEAR_G_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001JNEWYEAR_G_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001JNEWYEAR_G_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001JNEWYEAR_G_TH.jpg');
        case 'F':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001JNEWYEAR_F_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001JNEWYEAR_F_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001JNEWYEAR_F_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001JNEWYEAR_F_TH.jpg');
        case 'E':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001JNEWYEAR_E_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001JNEWYEAR_E_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001JNEWYEAR_E_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001JNEWYEAR_E_TH.jpg');
        case 'D':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001JNEWYEAR_D_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001JNEWYEAR_D_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001JNEWYEAR_D_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001JNEWYEAR_D_TH.jpg');
        case 'C':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001JNEWYEAR_C_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001JNEWYEAR_C_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001JNEWYEAR_C_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001JNEWYEAR_C_TH.jpg');
        case 'B':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001JNEWYEAR_B_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001JNEWYEAR_B_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001JNEWYEAR_B_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001JNEWYEAR_B_TH.jpg');
        case 'A':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001JNEWYEAR_A_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001JNEWYEAR_A_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001JNEWYEAR_A_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001JNEWYEAR_A_TH.jpg');
      }
      return link;
    },
    layout_001JRELIGIOUS() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001JRELIGIOUS_H_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001JRELIGIOUS_H_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001JRELIGIOUS_H_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001JRELIGIOUS_H_TH.jpg');
        case 'G':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001JRELIGIOUS_G_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001JRELIGIOUS_G_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001JRELIGIOUS_G_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001JRELIGIOUS_G_TH.jpg');
        case 'F':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001JRELIGIOUS_F_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001JRELIGIOUS_F_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001JRELIGIOUS_F_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001JRELIGIOUS_F_TH.jpg');
        case 'E':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001JRELIGIOUS_E_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001JRELIGIOUS_E_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001JRELIGIOUS_E_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001JRELIGIOUS_E_TH.jpg');
        case 'D':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001JRELIGIOUS_D_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001JRELIGIOUS_D_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001JRELIGIOUS_D_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001JRELIGIOUS_D_TH.jpg');
        case 'C':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001JRELIGIOUS_C_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001JRELIGIOUS_C_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001JRELIGIOUS_C_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001JRELIGIOUS_C_TH.jpg');
        case 'B':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001JRELIGIOUS_B_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001JRELIGIOUS_B_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001JRELIGIOUS_B_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001JRELIGIOUS_B_TH.jpg');
        case 'A':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001JRELIGIOUS_A_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001JRELIGIOUS_A_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001JRELIGIOUS_A_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001JRELIGIOUS_A_TH.jpg');
      }
      return link;
    },
    layout_001M() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_001MCF() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_001MCHRISTMAS() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001MCHRISTMAS_H_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001MCHRISTMAS_H_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001MCHRISTMAS_H_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001MCHRISTMAS_H_TH.jpg');
        case 'G':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001MCHRISTMAS_G_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001MCHRISTMAS_G_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001MCHRISTMAS_G_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001MCHRISTMAS_G_TH.jpg');
        case 'F':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001MCHRISTMAS_F_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001MCHRISTMAS_F_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001MCHRISTMAS_F_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001MCHRISTMAS_F_TH.jpg');
        case 'E':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001MCHRISTMAS_E_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001MCHRISTMAS_E_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001MCHRISTMAS_E_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001MCHRISTMAS_E_TH.jpg');
        case 'D':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001MCHRISTMAS_D_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001MCHRISTMAS_D_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001MCHRISTMAS_D_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001MCHRISTMAS_D_TH.jpg');
        case 'C':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001MCHRISTMAS_C_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001MCHRISTMAS_C_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001MCHRISTMAS_C_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001MCHRISTMAS_C_TH.jpg');
        case 'B':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001MCHRISTMAS_B_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001MCHRISTMAS_B_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001MCHRISTMAS_B_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001MCHRISTMAS_B_TH.jpg');
        case 'A':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001MCHRISTMAS_A_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001MCHRISTMAS_A_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001MCHRISTMAS_A_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001MCHRISTMAS_A_TH.jpg');
      }
      return link;
    },
    layout_001MHOLIDAY() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001MHOLIDAY_H_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001MHOLIDAY_H_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001MHOLIDAY_H_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001MHOLIDAY_H_TH.jpg');
        case 'G':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001MHOLIDAY_G_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001MHOLIDAY_G_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001MHOLIDAY_G_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001MHOLIDAY_G_TH.jpg');
        case 'F':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001MHOLIDAY_F_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001MHOLIDAY_F_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001MHOLIDAY_F_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001MHOLIDAY_F_TH.jpg');
        case 'E':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001MHOLIDAY_E_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001MHOLIDAY_E_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001MHOLIDAY_E_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001MHOLIDAY_E_TH.jpg');
        case 'D':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001MHOLIDAY_D_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001MHOLIDAY_D_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001MHOLIDAY_D_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001MHOLIDAY_D_TH.jpg');
        case 'C':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001MHOLIDAY_C_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001MHOLIDAY_C_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001MHOLIDAY_C_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001MHOLIDAY_C_TH.jpg');
        case 'B':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001MHOLIDAY_B_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001MHOLIDAY_B_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001MHOLIDAY_B_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001MHOLIDAY_B_TH.jpg');
        case 'A':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001MHOLIDAY_A_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001MHOLIDAY_A_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001MHOLIDAY_A_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001MHOLIDAY_A_TH.jpg');
      }
      return link;
    },
    layout_001MNEWYEAR() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001MNEWYEAR_H_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001MNEWYEAR_H_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001MNEWYEAR_H_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001MNEWYEAR_H_TH.jpg');
        case 'G':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001MNEWYEAR_G_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001MNEWYEAR_G_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001MNEWYEAR_G_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001MNEWYEAR_G_TH.jpg');
        case 'F':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001MNEWYEAR_F_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001MNEWYEAR_F_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001MNEWYEAR_F_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001MNEWYEAR_F_TH.jpg');
        case 'E':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001MNEWYEAR_E_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001MNEWYEAR_E_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001MNEWYEAR_E_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001MNEWYEAR_E_TH.jpg');
        case 'D':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001MNEWYEAR_D_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001MNEWYEAR_D_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001MNEWYEAR_D_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001MNEWYEAR_D_TH.jpg');
        case 'C':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001MNEWYEAR_C_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001MNEWYEAR_C_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001MNEWYEAR_C_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001MNEWYEAR_C_TH.jpg');
        case 'B':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001MNEWYEAR_B_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001MNEWYEAR_B_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001MNEWYEAR_B_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001MNEWYEAR_B_TH.jpg');
        case 'A':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001MNEWYEAR_A_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001MNEWYEAR_A_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001MNEWYEAR_A_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001MNEWYEAR_A_TH.jpg');
      }
      return link;
    },
    layout_001MRELIGIOUS() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001MRELIGIOUS_H_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001MRELIGIOUS_H_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001MRELIGIOUS_H_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001MRELIGIOUS_H_TH.jpg');
        case 'G':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001MRELIGIOUS_G_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001MRELIGIOUS_G_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001MRELIGIOUS_G_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001MRELIGIOUS_G_TH.jpg');
        case 'F':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001MRELIGIOUS_F_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001MRELIGIOUS_F_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001MRELIGIOUS_F_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001MRELIGIOUS_F_TH.jpg');
        case 'E':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001MRELIGIOUS_E_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001MRELIGIOUS_E_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001MRELIGIOUS_E_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001MRELIGIOUS_E_TH.jpg');
        case 'D':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001MRELIGIOUS_D_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001MRELIGIOUS_D_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001MRELIGIOUS_D_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001MRELIGIOUS_D_TH.jpg');
        case 'C':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001MRELIGIOUS_C_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001MRELIGIOUS_C_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001MRELIGIOUS_C_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001MRELIGIOUS_C_TH.jpg');
        case 'B':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001MRELIGIOUS_B_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001MRELIGIOUS_B_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001MRELIGIOUS_B_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001MRELIGIOUS_B_TH.jpg');
        case 'A':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001MRELIGIOUS_A_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001MRELIGIOUS_A_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001MRELIGIOUS_A_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001MRELIGIOUS_A_TH.jpg');
      }
      return link;
    },
    layout_001N() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_001NCF() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_001NCHRISTMAS() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NCHRISTMAS_H_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NCHRISTMAS_H_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NCHRISTMAS_H_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NCHRISTMAS_H_TH.jpg');
        case 'G':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NCHRISTMAS_G_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NCHRISTMAS_G_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NCHRISTMAS_G_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NCHRISTMAS_G_TH.jpg');
        case 'F':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NCHRISTMAS_F_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NCHRISTMAS_F_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NCHRISTMAS_F_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NCHRISTMAS_F_TH.jpg');
        case 'E':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NCHRISTMAS_E_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NCHRISTMAS_E_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NCHRISTMAS_E_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NCHRISTMAS_E_TH.jpg');
        case 'D':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NCHRISTMAS_D_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NCHRISTMAS_D_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NCHRISTMAS_D_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NCHRISTMAS_D_TH.jpg');
        case 'C':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NCHRISTMAS_C_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NCHRISTMAS_C_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NCHRISTMAS_C_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NCHRISTMAS_C_TH.jpg');
        case 'B':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NCHRISTMAS_B_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NCHRISTMAS_B_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NCHRISTMAS_B_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NCHRISTMAS_B_TH.jpg');
        case 'A':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NCHRISTMAS_A_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NCHRISTMAS_A_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NCHRISTMAS_A_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NCHRISTMAS_A_TH.jpg');
      }
      return link;
    },
    layout_001NEWYEAR(animation_PD = false) {
      var link = [];

      switch (this.colorways) {
        case 'H':
          if (animation_PD) link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NEWYEAR_H_PD.gif');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NEWYEAR_H_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NEWYEAR_H_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NEWYEAR_H_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NEWYEAR_H_TH.jpg');
        case 'G':
          if (animation_PD) link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NEWYEAR_G_PD.gif');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NEWYEAR_G_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NEWYEAR_G_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NEWYEAR_G_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NEWYEAR_G_TH.jpg');
        case 'F':
          if (animation_PD) link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NEWYEAR_F_PD.gif');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NEWYEAR_F_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NEWYEAR_F_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NEWYEAR_F_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NEWYEAR_F_TH.jpg');
        case 'E':
          if (animation_PD) link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NEWYEAR_E_PD.gif');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NEWYEAR_E_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NEWYEAR_E_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NEWYEAR_E_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NEWYEAR_E_TH.jpg');
        case 'D':
          if (animation_PD) link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NEWYEAR_D_PD.gif');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NEWYEAR_D_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NEWYEAR_D_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NEWYEAR_D_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NEWYEAR_D_TH.jpg');
        case 'C':
          if (animation_PD) link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NEWYEAR_C_PD.gif');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NEWYEAR_C_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NEWYEAR_C_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NEWYEAR_C_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NEWYEAR_C_TH.jpg');
        case 'B':
          if (animation_PD) link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NEWYEAR_B_PD.gif');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NEWYEAR_B_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NEWYEAR_B_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NEWYEAR_B_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NEWYEAR_B_TH.jpg');
        case 'A':
          if (animation_PD) link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NEWYEAR_A_PD.gif');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NEWYEAR_A_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NEWYEAR_A_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NEWYEAR_A_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NEWYEAR_A_TH.jpg');
      }
      return link;
    },
    layout_001NHOLIDAY() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NHOLIDAY_H_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NHOLIDAY_H_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NHOLIDAY_H_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NHOLIDAY_H_TH.jpg');
        case 'G':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NHOLIDAY_G_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NHOLIDAY_G_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NHOLIDAY_G_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NHOLIDAY_G_TH.jpg');
        case 'F':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NHOLIDAY_F_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NHOLIDAY_F_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NHOLIDAY_F_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NHOLIDAY_F_TH.jpg');
        case 'E':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NHOLIDAY_E_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NHOLIDAY_E_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NHOLIDAY_E_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NHOLIDAY_E_TH.jpg');
        case 'D':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NHOLIDAY_D_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NHOLIDAY_D_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NHOLIDAY_D_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NHOLIDAY_D_TH.jpg');
        case 'C':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NHOLIDAY_C_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NHOLIDAY_C_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NHOLIDAY_C_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NHOLIDAY_C_TH.jpg');
        case 'B':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NHOLIDAY_B_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NHOLIDAY_B_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NHOLIDAY_B_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NHOLIDAY_B_TH.jpg');
        case 'A':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NHOLIDAY_A_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NHOLIDAY_A_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NHOLIDAY_A_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NHOLIDAY_A_TH.jpg');
      }
      return link;
    },
    layout_001NNEWYEAR() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NNEWYEAR_H_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NNEWYEAR_H_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NNEWYEAR_H_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NNEWYEAR_H_TH.jpg');
        case 'G':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NNEWYEAR_G_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NNEWYEAR_G_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NNEWYEAR_G_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NNEWYEAR_G_TH.jpg');
        case 'F':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NNEWYEAR_F_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NNEWYEAR_F_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NNEWYEAR_F_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NNEWYEAR_F_TH.jpg');
        case 'E':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NNEWYEAR_E_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NNEWYEAR_E_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NNEWYEAR_E_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NNEWYEAR_E_TH.jpg');
        case 'D':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NNEWYEAR_D_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NNEWYEAR_D_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NNEWYEAR_D_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NNEWYEAR_D_TH.jpg');
        case 'C':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NNEWYEAR_C_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NNEWYEAR_C_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NNEWYEAR_C_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NNEWYEAR_C_TH.jpg');
        case 'B':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NNEWYEAR_B_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NNEWYEAR_B_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NNEWYEAR_B_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NNEWYEAR_B_TH.jpg');
        case 'A':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NNEWYEAR_A_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NNEWYEAR_A_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NNEWYEAR_A_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NNEWYEAR_A_TH.jpg');
      }
      return link;
    },
    layout_001NRELIGIOUS() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NRELIGIOUS_H_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NRELIGIOUS_H_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NRELIGIOUS_H_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NRELIGIOUS_H_TH.jpg');
        case 'G':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NRELIGIOUS_G_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NRELIGIOUS_G_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NRELIGIOUS_G_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NRELIGIOUS_G_TH.jpg');
        case 'F':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NRELIGIOUS_F_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NRELIGIOUS_F_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NRELIGIOUS_F_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NRELIGIOUS_F_TH.jpg');
        case 'E':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NRELIGIOUS_E_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NRELIGIOUS_E_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NRELIGIOUS_E_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NRELIGIOUS_E_TH.jpg');
        case 'D':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NRELIGIOUS_D_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NRELIGIOUS_D_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NRELIGIOUS_D_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NRELIGIOUS_D_TH.jpg');
        case 'C':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NRELIGIOUS_C_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NRELIGIOUS_C_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NRELIGIOUS_C_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NRELIGIOUS_C_TH.jpg');
        case 'B':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NRELIGIOUS_B_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NRELIGIOUS_B_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NRELIGIOUS_B_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NRELIGIOUS_B_TH.jpg');
        case 'A':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NRELIGIOUS_A_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NRELIGIOUS_A_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NRELIGIOUS_A_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001NRELIGIOUS_A_TH.jpg');
      }
      return link;
    },
    layout_001O() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_001OCF() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_001OCHRISTMAS() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001OCHRISTMAS_H_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001OCHRISTMAS_H_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001OCHRISTMAS_H_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001OCHRISTMAS_H_TH.jpg');
        case 'G':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001OCHRISTMAS_G_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001OCHRISTMAS_G_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001OCHRISTMAS_G_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001OCHRISTMAS_G_TH.jpg');
        case 'F':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001OCHRISTMAS_F_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001OCHRISTMAS_F_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001OCHRISTMAS_F_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001OCHRISTMAS_F_TH.jpg');
        case 'E':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001OCHRISTMAS_E_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001OCHRISTMAS_E_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001OCHRISTMAS_E_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001OCHRISTMAS_E_TH.jpg');
        case 'D':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001OCHRISTMAS_D_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001OCHRISTMAS_D_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001OCHRISTMAS_D_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001OCHRISTMAS_D_TH.jpg');
        case 'C':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001OCHRISTMAS_C_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001OCHRISTMAS_C_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001OCHRISTMAS_C_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001OCHRISTMAS_C_TH.jpg');
        case 'B':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001OCHRISTMAS_B_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001OCHRISTMAS_B_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001OCHRISTMAS_B_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001OCHRISTMAS_B_TH.jpg');
        case 'A':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001OCHRISTMAS_A_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001OCHRISTMAS_A_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001OCHRISTMAS_A_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001OCHRISTMAS_A_TH.jpg');
      }
      return link;
    },
    layout_001OHOLIDAY() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001OHOLIDAY_H_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001OHOLIDAY_H_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001OHOLIDAY_H_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001OHOLIDAY_H_TH.jpg');
        case 'G':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001OHOLIDAY_G_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001OHOLIDAY_G_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001OHOLIDAY_G_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001OHOLIDAY_G_TH.jpg');
        case 'F':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001OHOLIDAY_F_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001OHOLIDAY_F_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001OHOLIDAY_F_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001OHOLIDAY_F_TH.jpg');
        case 'E':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001OHOLIDAY_E_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001OHOLIDAY_E_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001OHOLIDAY_E_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001OHOLIDAY_E_TH.jpg');
        case 'D':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001OHOLIDAY_D_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001OHOLIDAY_D_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001OHOLIDAY_D_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001OHOLIDAY_D_TH.jpg');
        case 'C':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001OHOLIDAY_C_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001OHOLIDAY_C_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001OHOLIDAY_C_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001OHOLIDAY_C_TH.jpg');
        case 'B':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001OHOLIDAY_B_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001OHOLIDAY_B_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001OHOLIDAY_B_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001OHOLIDAY_B_TH.jpg');
        case 'A':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001OHOLIDAY_A_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001OHOLIDAY_A_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001OHOLIDAY_A_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001OHOLIDAY_A_TH.jpg');
      }
      return link;
    },
    layout_001ONEWYEAR() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ONEWYEAR_H_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ONEWYEAR_H_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ONEWYEAR_H_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ONEWYEAR_H_TH.jpg');
        case 'G':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ONEWYEAR_G_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ONEWYEAR_G_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ONEWYEAR_G_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ONEWYEAR_G_TH.jpg');
        case 'F':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ONEWYEAR_F_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ONEWYEAR_F_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ONEWYEAR_F_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ONEWYEAR_F_TH.jpg');
        case 'E':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ONEWYEAR_E_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ONEWYEAR_E_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ONEWYEAR_E_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ONEWYEAR_E_TH.jpg');
        case 'D':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ONEWYEAR_D_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ONEWYEAR_D_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ONEWYEAR_D_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ONEWYEAR_D_TH.jpg');
        case 'C':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ONEWYEAR_C_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ONEWYEAR_C_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ONEWYEAR_C_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ONEWYEAR_C_TH.jpg');
        case 'B':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ONEWYEAR_B_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ONEWYEAR_B_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ONEWYEAR_B_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ONEWYEAR_B_TH.jpg');
        case 'A':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ONEWYEAR_A_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ONEWYEAR_A_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ONEWYEAR_A_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ONEWYEAR_A_TH.jpg');
      }
      return link;
    },
    layout_001ORELIGIOUS() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ORELIGIOUS_H_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ORELIGIOUS_H_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ORELIGIOUS_H_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ORELIGIOUS_H_TH.jpg');
        case 'G':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ORELIGIOUS_G_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ORELIGIOUS_G_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ORELIGIOUS_G_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ORELIGIOUS_G_TH.jpg');
        case 'F':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ORELIGIOUS_F_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ORELIGIOUS_F_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ORELIGIOUS_F_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ORELIGIOUS_F_TH.jpg');
        case 'E':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ORELIGIOUS_E_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ORELIGIOUS_E_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ORELIGIOUS_E_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ORELIGIOUS_E_TH.jpg');
        case 'D':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ORELIGIOUS_D_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ORELIGIOUS_D_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ORELIGIOUS_D_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ORELIGIOUS_D_TH.jpg');
        case 'C':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ORELIGIOUS_C_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ORELIGIOUS_C_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ORELIGIOUS_C_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ORELIGIOUS_C_TH.jpg');
        case 'B':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ORELIGIOUS_B_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ORELIGIOUS_B_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ORELIGIOUS_B_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ORELIGIOUS_B_TH.jpg');
        case 'A':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ORELIGIOUS_A_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ORELIGIOUS_A_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ORELIGIOUS_A_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001ORELIGIOUS_A_TH.jpg');
      }
      return link;
    },
    layout_001P() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_001Q() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_001R() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_001RELIGIOUS(animation_PD = false) {
      var link = [];

      switch (this.colorways) {
        case 'H':
          if (animation_PD) link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001RELIGIOUS_H_PD.gif');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001RELIGIOUS_H_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001RELIGIOUS_H_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001RELIGIOUS_H_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001RELIGIOUS_H_TH.jpg');
        case 'G':
          if (animation_PD) link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001RELIGIOUS_G_PD.gif');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001RELIGIOUS_G_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001RELIGIOUS_G_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001RELIGIOUS_G_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001RELIGIOUS_G_TH.jpg');
        case 'F':
          if (animation_PD) link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001RELIGIOUS_F_PD.gif');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001RELIGIOUS_F_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001RELIGIOUS_F_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001RELIGIOUS_F_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001RELIGIOUS_F_TH.jpg');
        case 'E':
          if (animation_PD) link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001RELIGIOUS_E_PD.gif');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001RELIGIOUS_E_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001RELIGIOUS_E_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001RELIGIOUS_E_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001RELIGIOUS_E_TH.jpg');
        case 'D':
          if (animation_PD) link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001RELIGIOUS_D_PD.gif');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001RELIGIOUS_D_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001RELIGIOUS_D_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001RELIGIOUS_D_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001RELIGIOUS_D_TH.jpg');
        case 'C':
          if (animation_PD) link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001RELIGIOUS_C_PD.gif');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001RELIGIOUS_C_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001RELIGIOUS_C_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001RELIGIOUS_C_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001RELIGIOUS_C_TH.jpg');
        case 'B':
          if (animation_PD) link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001RELIGIOUS_B_PD.gif');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001RELIGIOUS_B_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001RELIGIOUS_B_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001RELIGIOUS_B_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001RELIGIOUS_B_TH.jpg');
        case 'A':
          if (animation_PD) link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001RELIGIOUS_A_PD.gif');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001RELIGIOUS_A_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001RELIGIOUS_A_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001RELIGIOUS_A_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001RELIGIOUS_A_TH.jpg');
      }
      return link;
    },
    layout_001S() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_001T() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_001U() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_001V() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_002C() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-002C_H_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-002C_H_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-002C_H_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-002C_H_TH.jpg');
        case 'G':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-002C_G_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-002C_G_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-002C_G_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-002C_G_TH.jpg');
        case 'F':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-002C_F_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-002C_F_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-002C_F_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-002C_F_TH.jpg');
        case 'E':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-002C_E_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-002C_E_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-002C_E_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-002C_E_TH.jpg');
        case 'D':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-002C_D_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-002C_D_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-002C_D_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-002C_D_TH.jpg');
        case 'C':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-002C_C_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-002C_C_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-002C_C_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-002C_C_TH.jpg');
        case 'B':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-002C_B_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-002C_B_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-002C_B_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-002C_B_TH.jpg');
        case 'A':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-002C_A_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-002C_A_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-002C_A_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-002C_A_TH.jpg');
      }
      return link;
    },
    layout_002D() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-002D_H_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-002D_H_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-002D_H_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-002D_H_TH.jpg');
        case 'G':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-002D_G_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-002D_G_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-002D_G_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-002D_G_TH.jpg');
        case 'F':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-002D_F_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-002D_F_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-002D_F_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-002D_F_TH.jpg');
        case 'E':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-002D_E_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-002D_E_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-002D_E_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-002D_E_TH.jpg');
        case 'D':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-002D_D_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-002D_D_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-002D_D_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-002D_D_TH.jpg');
        case 'C':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-002D_C_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-002D_C_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-002D_C_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-002D_C_TH.jpg');
        case 'B':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-002D_B_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-002D_B_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-002D_B_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-002D_B_TH.jpg');
        case 'A':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-002D_A_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-002D_A_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-002D_A_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-002D_A_TH.jpg');
      }
      return link;
    },
    layout_003() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-003_H_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-003_H_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-003_H_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-003_H_TH.jpg');
        case 'G':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-003_G_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-003_G_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-003_G_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-003_G_TH.jpg');
        case 'F':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-003_F_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-003_F_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-003_F_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-003_F_TH.jpg');
        case 'E':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-003_E_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-003_E_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-003_E_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-003_E_TH.jpg');
        case 'D':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-003_D_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-003_D_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-003_D_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-003_D_TH.jpg');
        case 'C':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-003_C_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-003_C_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-003_C_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-003_C_TH.jpg');
        case 'B':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-003_B_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-003_B_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-003_B_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-003_B_TH.jpg');
        case 'A':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-003_A_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-003_A_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-003_A_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-003_A_TH.jpg');
      }
      return link;
    },
    layout_004() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-004_H_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-004_H_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-004_H_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-004_H_TH.jpg');
        case 'G':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-004_G_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-004_G_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-004_G_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-004_G_TH.jpg');
        case 'F':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-004_F_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-004_F_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-004_F_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-004_F_TH.jpg');
        case 'E':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-004_E_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-004_E_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-004_E_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-004_E_TH.jpg');
        case 'D':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-004_D_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-004_D_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-004_D_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-004_D_TH.jpg');
        case 'C':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-004_C_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-004_C_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-004_C_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-004_C_TH.jpg');
        case 'B':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-004_B_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-004_B_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-004_B_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-004_B_TH.jpg');
        case 'A':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-004_A_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-004_A_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-004_A_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-004_A_TH.jpg');
      }
      return link;
    },
    layout_005() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_006() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-006_H_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-006_H_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-006_H_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-006_H_TH.jpg');
        case 'G':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-006_G_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-006_G_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-006_G_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-006_G_TH.jpg');
        case 'F':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-006_F_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-006_F_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-006_F_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-006_F_TH.jpg');
        case 'E':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-006_E_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-006_E_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-006_E_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-006_E_TH.jpg');
        case 'D':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-006_D_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-006_D_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-006_D_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-006_D_TH.jpg');
        case 'C':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-006_C_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-006_C_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-006_C_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-006_C_TH.jpg');
        case 'B':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-006_B_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-006_B_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-006_B_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-006_B_TH.jpg');
        case 'A':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-006_A_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-006_A_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-006_A_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-006_A_TH.jpg');
      }
      return link;
    },
    layout_007() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007_H_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007_H_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007_H_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007_H_TH.jpg');
        case 'G':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007_G_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007_G_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007_G_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007_G_TH.jpg');
        case 'F':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007_F_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007_F_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007_F_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007_F_TH.jpg');
        case 'E':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007_E_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007_E_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007_E_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007_E_TH.jpg');
        case 'D':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007_D_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007_D_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007_D_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007_D_TH.jpg');
        case 'C':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007_C_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007_C_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007_C_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007_C_TH.jpg');
        case 'B':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007_B_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007_B_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007_B_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007_B_TH.jpg');
        case 'A':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007_A_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007_A_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007_A_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007_A_TH.jpg');
      }
      return link;
    },
    layout_007B() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007B_H_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007B_H_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007B_H_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007B_H_TH.jpg');
        case 'G':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007B_G_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007B_G_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007B_G_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007B_G_TH.jpg');
        case 'F':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007B_F_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007B_F_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007B_F_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007B_F_TH.jpg');
        case 'E':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007B_E_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007B_E_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007B_E_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007B_E_TH.jpg');
        case 'D':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007B_D_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007B_D_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007B_D_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007B_D_TH.jpg');
        case 'C':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007B_C_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007B_C_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007B_C_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007B_C_TH.jpg');
        case 'B':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007B_B_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007B_B_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007B_B_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007B_B_TH.jpg');
        case 'A':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007B_A_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007B_A_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007B_A_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007B_A_TH.jpg');
      }
      return link;
    },
    layout_007BCF() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_007BCHRISTMAS() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007BCHRISTMAS_H_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007BCHRISTMAS_H_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007BCHRISTMAS_H_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007BCHRISTMAS_H_TH.jpg');
        case 'G':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007BCHRISTMAS_G_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007BCHRISTMAS_G_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007BCHRISTMAS_G_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007BCHRISTMAS_G_TH.jpg');
        case 'F':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007BCHRISTMAS_F_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007BCHRISTMAS_F_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007BCHRISTMAS_F_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007BCHRISTMAS_F_TH.jpg');
        case 'E':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007BCHRISTMAS_E_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007BCHRISTMAS_E_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007BCHRISTMAS_E_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007BCHRISTMAS_E_TH.jpg');
        case 'D':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007BCHRISTMAS_D_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007BCHRISTMAS_D_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007BCHRISTMAS_D_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007BCHRISTMAS_D_TH.jpg');
        case 'C':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007BCHRISTMAS_C_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007BCHRISTMAS_C_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007BCHRISTMAS_C_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007BCHRISTMAS_C_TH.jpg');
        case 'B':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007BCHRISTMAS_B_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007BCHRISTMAS_B_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007BCHRISTMAS_B_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007BCHRISTMAS_B_TH.jpg');
        case 'A':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007BCHRISTMAS_A_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007BCHRISTMAS_A_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007BCHRISTMAS_A_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007BCHRISTMAS_A_TH.jpg');
      }
      return link;
    },
    layout_007BHOLIDAY() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007BHOLIDAY_H_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007BHOLIDAY_H_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007BHOLIDAY_H_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007BHOLIDAY_H_TH.jpg');
        case 'G':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007BHOLIDAY_G_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007BHOLIDAY_G_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007BHOLIDAY_G_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007BHOLIDAY_G_TH.jpg');
        case 'F':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007BHOLIDAY_F_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007BHOLIDAY_F_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007BHOLIDAY_F_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007BHOLIDAY_F_TH.jpg');
        case 'E':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007BHOLIDAY_E_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007BHOLIDAY_E_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007BHOLIDAY_E_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007BHOLIDAY_E_TH.jpg');
        case 'D':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007BHOLIDAY_D_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007BHOLIDAY_D_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007BHOLIDAY_D_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007BHOLIDAY_D_TH.jpg');
        case 'C':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007BHOLIDAY_C_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007BHOLIDAY_C_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007BHOLIDAY_C_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007BHOLIDAY_C_TH.jpg');
        case 'B':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007BHOLIDAY_B_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007BHOLIDAY_B_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007BHOLIDAY_B_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007BHOLIDAY_B_TH.jpg');
        case 'A':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007BHOLIDAY_A_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007BHOLIDAY_A_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007BHOLIDAY_A_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007BHOLIDAY_A_TH.jpg');
      }
      return link;
    },
    layout_007BNEWYEAR() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007BNEWYEAR_H_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007BNEWYEAR_H_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007BNEWYEAR_H_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007BNEWYEAR_H_TH.jpg');
        case 'G':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007BNEWYEAR_G_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007BNEWYEAR_G_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007BNEWYEAR_G_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007BNEWYEAR_G_TH.jpg');
        case 'F':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007BNEWYEAR_F_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007BNEWYEAR_F_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007BNEWYEAR_F_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007BNEWYEAR_F_TH.jpg');
        case 'E':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007BNEWYEAR_E_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007BNEWYEAR_E_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007BNEWYEAR_E_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007BNEWYEAR_E_TH.jpg');
        case 'D':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007BNEWYEAR_D_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007BNEWYEAR_D_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007BNEWYEAR_D_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007BNEWYEAR_D_TH.jpg');
        case 'C':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007BNEWYEAR_C_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007BNEWYEAR_C_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007BNEWYEAR_C_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007BNEWYEAR_C_TH.jpg');
        case 'B':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007BNEWYEAR_B_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007BNEWYEAR_B_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007BNEWYEAR_B_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007BNEWYEAR_B_TH.jpg');
        case 'A':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007BNEWYEAR_A_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007BNEWYEAR_A_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007BNEWYEAR_A_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007BNEWYEAR_A_TH.jpg');
      }
      return link;
    },
    layout_007BRELIGIOUS() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007BRELIGIOUS_H_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007BRELIGIOUS_H_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007BRELIGIOUS_H_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007BRELIGIOUS_H_TH.jpg');
        case 'G':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007BRELIGIOUS_G_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007BRELIGIOUS_G_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007BRELIGIOUS_G_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007BRELIGIOUS_G_TH.jpg');
        case 'F':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007BRELIGIOUS_F_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007BRELIGIOUS_F_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007BRELIGIOUS_F_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007BRELIGIOUS_F_TH.jpg');
        case 'E':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007BRELIGIOUS_E_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007BRELIGIOUS_E_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007BRELIGIOUS_E_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007BRELIGIOUS_E_TH.jpg');
        case 'D':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007BRELIGIOUS_D_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007BRELIGIOUS_D_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007BRELIGIOUS_D_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007BRELIGIOUS_D_TH.jpg');
        case 'C':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007BRELIGIOUS_C_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007BRELIGIOUS_C_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007BRELIGIOUS_C_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007BRELIGIOUS_C_TH.jpg');
        case 'B':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007BRELIGIOUS_B_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007BRELIGIOUS_B_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007BRELIGIOUS_B_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007BRELIGIOUS_B_TH.jpg');
        case 'A':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007BRELIGIOUS_A_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007BRELIGIOUS_A_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007BRELIGIOUS_A_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007BRELIGIOUS_A_TH.jpg');
      }
      return link;
    },
    layout_007CHRISTMAS() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_007HOLIDAY() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_007NEWYEAR() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_007RELIGIOUS() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_008() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008_H_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008_H_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008_H_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008_H_TH.jpg');
        case 'G':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008_G_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008_G_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008_G_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008_G_TH.jpg');
        case 'F':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008_F_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008_F_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008_F_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008_F_TH.jpg');
        case 'E':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008_E_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008_E_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008_E_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008_E_TH.jpg');
        case 'D':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008_D_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008_D_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008_D_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008_D_TH.jpg');
        case 'C':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008_C_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008_C_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008_C_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008_C_TH.jpg');
        case 'B':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008_B_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008_B_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008_B_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008_B_TH.jpg');
        case 'A':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008_A_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008_A_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008_A_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008_A_TH.jpg');
      }
      return link;
    },
    layout_008A() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008A_H_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008A_H_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008A_H_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008A_H_TH.jpg');
        case 'G':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008A_G_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008A_G_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008A_G_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008A_G_TH.jpg');
        case 'F':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008A_F_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008A_F_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008A_F_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008A_F_TH.jpg');
        case 'E':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008A_E_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008A_E_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008A_E_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008A_E_TH.jpg');
        case 'D':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008A_D_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008A_D_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008A_D_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008A_D_TH.jpg');
        case 'C':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008A_C_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008A_C_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008A_C_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008A_C_TH.jpg');
        case 'B':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008A_B_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008A_B_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008A_B_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008A_B_TH.jpg');
        case 'A':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008A_A_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008A_A_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008A_A_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008A_A_TH.jpg');
      }
      return link;
    },
    layout_008B() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008B_H_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008B_H_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008B_H_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008B_H_TH.jpg');
        case 'G':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008B_G_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008B_G_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008B_G_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008B_G_TH.jpg');
        case 'F':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008B_F_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008B_F_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008B_F_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008B_F_TH.jpg');
        case 'E':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008B_E_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008B_E_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008B_E_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008B_E_TH.jpg');
        case 'D':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008B_D_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008B_D_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008B_D_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008B_D_TH.jpg');
        case 'C':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008B_C_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008B_C_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008B_C_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008B_C_TH.jpg');
        case 'B':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008B_B_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008B_B_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008B_B_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008B_B_TH.jpg');
        case 'A':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008B_A_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008B_A_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008B_A_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008B_A_TH.jpg');
      }
      return link;
    },
    layout_008C() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_008D() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_008E() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_009() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-009_H_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-009_H_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-009_H_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-009_H_TH.jpg');
        case 'G':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-009_G_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-009_G_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-009_G_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-009_G_TH.jpg');
        case 'F':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-009_F_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-009_F_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-009_F_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-009_F_TH.jpg');
        case 'E':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-009_E_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-009_E_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-009_E_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-009_E_TH.jpg');
        case 'D':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-009_D_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-009_D_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-009_D_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-009_D_TH.jpg');
        case 'C':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-009_C_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-009_C_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-009_C_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-009_C_TH.jpg');
        case 'B':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-009_B_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-009_B_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-009_B_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-009_B_TH.jpg');
        case 'A':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-009_A_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-009_A_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-009_A_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-009_A_TH.jpg');
      }
      return link;
    },
    layout_010B() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_011A() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_011ACHRISTMAS() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_011AHOLIDAY() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_011ANEWYEAR() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_011ARELIGIOUS() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_011B() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_011BC() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_011BCHRISTMAS() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_011BHOLIDAY() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_011BNEWYEAR() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_011BRELIGIOUS() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_011C() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_011CCHRISTMAS() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_011CHOLIDAY() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_011CNEWYEAR() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_011CRELIGIOUS() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_011D() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_011DCHRISTMAS() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_011DHOLIDAY() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_011DNEWYEAR() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_011DRELIGIOUS() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_011I() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_011ICHRISTMAS() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_011IHOLIDAY() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_011INEWYEAR() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_011IRELIGIOUS() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_011J() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_011JCHRISTMAS() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_011JHOLIDAY() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_011JNEWYEAR() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_011JRELIGIOUS() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_011M() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_011MCHRISTMAS() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_011MHOLIDAY() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_011MNEWYEAR() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_011MRELIGIOUS() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_011N() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_011NCHRISTMAS() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_011NHOLIDAY() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_011NNEWYEAR() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_011NRELIGIOUS() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_011O() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_011OCHRISTMAS() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_011OHOLIDAY() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_011ONEWYEAR() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_011ORELIGIOUS() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_011P() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_011Q() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_011R() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_011S() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_011T() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_011U() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_011V() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_012() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_012CHRISTMAS() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_012HOLIDAY() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_012NEWYEAR() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_012RELIGIOUS() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_013A() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_013B() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_013BC() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_013C() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_013D() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_013E() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_013F() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_013I() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_013J() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_013M() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_013N() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_013O() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_013Z() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    }
  }
}
