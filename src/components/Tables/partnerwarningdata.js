import partnerdata from "./partnerdata.js";
console.log(partnerdata);

var partnerwarningdata = partnerdata.filter(
  partner => partner.creditsts == "低" || partner.operationsts == "有潜在风险"
);
console.log(partnerwarningdata);
export default partnerwarningdata;
