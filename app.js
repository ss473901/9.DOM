const list = document.getElementById('list'); //button要素の取得
const btn = document.getElementById('btn');　//ul要素の取得

btn.addEventListener('click',()=> {
  const li = document.createElement('li') //li要素を生成する

  li.textContent = 'まーちゃん' //li要素にテキストを追加する
  list.appendChild(li); //li要素をul要素内に追加して表示する
});


const list2 = document.getElementById('list2'); //button要素の取得
const btn2 = document.getElementById('btn2');　//ul要素の取得

btn2.addEventListener('click',()=> {
  const li = document.createElement('li') //li要素を生成する

  li.textContent = '元気？' //li要素にテキストを追加する
  list2.appendChild(li); //li要素をul要素内に追加して表示する
});


