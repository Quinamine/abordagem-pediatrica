function changePlaceholder(){let e=document.getElementById("idade"),t=document.getElementById("peso");window.innerWidth>=521?"tarv"==t.dataset.tipopeso?t.placeholder="mínimo e máximo: 3 kg e 45 kg respectivamente":"CDP"==t.dataset.tipopeso&&(e.placeholder="mínima e máxima: 1 mês e 14 anos respectivamente",t.placeholder="mínimo e máximo: 2 kg e 35 kg respectivamente"):("CDP"==t.dataset.tipopeso&&(e.placeholder="Idade"),t.placeholder="Peso")}function starter(){changePlaceholder(),window.addEventListener("resize",changePlaceholder)}window.addEventListener("load",starter);