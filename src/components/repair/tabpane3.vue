<template>
  <div
    class="tab-pane"
    id="v-pills-c-3"
    role="tabpanel"
    aria-labelledby="v-pills-tab-3"
  >
    <div id="accordion-3">
      <div class="card">
        <div
          class="card-header"
          id="heading-3-1" @click="$_cardhide()"
        >
          <h5 class="mb-0">
            <button
              class="btn btn-link"
              data-toggle="collapse"
              data-target="#collapse-3-1"
              aria-expanded="true"
              aria-controls="collapse-3-1"
            >
              請問如何延長保固?
            </button>
          </h5>
        </div>
        <div
          id="collapse-3-1"
          class="collapse show"
          aria-labelledby="heading-3-1"
          data-parent="#accordion-3"
        >
          <div class="card-body">
            <p>購買後30日內請於以下頁面註冊延長保固，完成後則自動享有6個月共180天之延長保固效期。</p>
            <p>Marshall 產品線上延長保固註冊：<a
                href="http://bit.ly/3f0Nqgb"
                target="_blank"
                rel="noopener"
              >http://bit.ly/3f0Nqgb</a></p>
          </div>
        </div>
      </div>
      <div class="card">
        <div
          class="card-header"
          id="heading-3-2" @click="$_cardhide()"
        >
          <h5 class="mb-0">
            <button
              class="btn btn-link"
              data-toggle="collapse"
              data-target="#collapse-3-2"
              aria-expanded="true"
              aria-controls="collapse-3-2"
            >
              我在網路購買的，保卡是空白的怎麼辦? 一樣有保固嗎?
            </button>
          </h5>
        </div>
        <div
          id="collapse-3-2"
          class="collapse "
          aria-labelledby="heading-3-2"
          data-parent="#accordion-3"
        >
          <div class="card-body">
            <p>有的。不過請您列印網路平台的訂單紀錄，或是跟客服提出申請，以利確認您的購買時間。</p>
          </div>
        </div>
      </div>
      <div class="card">
        <div
          class="card-header"
          id="heading-3-3" @click="$_cardhide()"
        >
          <h5 class="mb-0">
            <button
              class="btn btn-link"
              data-toggle="collapse"
              data-target="#collapse-3-3"
              aria-expanded="true"
              aria-controls="collapse-3-3"
            >
              若是我的耳機/喇叭壞了怎麼辦?
            </button>
          </h5>
        </div>
        <div
          id="collapse-3-3"
          class="collapse "
          aria-labelledby="heading-3-3"
          data-parent="#accordion-3"
        >
          <div class="card-body">
            <p><strong>Step 1.</strong></p>
            <p>Marshall 產品皆享有非人為損傷的一年免費維修保固，若您的產品尚於保固期限內，並同時留有由百滋國際股份有限公司印製的保固卡，請先至以下維修頁面登錄您的相關資料，送修完成後本公司將主動將維修品寄回，如需收費或有其他問題方會主動聯繫，若無法聯繫上的顧客，請務必於維修日起一個月內與我們聯繫確認寄回/處理方式，逾期未取者送修品視為拋棄，本公司恕不負保管責任。</p>
            <ul>
              <li>Marshall 喇叭維修登錄：<a
                  href="http://bit.ly/3be8f7u"
                  target="_blank"
                  rel="noopener"
                >http://bit.ly/3be8f7u</a></li>
              <li>Marshall 耳機維修登錄：<a
                  href="http://bit.ly/3qaUw5v"
                  target="_blank"
                  rel="noopener"
                >http://bit.ly/3qaUw5v</a><br><br></li>
            </ul>
            <p>若產品發生以下情形，本公司將酌收維修費用：</p>
            <ol>
              <li>使用方法錯誤造成故障或損壞。</li>
              <li>非經本公司同意拆修或改裝。</li>
              <li>未按最大承受功率使用、其他用途、意外事故、外觀損傷、受潮損毀...等人為外力所造成之傷害。</li>
              <li>因天災、蟲害等不可抗拒因素所造成之故障。</li>
              <li>無法出示保固卡以及經人為任意塗改者。</li>
              <li>無經銷商店章、購買發票及證明者。</li>
            </ol>
            <p>※若您沒有保固卡或是保固已過期，我們依然提供維修服務，不過將會有維修費用產生</p>
            <p><strong>Step 2.</strong></p>
            <p>填寫完成後請將維修商品以及中文保固卡（如在網路購買請連同購買證明一併印下來）<br>寄至地址：台北市信義區基隆路一段141號4樓之6 / 百滋國際 維修部收 02-3762-1118</p>
            <p>※喇叭最怕於運送過程中碰撞，請您將喇叭妥善的包裝好，建議使用喇叭出廠時的包裝彩盒和保麗龍固定，再放入一個更大的外箱之中，連同保卡和聯絡方式寄回本公司維修部即可。</p>
            <p><br>若需親送 營業時間為：</p>
            <ul>
              <li>周一、三、四、五 11:00-18:00</li>
              <li>周二為 11:00-16:00 <br>地址同為：台北市信義區基隆路一段141號4樓之6 / 百滋國際 維修部<br>（注意：國定假期不對外開放，且上述營業時間僅供參考，建議親送前先撥打 02-3762-1118 客服部，以免您白跑一趟）</li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "Tabpane3",
  methods: {
    $_cardhide() {
      let cardHeader = document.querySelectorAll(
        "#v-pills-c-3 .card>.card-header"
      );
      
      let cardContent = document.querySelectorAll(
        "#v-pills-c-3 .card>.collapse"
      );
      for (let i = 0; i < cardHeader.length; i++) {
        cardHeader[i].addEventListener("click", function () {
          document
            .querySelector("#v-pills-c-3 .card>.show")
            .classList.remove("show");
          cardContent[i].classList.add("show");
          
        });
      }
    },
  },
};
</script>

<style  lang="scss" scoped>
@import "~@/assets/helpers/_tabpane";
</style>
