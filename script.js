const HeadComponent = {
  template: `
    
        <div>
           <div class="logoheader"> <h3>NETPRIME +</h3>
       
           <p>La plateforme vidéo complètement originale</p>
        </div>
        <h4 class="paragraphe1">Nos formulaire d'abonnement</h4>
        <div class="descriptionHeader">
            <p>Tous nos formulaires d'abonnement sont 100% sans engagement et résiliable à tout moment. Paiement par CB, Paypal et en Bitcoin possible</p>
            
        </div>
    
        </div>
        `,
};
const BodyComponent = {
  /* mettre la data pour pouvoir le v-show qui permet d'afficher et cacher les 3 offres en dessous du buttons "en savoir plus"
  data() {
    return {
      enSavoirPlus: true,
    };
  }, 
  */

  template: `
    
        <div class="containermain">
       <div class="main">
           <h1>Découvrez très bientôt nos offres</h1>
           <p>À partir de 9,99€/mois</p>
           <br>
           <br>
           <button class="savoirPlus">En savoir plus</button>
           
       </div>
           
    
        </div>
        `,
};
const Pops = {
  props: {
    title: String,
    genre: String,
    price: String,
  },
  template: `
    
        <div class="containerPop">
       <div class="mainPop">
       <br>
       
           <h1> {{title}} </h1>
           <p> {{genre}} VIDEO HD</p>
           <p>À partir de {{price}}/mois</p>
           <br>
           <br>
           <button class="savoirPlus">S'abonner</button>
           
       </div>
           
    
        </div>
        `,
};
const FooterComponent = {
  template: `
    
        <div class="footer">
            <div><h3 class="footer1">NETPRIME +</h3></div>
           <div><p class="footer2"> &copy; Tous droits reservés</p></div>
          
        </div>
        `,
};

const RootComponent = {
  components: {
    HeadComponent,
    BodyComponent,
    Pops,
    FooterComponent,
  },

  template: `
    
        <div>
      
       
           <HeadComponent> </HeadComponent> 
           <BodyComponent> </BodyComponent> 
           <div class="containerProps">
           <Pops title="SOLO" genre="1 Écran" price="9,99€"></Pops>
           <Pops title="Family" genre="4 Écrans" price="12,99€"></Pops>
           <Pops title="Family 4K" genre="4 Écrans" price="15,99€"></Pops>
           </div>
           <FooterComponent> </FooterComponent>
           
           
    
        </div>
        `,
};

Vue.createApp(RootComponent).mount("#root");
