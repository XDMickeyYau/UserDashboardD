import partnerdata from "./partnerdata.js";


var partnerwarningdata = partnerdata.filter(
  partner => partner.creditsts<650 || partner.operationsts <75
);

export default partnerwarningdata;
