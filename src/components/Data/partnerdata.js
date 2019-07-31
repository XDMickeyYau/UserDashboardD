import totalpartnerdata from "./totalpartnerdata.js";
var partnerdata = totalpartnerdata.filter(partner => partner.existing == true);
export default partnerdata;
