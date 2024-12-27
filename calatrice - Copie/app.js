const touches = [...document.querySelectorAll('.boutton')];
const listeid= Array.from(touches).map(touche => touches.id);
const listekey= Array.from(touches).map(touche => touches.dataset.key);
const ecran= document.querySelector('.ecran');

//const egalite = document.getElementById(egal)



//
document.addEventListener('keydown', (e) =>
{
    switch(e)
    { 
        case ('Enter' | '='):
        
            const valeur = "13";
            break;
        default:
            id= listeid.index(e.key);
            valeur = listekey[id];

    }
    calc(valeur);
})
document.addEventListener('click', (e) =>{
    const valeur = e.target.dataset.key.toString();
    calc(valeur);
})
const calc(valeur){
    if(listekey.includes(valeur))
    {
        switch(valeur)
        {
            case '8':
                ecran.textcontent="";
                break;
            case '13':
                const resultat = eval(ecan.textcontent);
                ecran.textcontent= resultat;
                break;
            default:
                const ind_val_aff=listekey.indexof(valeur)
                const valaff= touches[ind_val_aff]
                ecran.textContent+= valaff.innerHtml;
        }
    }
}