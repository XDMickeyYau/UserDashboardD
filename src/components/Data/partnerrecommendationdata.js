import totalpartnerdata from "./totalpartnerdata.js";
var partnerrecommnedationdata = totalpartnerdata.filter(partner => partner.recommended==true);
export default partnerrecommnedationdata;
