let lista = {

  utenti: [
  {
    name: 'Paolo',
    età: 22,
    nickname: 'Gigi',
    pa: '2u2943u9'
  },

  {
    name: 'Mr mario',
    età: 28,
    nickname: 'loki',
    pa: 'vevev'
  },

  {
    name: 'maria',
    età: 19,
    nickname: 'Gig',
    pa: 'ncwi/8j'
  },

  {
    name: 'lucia',
    età: 22,
    nickname: 'wolf',
    pa: '0987h'
  },

  {
    name: 'Davide',
    età: 33,
    nickname: 'dedo',
    pa: '2u2943umcwo,,9'
  },
  ],

  stampanomi: function(){
    for (i=0; i<this.utenti.length;i++){
      console.log(this.utenti[i].name)
    }
  },

  stampanickname: function(){
    for (i=0; i<this.utenti.length;i++){
      console.log(this.utenti[i].nickname)
    }
  },

  contautenti: function(){
    let counter = 0
    for (i=0; i<this.utenti.length;i++){
      counter++;
    }
    return counter;
  },

  etàmedia: function(){
    let counter =0
    let somma = 0
    for (i=0;i<this.utenti.length;i++){
      somma = somma+this.utenti[i].età
      counter++;
    }

    let media = somma/counter
    return media;
  },

  meno25: function(){
    let newArr = []
    for (i=0; i<this.utenti.length;i++){
      if (this.utenti[i].età < 25){
        newArr.push(this.utenti[i])
      }
    }
    return newArr;
  }
}

lista.stampanomi();
lista.stampanickname();
console.log(lista.contautenti())
console.log(lista.etàmedia())
console.log(lista.meno25())