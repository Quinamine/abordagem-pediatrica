function printOkExpection(){console.log("Esta exceção não interfere no funcinamento normal do programa.")}function mudarTema(){if(localStorage.tema){let u=document.querySelectorAll("header, footer, div.body-row, div.main-content, div.row-of-social-sites"),p=document.querySelectorAll(".body-row a, div.row-of-social-sites a"),v=document.querySelectorAll("div.main-content h1, div.main-content h2, div.main-content h3, div.main-content h4, div.main-content h5"),L=document.querySelectorAll("div.main-content, fieldset"),h=document.querySelectorAll("p.nota, p.nota-de-formulario, p.prescricao-correcta, p.regra-de-tres-simples, .aside-content"),y=document.querySelector("div.aside-content h3"),x=document.querySelectorAll("p.return-top a, p.parent-de-link-de-volta a"),w=document.querySelectorAll("p.return-top, p.parent-de-link-de-volta, hr"),E=document.querySelectorAll("table th"),k=document.querySelector("div.container-of-all-content-sobre-o-autor a"),g=document.querySelectorAll("form#preferences legend"),b=document.querySelectorAll("form#preferences label"),O=document.querySelector("span.trecho-com-display-none-no-pc"),S=document.querySelectorAll("form input, form p#paragrafo-parent-de-farmaco select, form#preferences select"),z=document.querySelectorAll(".input-extension"),q=document.querySelectorAll("header, footer, input, select, .p-da-calculadora"),A=document.querySelectorAll("div.all-content-container, fieldset"),_=document.querySelectorAll("div.body-row, div.main-content, fieldset, form legend,  .p-da-calculadora, p.return-top, p.parent-de-link-de-volta, table, th, td"),T=document.querySelector("div.row-of-social-sites"),W=document.querySelectorAll(".p-da-calculadora"),B=document.querySelector("p.resultado");if("escuro"==localStorage.tema){for(var o of(document.body.classList.add("fundo_cinzaescuro-para-body"),u))o.classList.add("fundo_escuro_triplodois");for(var e of v)e.classList.add("fundo-preto-para-titulo");for(var r of p)r.classList.add("roxo");try{for(var a of h)a.classList.add("fundo-preto-para-titulo")}catch(o){printOkExpection()}try{for(var t of w)t.classList.add("border-cinza-discreta")}catch(o){printOkExpection()}try{for(var r of x)r.classList.add("fundo-azul-escuro")}catch(o){printOkExpection()}try{for(var c of S)c.classList.add("css-para-formChildren")}catch(o){printOkExpection()}try{for(var s of z)s.classList.add("fundo_escuro_triplodois")}catch(o){printOkExpection()}try{for(var i of L)i.classList.add("border-cinza")}catch(o){printOkExpection()}try{for(var n of E)n.classList.add("th-cor-escura")}catch(o){printOkExpection()}try{y.classList.add("fundo-cinza-para-titulo-do-aside")}catch(o){printOkExpection()}try{k.classList.add("cor-do-link-sobre-o-autor")}catch(o){printOkExpection()}try{O.classList.add("cor-cinza-claro-do-body")}catch(o){printOkExpection()}if(window.innerWidth<=1005){for(var e of v)e.classList.add("fundo-cinza-para-header-footer");for(var d of _)d.classList.add("border-cinza-discreta");try{for(var a of h)a.classList.add("fundo-roxo-para-destaques")}catch(o){printOkExpection()}}else{for(var e of v)e.classList.remove("fundo-cinza-para-header-footer");for(var d of _)d.classList.remove("border-cinza-discreta");try{for(var a of h)a.classList.remove("fundo-azul-escuro")}catch(o){printOkExpection()}}if(window.innerWidth<522){for(var l of q)l.classList.add("fundo-cinza-para-header-footer");for(var f of A)f.classList.add("fundo_escuro_triplodois");try{for(var t of W)t.classList.add("radius-dois")}catch(o){printOkExpection()}try{for(var m of g)m.classList.add("cor-cinza-claro")}catch(o){printOkExpection()}try{for(var m of b)m.classList.add("cor-cinza-escuro")}catch(o){printOkExpection()}try{T.classList.add("fundo-dracula")}catch(o){printOkExpection()}try{B.classList.add("bg-para-p-resultado")}catch(o){printOkExpection()}}else{for(var l of q)l.classList.remove("fundo-cinza-para-header-footer");for(var f of A)f.classList.remove("fundo_escuro_triplodois");try{for(var m of g)m.classList.remove("cor-cinza-claro")}catch(o){printOkExpection()}try{for(var t of W)t.classList.remove("radius-dois")}catch(o){printOkExpection()}try{for(var m of b)m.classList.remove("cor-cinza-escuro")}catch(o){printOkExpection()}try{T.classList.remove("fundo-dracula")}catch(o){printOkExpection()}try{B.classList.remove("bg-para-p-resultado")}catch(o){printOkExpection()}}}else{for(var o of(document.body.classList.remove("fundo_cinzaescuro-para-body"),u))o.classList.remove("fundo_escuro_triplodois");for(var e of v)e.classList.remove("fundo-preto-para-titulo");for(var r of p)r.classList.remove("roxo");try{for(var a of h)a.classList.remove("fundo-preto-para-titulo")}catch(o){printOkExpection()}try{for(var r of w)t.classList.remove("border-cinza-discreta")}catch(o){printOkExpection()}try{for(var r of x)r.classList.remove("fundo-azul-escuro")}catch(o){printOkExpection()}try{for(var c of S)c.classList.remove("css-para-formChildren")}catch(o){printOkExpection()}try{for(var s of z)s.classList.remove("fundo_escuro_triplodois")}catch(o){printOkExpection()}try{for(var i of L)i.classList.remove("border-cinza")}catch(o){printOkExpection()}try{for(var n of E)n.classList.remove("th-cor-escura")}catch(o){printOkExpection()}try{y.classList.remove("fundo-cinza-para-titulo-do-aside")}catch(o){printOkExpection()}try{k.classList.remove("cor-do-link-sobre-o-autor")}catch(o){printOkExpection()}try{O.classList.remove("cor-cinza-claro-do-body")}catch(o){printOkExpection()}if(window.innerWidth<=1005){for(var e of v)e.classList.remove("fundo-cinza-para-header-footer");for(var d of _)d.classList.remove("border-cinza-discreta");try{for(var a of h)a.classList.remove("fundo-azul-escuro")}catch(o){printOkExpection()}}if(window.innerWidth<522){for(var l of q)l.classList.remove("fundo-cinza-para-header-footer");for(var f of A)f.classList.remove("fundo_escuro_triplodois");try{for(var m of g)m.classList.remove("cor-cinza-claro")}catch(o){printOkExpection()}try{for(var t of W)t.classList.remove("radius-dois")}catch(o){printOkExpection()}try{for(var m of b)m.classList.remove("cor-cinza-escuro")}catch(o){printOkExpection()}try{T.classList.remove("fundo-dracula")}catch(o){printOkExpection()}try{B.classList.remove("bg-para-p-resultado")}catch(o){printOkExpection()}}}}}function mudarFonte(){if(localStorage.fontfamily){let e=document.querySelectorAll("form select, div.banner h2");if("serif"==localStorage.fontfamily){document.body.classList.remove("fonte-cursiva");try{for(var o of e)o.classList.remove("fonte-cursiva")}catch(o){printOkExpection()}document.body.classList.add("fonte-serifada");try{for(var o of e)o.classList.add("fonte-serifada")}catch(o){printOkExpection()}}else if("cursiva"==localStorage.fontfamily){document.body.classList.remove("fonte-serifada");try{for(var o of e)o.classList.remove("fonte-serifada")}catch(o){printOkExpection()}document.body.classList.add("fonte-cursiva");try{for(var o of e)o.classList.add("fonte-cursiva")}catch(o){printOkExpection()}}else{document.body.classList.remove("fonte-serifada");try{for(var o of e)o.classList.remove("fonte-serifada")}catch(o){printOkExpection()}document.body.classList.remove("fonte-cursiva");try{for(var o of e)o.classList.remove("fonte-cursiva")}catch(o){printOkExpection()}}}}function mudarAlinhamento(){localStorage.fontalign&&("justified"==localStorage.fontalign?document.body.classList.add("text-align-justify"):document.body.classList.remove("text-align-justify"))}function mudarTamanhodafonte(){if(localStorage.fontsize){let r=document.getElementsByTagName("html")[0],a=document.querySelector("div.header-row"),t=document.querySelector("div.footer-row"),c=document.querySelector("div.footer-row a"),s=document.querySelector("div.menu-box"),i=document.querySelector("div.menu-box nav ul"),n=document.querySelectorAll("div.menu-box nav ul li"),d=document.querySelectorAll("header div.header-row, footer div.footer-row"),l=document.querySelectorAll(".p-da-calculadora"),f=document.querySelector("#paragrafo-parent-de-farmaco select"),m=document.querySelectorAll("form#calculadora input"),u=document.querySelectorAll("form#calculadora select"),p=document.querySelector("div.aside-content");if("small"==localStorage.fontsize){for(var o of(r.classList.remove("font-size-big"),p.classList.remove("padding-para-aside-com-bigfont"),d))o.classList.remove("max-width-maior-para-rows-header-footer");t.classList.remove("display-block"),c.classList.remove("display-block"),a.classList.remove("header-row-dir-column"),a.classList.remove("header-row-dir-column"),s.classList.remove("menu-box-width-cem"),i.classList.remove("formatacao-para-ul-do-menu-com-fontegrande");for(let o of n)o.classList.remove("formatacao-para-li-do-menu-com-fontegrande");if(r.classList.add("font-size-small"),window.innerWidth<521)try{f.classList.add("margin-zero")}catch(o){printOkExpection()}else try{f.classList.remove("margin-zero")}catch(o){printOkExpection()}if(window.innerWidth>751)try{for(var e of l)e.classList.add("padding-left-maior")}catch(o){printOkExpection()}else try{for(var e of l)e.classList.remove("padding-left-maior")}catch(o){printOkExpection()}}else if("big"==localStorage.fontsize){r.classList.remove("font-size-small"),r.classList.add("font-size-big"),p.classList.add("padding-para-aside-com-bigfont");try{for(let o of u)o.classList.add("selectform-max-width-static")}catch(o){printOkExpection()}try{for(let o of m)o.classList.add("inputform-max-width-static")}catch(o){printOkExpection()}if(window.innerWidth>1154)for(var o of d)o.classList.add("max-width-maior-para-rows-header-footer");else for(var o of d)o.classList.remove("max-width-maior-para-rows-header-footer");if(window.innerWidth>1050&&window.innerWidth<=1165){for(var o of d)o.classList.remove("max-width-maior-para-rows-header-footer");a.classList.add("header-row-dir-column"),a.classList.add("header-row-dir-column"),s.classList.add("menu-box-width-cem"),i.classList.add("formatacao-para-ul-do-menu-com-fontegrande");for(let o of n)o.classList.add("formatacao-para-li-do-menu-com-fontegrande");t.classList.add("display-block"),c.classList.add("display-block")}else{a.classList.remove("header-row-dir-column"),a.classList.remove("header-row-dir-column"),s.classList.remove("menu-box-width-cem"),i.classList.remove("formatacao-para-ul-do-menu-com-fontegrande");for(let o of n)o.classList.remove("formatacao-para-li-do-menu-com-fontegrande");t.classList.remove("display-block"),c.classList.remove("display-block")}}else{for(var o of(r.classList.remove("font-size-small"),r.classList.remove("font-size-big"),p.classList.remove("padding-para-aside-com-bigfont"),d))o.classList.remove("max-width-maior-para-rows-header-footer");t.classList.remove("display-block"),c.classList.remove("display-block"),a.classList.remove("header-row-dir-column"),a.classList.remove("header-row-dir-column"),s.classList.remove("menu-box-width-cem"),i.classList.remove("formatacao-para-ul-do-menu-com-fontegrande");for(let o of n)o.classList.remove("formatacao-para-li-do-menu-com-fontegrande");for(var o of d)o.classList.remove("max-width-maior-para-rows-header-footer")}}}function starter(){let o=document.getElementById("tema"),e=document.getElementById("familia"),r=document.getElementById("align"),a=document.getElementById("fontsize");try{o.addEventListener("change",mudarTema),e.addEventListener("change",mudarFonte),r.addEventListener("change",mudarAlinhamento),a.addEventListener("change",mudarTamanhodafonte)}catch(o){printOkExpection()}window.addEventListener("resize",mudarTema),window.addEventListener("resize",mudarTamanhodafonte)}window.addEventListener("load",starter),window.addEventListener("load",mudarTema),window.addEventListener("load",mudarFonte),window.addEventListener("load",mudarAlinhamento),window.addEventListener("load",mudarTamanhodafonte);