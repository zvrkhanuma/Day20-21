const setCharacters = (e) => {
    let value = e.target.innerHTML;
    let textareaEl = document.getElementById("textarea");
    textareaEl.innerHTML += value;
    }
function deleteCharacter() {
    let val = document.getElementById("textarea").value;
    document.getElementById("textarea").value=val.slice(0, -1);
}
// const text = ‘abcdef’
// // const editedText = text.slice(0, -1) //‘abcde’
// if(backspacekliknut){
//     textareaEl.innerHTML.slice(0, -1);
function setSpace () {
    // let value = e.target.innerHTML;
    let textareaEl = document.getElementById("textarea");
    textareaEl.innerHTML += " "; }
function toUpperCase() {
        let val = document.getElementById("textarea").value;
        var res = val.toUpperCase();
        document.getElementById("texarea").innerHTML = res;
      }