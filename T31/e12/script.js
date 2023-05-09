console.log(/\d{2}\/\d{2}\/\d{4}/.test("Vaig néixer el 07/10/1999"))
console.log(/^[\w\.\-]+@\w+\.\w{2,3}$/.test("a@g.co"))
console.log('3<4, 4>3, "you & me"'.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;'))
function surnameName(name, surname) {
    return surname+", "+name;
}
console.log(surnameName("John", "Smith"));
text = 'ini <script>(1<2)</script> hola <script>jiji</script> fi';
console.log(text.replaceAll(/<script>((?!<\/script>).)*<\/script>/g, ''));
