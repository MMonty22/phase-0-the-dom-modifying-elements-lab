// Write your code here!
  
//with \"YOUR-NAME is the champion\" inside"
//with a sweet message in it").to.include("is the champion")

const main = document.getElementById('main')
main.remove();

const newHeader = document.createElement('h1');
newHeader.id = 'victory'
newHeader.textContent = "YOUR-NAME is the champion"