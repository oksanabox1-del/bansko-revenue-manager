[['af','airbnb'],['bf','booking'],['vf','vrbo']].forEach(([id,k])=>$(id).addEventListener('change',async e=>{const f=e.target.files[0];if(f){ch[k]=ics(await f.text(),k);render()}}));
for(const id of ['base','floor','wk','lm','ho','gap','win','sum','sho','mw','mt','start','days'])$(id).addEventListener('change',render);
const now=new Date();$('start').value=ymd(now);restore();viewMonth=new Date(now.getFullYear(),now.getMonth(),1);selectedDay=ymd(now);render();
