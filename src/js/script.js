/* Criando os elementos com DOM*/ 
const section=document.getElementsByClassName('coluna-wrapper')
const startButton=document.getElementById('start')

function criarColunas(){
    for(let i=0;i<3;i++){
        const colunaStart=document.createElement('div')
        const paragraph=document.createElement('p')
        colunaStart.classList.add('colunas')
        if(i==0) {
            colunaStart.setAttribute('id','coluna-start')
            paragraph.innerText='Start'
        }
        if(i==1) {
            colunaStart.setAttribute('id','coluna-offset')
            paragraph.innerText='Offset'
        }
        if(i==2) {
            colunaStart.setAttribute('id','coluna-end')
            paragraph.innerText='End'
        }
        section[i].appendChild(colunaStart)
        section[i].appendChild(paragraph)
    }
}
criarColunas()

const colunaStart=document.getElementById('coluna-start')
const colunaOffSet=document.getElementById('coluna-offset')
const colunaEnd=document.getElementById('coluna-end')

const areaDiscoSelecionado=document.getElementById('disco-selecionado')
const areaDoJogo=document.getElementById('area-do-jogo')

function criarDiscos(numDiscos){
  colunaStart.innerHTML=''
    for(let i=1;i<=numDiscos;i++){
        
        const discos=document.createElement('div')
        discos.classList.add('discos')
        if(i==1) discos.classList.add('topo')
        discos.setAttribute('id',`disco-${i}`)
        discos.innerText=i
        colunaStart.appendChild(discos)
    }
}


/**Fim */

const JOGADA_ATUAL = document.getElementById('disco-selecionado')
const START = document.getElementById('coluna-start')
const OFFSET = document.getElementById('coluna-offset')
const END = document.getElementById('coluna-end')
const COLUNAS = document.querySelectorAll('.colunas')
const RESET=document.getElementById('reset')

const POPUP=document.querySelector('.popUpVitoria')

let posicaoInicial = START
let posicaoFinal = START
let contadorDeJogadas = 0

const NUM_JOGADAS_POPUP=document.getElementById('numJogadas')

let TAMANHO_DO_DISCO_SELECIONADO=0
let TAMANHO_DO_DISCO_NO_TOPO=0

/** Remover classe topo */
function removeClass(){
  if(START.firstElementChild!==null) START.firstElementChild.classList.remove('topo')
  if(OFFSET.firstElementChild!==null) OFFSET.firstElementChild.classList.remove('topo')
  if(END.firstElementChild!==null) END.firstElementChild.classList.remove('topo')

}

/**----------------------------- */
/**Escolher dificuldade */
let DISCOS_CRIADOS=0
let zoomed=false
const DIFICULDADES=document.getElementById('dificuldades')

DIFICULDADES.addEventListener('click',(e)=>{
  if(e.target.tagName=='LI'){

  
  reset()
  if(startButton.classList[0]=='hidden'){
    setInterval(() => {
      if(zoomed){
        startButton.classList.remove('start--zoomed')
      }else{
        startButton.classList.add('start--zoomed')
      }
      zoomed=!zoomed
    }, 200);
  }
  startButton.classList.remove('hidden')
  const dificuldadesLista=document.getElementsByClassName('dificuldade')
  for(let i=0; i<3;i++){
    dificuldadesLista[i].classList.remove('dificuldade-selecionada')
  }
  if(e.target.id=='easy'){
    document.getElementById(e.target.id).classList.add('dificuldade-selecionada')
    criarDiscos(3)
    DISCOS_CRIADOS=3
  }
  if(e.target.id=='normal'){
    document.getElementById(e.target.id).classList.add('dificuldade-selecionada')
    criarDiscos(4)
    DISCOS_CRIADOS=4
  }
  if(e.target.id=='hard'){
    document.getElementById(e.target.id).classList.add('dificuldade-selecionada')
    criarDiscos(5)
    DISCOS_CRIADOS=5
  }

 }
})


/**--------------------- */

const CONTADOR_SPAN = document.querySelector('span')

const atualizarContador = () => {
  if(posicaoInicial != posicaoFinal) {
    contadorDeJogadas++
  }
  CONTADOR_SPAN.innerText = contadorDeJogadas
}

const checarVitoria = (colunaAlvo) => {
  if( (colunaAlvo === END && END.childElementCount === DISCOS_CRIADOS) || (colunaAlvo === OFFSET && OFFSET.childElementCount === DISCOS_CRIADOS) ) {
    console.log('check')
    POPUP.classList.remove('hidden')
    NUM_JOGADAS_POPUP.innerText=contadorDeJogadas
    setTimeout(() => {
      POPUP.classList.add('hidden')
      reset()
    }, 3000);
  }
}

const moverDiscoAcima = (event) => {
  const COLUNA = event.currentTarget
  const DISCO = COLUNA.firstElementChild
  
  removeClass()  

  posicaoInicial = COLUNA

  TAMANHO_DO_DISCO_SELECIONADO= DISCO.offsetWidth
  console.log(TAMANHO_DO_DISCO_SELECIONADO)
  DISCO.classList.add('subir')
  setTimeout(()=>{
    JOGADA_ATUAL.appendChild(DISCO)
    DISCO.classList.add('topo')
    DISCO.classList.remove('subir')
  },500)
  
  
  
}

const moverDiscoAbaixo = (event) => {
  const COLUNA = event.currentTarget
  const DISCO = JOGADA_ATUAL.firstElementChild
  
  removeClass()
  
  console.log(event.currentTarget.id)
  console.log(DISCO.offsetWidth)
  TAMANHO_DO_DISCO_SELECIONADO = DISCO.offsetWidth
  
  if(event.currentTarget.firstElementChild==null){
    COLUNA.prepend(DISCO)
    posicaoFinal = COLUNA
    atualizarContador()
    checarVitoria(COLUNA)
  }else{
    TAMANHO_DO_DISCO_NO_TOPO = event.currentTarget.firstElementChild.offsetWidth
    if(TAMANHO_DO_DISCO_NO_TOPO>TAMANHO_DO_DISCO_SELECIONADO){
      COLUNA.prepend(DISCO)
      posicaoFinal = COLUNA
      atualizarContador()
      checarVitoria(COLUNA)
    }
  }
}

function reset(){
  JOGADA_ATUAL.innerHTML=''
  colunaStart.innerHTML=''
  colunaOffSet.innerHTML=''
  colunaEnd.innerHTML=''
  contadorDeJogadas=0
  CONTADOR_SPAN.innerText = contadorDeJogadas
  criarDiscos(DISCOS_CRIADOS)
}
RESET.addEventListener('click',reset)

COLUNAS.forEach( coluna => coluna.addEventListener('click', () => {
  JOGADA_ATUAL.childElementCount === 0 ? moverDiscoAcima(event) : moverDiscoAbaixo(event)
}))

const main=document.getElementById('main')

const voltarInicio=document.getElementById('voltarInicio')

startButton.addEventListener('click',()=>{
  reset()
  if(DISCOS_CRIADOS!==0){
    main.classList.remove('hidden')
  }
})
voltarInicio.addEventListener('click',()=>{
  main.classList.add('hidden')
})