function reiz(ra){
  let in_x0 = document.getElementById("x0");
  let xx = in_x0.textContent; 
  in_x0.setAttribute("op1",xx);
  in_x0.textContent = "0";
  in_x0.setAttribute("op_kods",String(ra));
}
function rez(ra){
  let in_x0 = document.getElementById("x0");
  let oper2 = parseFloat(in_x0.textContent); 
  let oper1 = parseFloat(in_x0.getAttribute("op1"));
  oper1 = oper1 * oper2;
  in_x0.textContent = String(oper1);
}

function cipars(aa){
    let in_x0 = document.getElementById("x0");
    let xx = in_x0.textContent;

    in_x0.textContent = xx+String(aa);

    //console.log(xx);
}

