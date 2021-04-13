  function initVue(){
     new Vue({
      el:'#app',
      data: {
        activeIndex: 0,
        textMessage: '',
        searchText: '',
        contacts: [
          {
          name: 'Michele',
          avatar: 'img/profilo1.png',
          visible: true,
          messages: [
            {
            date: '10/01/2020 15:30:55',
            text: 'Hai portato a spasso il cane?',
            status: 'sent'
            },
            {
            date: '10/01/2020 15:50:00',
            text: 'Ricordati di dargli da mangiare',
            status: 'sent'
            },
            {
            date: '10/01/2020 16:15:22',
            text: 'Tutto fatto!',
            status: 'received'
            }
          ],
          },
          {
          name: 'Fabio',
          avatar: 'img/profilo2.png',
          visible: true,
          messages: [
            {
            date: '20/03/2020 16:30:00',
            text: 'Ciao come stai?',
            status: 'sent'
            },
            {
            date: '20/03/2020 16:30:55',
            text: 'Bene grazie! Stasera ci vediamo?',
            status: 'received'
            },
            {
            date: '20/03/2020 16:35:00',
            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
            status: 'sent'
            }
          ],
          },
          {
          name: 'Samuele',
          avatar: 'img/profilo3.png',
          visible: true,
          messages: [
            {
            date: '28/03/2020 10:10:40',
            text: 'La Marianna va in campagna',
            status: 'received'
            },
            {
            date: '28/03/2020 10:20:10',
            text: 'Sicuro di non aver sbagliato chat?',
            status: 'sent'
            },
            {
            date: '28/03/2020 16:15:22',
            text: 'Ah scusa!',
            status: 'received'
            }
          ],
          },
          {
          name: 'Luisa',
          avatar: 'img/profilo4.png',
          visible: true,
          messages: [
            {
            date: '10/01/2020 15:30:55',
            text: 'Lo sai che ha aperto una nuova pizzeria?',
            status: 'sent'
            },
            {
            date: '10/01/2020 15:50:00',
            text: 'Si, ma preferirei andare al cinema',
            status: 'received'
            }
          ],
          },
          ]
      },
      methods: {
        //funzione x visualizzare al click la conversazione
        enterClick: function(index){

          this.activeIndex = index;

        },

        sendMessage: function(){
          // funzione x inserire il messaggio scritto nell'input - aggiungerlo nella lista messaggi dei contatti
          const newMsg = this.getNewMessage(this.textMessage,'sent');
          this.contacts[this.activeIndex].messages.push(newMsg);
          this.textMessage= '';

        },

        getNewMessage: function(text, status){
          //aggiunge il il messaggio nuovo nella chat con data e ora
          const now = new Date();
          const nowStr = now.getDate() + "/"
                        + now.getMonth() + "/"
                        + now.getFullYear()+ " "
                        + now.getHours() + ":" + now.getMinutes();

          return {
            date: nowStr,
            text: text,
            status: status
          };
        },

        serchContact: function(){
          //ricerca nella lista dei contatti il nome del contatto
          const resContacts =[];
          for (let i = 0; i < contacts.length; i++) {
            const contact = this.contacts[i];
            const name = this.contact['name'];
                    // .toLowerCase= converte la stringa in lettere minuscole
            if(name.toLowerCase().icludes(this.searchText.toLowerCase())){
              resContacts.push(contact);
            }
          }
          return resContacts;
        }
        // - - - - - -  - - - - - - - - - -
      }

    })
  }

  function init(){
    initVue();
  }



  document.addEventListener('DOMContentLoaded', init);
