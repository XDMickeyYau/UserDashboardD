import totalpartnerdata from "./totalpartnerdata.js";
var partnerinvitedata = totalpartnerdata.filter(
  partner => partner.invite == true
);

export default partnerinvitedata;
