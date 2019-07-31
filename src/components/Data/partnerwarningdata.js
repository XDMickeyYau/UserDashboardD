import partnerdata from "./partnerdata.js";

function filter_warning(partner) {
  return (
    partner.existing == true &&
    (partner.信用等级 == "低" || partner.信用等级 == "中")
  );
}
var partnerwarningdata = partnerdata.filter(partner => filter_warning(partner));

export default partnerwarningdata;
