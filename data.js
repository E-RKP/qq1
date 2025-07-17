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
  }
}

lista.stampanomi();
lista.stampanickname();