
const sleep = ms => new Promise(resolve=>setTimeout(()=>{},ms));
export default (async function showResult(values) {
    await sleep(500);
    window.alert("you submitting the form");
    
})