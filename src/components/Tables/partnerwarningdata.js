import partnerdata from "./partnerdata.js";

var partnerwarningdata = partnerdata.filter(
  partner => partner.creditsts == "低" && partner.operationsts == "有潜在风险"
);

export default partnerwarningdata;
