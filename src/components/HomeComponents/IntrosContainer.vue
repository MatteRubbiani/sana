<template>
<div class="main-articles-panel">

  <div class="first component description">
      <div class="article-header">
        <a>Sana Shoes</a>
      </div>
      <p>Prendiamo con serità la cura del piede, offrendo ai nostri clienti scarpe comode di altissima qualità, per ogni piede</p>
      <div class="address-container">
        Ci trovate in: <br>
        <adress>
          Viale Jacopo Barozzi, 138<br>
          41124 Modena
        </adress>
      </div>
  </div>
  <div class="second component image"> </div>


  <div class="third component description">
    <div class="article-header">
      <a>100% made in Italy</a>
    </div>
    <p>Tutti i nostri prodotti sono 100% made in Italy dall'inizio alla fine. Ci assicuriano che tutta la catena produttiva rispetti ciò.</p>

  </div>
  <div class="fourth component image"> </div>

  <div class="fifth component description">
    <div class="article-header">
      <a>Benessere per il tuo corpo</a>
    </div>
    <p>I piedi sono responsabili del nostro benessere fisico. Da tempo le culture orientali conoscono i benefici delle zone riflessogene dei piedi sui singoli organi. Una buona scarpa è la base del benessere plantare.</p>

  </div>
  <div class="six component image"> </div>

  <div class="white-end-panel"></div>
</div>



</template>

<script>

export default {
  name: "IntrosContainer",

}
</script>

<style scoped lang="scss">
@import "../../styles/global";
.main-articles-panel{
  width: 100%;
  max-width: 1500px;
  margin: auto;
  height: 2000px;
  z-index: 1;
  border-bottom: 3px solid $theme-color-two;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 60vh 60vh 60vh;
  @media (max-width: 700px) {
    display: flex;
    flex-flow: column;
    align-items: center;
  }

  .component{
    margin: 5%;
    background-color: white;
    grid-column: auto;
    grid-row: auto;
    @media (max-width: 700px) {
      width: 100%;
      margin: 0;
      position: sticky;
      top: 0;
      left: 0;
    }
  }

  .image {
    width: 90%;
    height: 90%;
    @media (max-width: 700px) {
      width: 100%;
      height: 50%;
    }

    background-image: url("../../assets/homeImages/1.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    @media (max-width: 700px) and (orientation: landscape) {
      width: 100%;
      background-size: cover;
    }
  }

  .description{
    @media (max-width: 700px) {
      padding-top: 20px;
      padding-bottom: 20px;
    }
    .article-header{
      width: fit-content;
      color: $theme-color-one;
      font-size: 2rem;
      @media (max-width: 700px) {
        padding-left: 5%;
      }
    }
    p{
      @media (max-width: 700px) {
        padding-left: 5%;
        padding-right: 5%;
      }
    }
    .address-container{
      color: $theme-color-one;
      @media (max-width: 700px) {
        padding-left: 5%;
      }
    }

  }
  .third{
    grid-row: 2 / 3;
    grid-column: 2 / 3;
  }
  .fourth{
    grid-row: 2 / 3;
    grid-column: 1 / 2;
  }

  .white-end-panel{
    display: none;
    @media (max-width: 700px) {
      display: flex;
      width: 100vw;
      height: 100vh;
      background-color: white;
      position: sticky;
      padding: 0;
      top: 0;
      right: 0;
    }

  }

}
</style>