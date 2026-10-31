const menu=document.getElementById('menu'),nav=document.getElementById('nav');
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open)});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false')}));
document.querySelectorAll('[data-property]').forEach(a=>a.addEventListener('click',()=>document.getElementById('property').value=a.dataset.property));
document.getElementById('year').textContent=new Date().getFullYear();
document.getElementById('inquiry').addEventListener('submit',e=>{e.preventDefault();const val=id=>document.getElementById(id).value.trim();const body=`Name: ${val('name')}\nEmail: ${val('email')}\nProperty: ${val('property')}\n\n${val('message')}`;window.location.href=`mailto:6aprops@gmail.com?subject=${encodeURIComponent(val('topic')+' — '+val('name'))}&body=${encodeURIComponent(body)}`;document.getElementById('form-status').textContent='Your email draft is ready in your email app. Press Send there to contact us. If no app opened, email 6aprops@gmail.com directly.'});
