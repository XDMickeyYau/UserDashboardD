function changecolor (word){
    if (word=='中') return 'color:yellow;'
    else if (word=='低'||'有潜在风险') return 'color:red;'
    else return 'color:green;'
}
export default changecolor;