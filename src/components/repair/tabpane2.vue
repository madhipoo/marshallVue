<template>
  <div
    class="tab-pane"
    id="v-pills-c-2"
    role="tabpanel"
    aria-labelledby="v-pills-tab-2"
  >
    <div id="accordion-2">
      <div class="card">
        <div
          class="card-header"
          id="heading-2-1" @click="$_cardhide()"
        >
          <h5 class="mb-0">
            <button
              class="btn btn-link"
              data-toggle="collapse"
              data-target="#collapse-2-1"
              aria-expanded="true"
              aria-controls="collapse-2-1"
            >
              若我沒有下載 Marshall Bluetooth App ，Mode II 仍可正常使用嗎？
            </button>
          </h5>
        </div>
        <div
          id="collapse-2-1"
          class="collapse show"
          aria-labelledby="heading-2-1"
          data-parent="#accordion-2"
        >
          <div class="card-body">
            <p>Marshall Bluetooth App 除了可讓您調整耳機的等化器，使音質更皆符合您的個人化需求外，亦可透過 App 為耳機進行不定期的韌體更新，因此我們建議您下載App並搭配您的耳機進行使用，以讓耳機隨時保持最新版本。</p>
          </div>
        </div>
      </div>
      <div class="card">
        <div
          class="card-header"
          id="heading-2-2" @click="$_cardhide()"
        >
          <h5 class="mb-0">
            <button
              class="btn btn-link"
              data-toggle="collapse"
              data-target="#collapse-2-2"
              aria-expanded="true"
              aria-controls="collapse-2-2"
            >
              如何確認我的 Mode II 是否充飽電？
            </button>
          </h5>
        </div>
        <div
          id="collapse-2-2"
          class="collapse "
          aria-labelledby="heading-2-2"
          data-parent="#accordion-2"
        >
          <div class="card-body">
            <p>當您將耳機放入充電盒時耳機將自動進行充電，<br>充電時耳機燈號會呈現白燈閃爍，充飽時會轉變為白燈恆亮，<br>在充電盒滿電的狀況下，耳機可使用充電盒重複充電四次。</p>
            <p>充電盒在充電時燈號會隨電量增長（0-100%）進行顏色變化，<br>燈號由沒電充飽至滿電的燈號狀態為：紅色 -&gt; 橙色 -&gt; 綠色。</p>
          </div>
        </div>
      </div>
      <div class="card">
        <div
          class="card-header"
          id="heading-2-3" @click="$_cardhide()"
        >
          <h5 class="mb-0">
            <button
              class="btn btn-link"
              data-toggle="collapse"
              data-target="#collapse-2-3"
              aria-expanded="true"
              aria-controls="collapse-2-3"
            >
              Mode II 該如何進行重置？
            </button>
          </h5>
        </div>
        <div
          id="collapse-2-3"
          class="collapse "
          aria-labelledby="heading-2-3"
          data-parent="#accordion-2"
        >
          <div class="card-body">
            <p>若您的耳機左右耳連接不同步，或您想將耳機還原原廠設定，<br>請根據以下指示完成耳機的重置步驟，再進行重新配對。</p>
            <p>1. 把耳機放入充電盒內<br>2. 長按黃銅配對按鈕達十秒見LED燈閃爍三次後再放開<br>3. 此時應已完成耳機重置步驟</p>
            <p>如問題仍然存在，請嘗試以下的還原原廠設定步驟。</p>
            <p>1. 把耳機放入充電盒內<br>2. 長按黃銅配對按鈕達十秒見LED燈閃爍十次後再放開<br>3. 此時耳機已恢復原廠設定</p>
            <p>注意：恢復原廠設定將刪除所有個人設定項目</p>
          </div>
        </div>
      </div>
      <div class="card">
        <div
          class="card-header"
          id="heading-2-4" @click="$_cardhide()"
        >
          <h5 class="mb-0">
            <button
              class="btn btn-link"
              data-toggle="collapse"
              data-target="#collapse-2-4"
              aria-expanded="true"
              aria-controls="collapse-2-4"
            >
              我購買的耳罩在使用一段時間後開始脫皮，請問可以維修嗎?
            </button>
          </h5>
        </div>
        <div
          id="collapse-2-4"
          class="collapse "
          aria-labelledby="heading-2-4"
          data-parent="#accordion-2"
        >
          <div class="card-body">
            <p>耳罩式使用質地良好的合成皮製成，在使用過一段時間後，因為接觸汗水、空氣中的濕氣等等，會氧化變質是正常的情況。由於耳罩屬於消耗品不在保固範圍內，Marshall 提供全新的備品可供購買，請來信或來電詢問。</p>
          </div>
        </div>
      </div>
      <div class="card">
        <div
          class="card-header"
          id="heading-2-5" @click="$_cardhide()"
        >
          <h5 class="mb-0">
            <button
              class="btn btn-link"
              data-toggle="collapse"
              data-target="#collapse-2-5"
              aria-expanded="true"
              aria-controls="collapse-2-5"
            >
              我剛買回去的MARSHALL耳罩式耳機戴起來很緊怎麼辦?
            </button>
          </h5>
        </div>
        <div
          id="collapse-2-5"
          class="collapse "
          aria-labelledby="heading-2-5"
          data-parent="#accordion-2"
        >
          <div class="card-body">
            <p>Marshall 耳罩式耳機的頭帶皆內含記憶型鐵片，若出廠的弧度過緊，晚上睡覺時可以將耳機套在一個比您的頭型稍大的物件上，將耳機撐開一段時間後，耳機會漸漸符合您的頭型。</p>
          </div>
        </div>
      </div>
      <div class="card">
        <div
          class="card-header"
          id="heading-2-6" @click="$_cardhide()"
        >
          <h5 class="mb-0">
            <button
              class="btn btn-link"
              data-toggle="collapse"
              data-target="#collapse-2-6"
              aria-expanded="true"
              aria-controls="collapse-2-6"
            >
              若是我的耳機壞了怎麼辦?
            </button>
          </h5>
        </div>
        <div
          id="collapse-2-6"
          class="collapse "
          aria-labelledby="heading-2-6"
          data-parent="#accordion-2"
        >
          <div class="card-body">
            <p><strong>Step 1.</strong></p>
            <p>Marshall 產品皆享有非人為損傷的一年免費維修保固，若您的產品尚於保固期限內，並同時留有由百滋國際股份有限公司印製的保固卡，請先至以下維修頁面登錄您的相關資料，送修完成後本公司將主動將維修品寄回，如需收費或有其他問題方會主動聯繫，若無法聯繫上的顧客，請務必於維修日起一個月內與我們聯繫確認寄回/處理方式，逾期未取者送修品視為拋棄，本公司恕不負保管責任。</p>
            <ul>
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
            <p>填寫完成後請將維修商品以及中文保固卡（如在網路購買請連同購買證明一併印下來）<br>寄至地址：台北市信義區基隆路一段141號4樓之6 / 百滋國際 維修部收 02-3762-1118<br>若需親送 營業時間為：</p>
            <ul>
              <li>周一、三、四、五 11:00-18:00</li>
              <li>周二為 11:00-16:00 <br>地址同為<span style="font-weight: 400;">台北市信義區基隆路一段141號4樓之6</span> 百滋國際 維修部<br>（以上營業時間僅供參考，建議親送前請先撥打&nbsp;<span style="font-weight: 400;">02-3762-1118&nbsp;</span>客服部，以免您白跑一趟）</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="card">
        <div
          class="card-header"
          id="heading-2-7" @click="$_cardhide()"
        >
          <h5 class="mb-0">
            <button
              class="btn btn-link"
              data-toggle="collapse"
              data-target="#collapse-2-7"
              aria-expanded="true"
              aria-controls="collapse-2-7"
            >
              為什麼我的耳機連接上藍牙後會有雜訊
            </button>
          </h5>
        </div>
        <div
          id="collapse-2-7"
          class="collapse "
          aria-labelledby="heading-2-7"
          data-parent="#accordion-2"
        >
          <div class="card-body">
            <p>請將藍牙裝置上的該耳機設備移除再重新連結查看情況是否改善。藍牙訊號在有干擾源的環境下可能會產生雜訊，常見干擾源包括微波爐、其他無線設備及部分外部電源等。</p>
          </div>
        </div>
      </div>
      <div class="card">
        <div
          class="card-header"
          id="heading-2-8" @click="$_cardhide()"
        >
          <h5 class="mb-0">
            <button
              class="btn btn-link"
              data-toggle="collapse"
              data-target="#collapse-2-8"
              aria-expanded="true"
              aria-controls="collapse-2-8"
            >
              我的裝置無法找到我的耳機藍牙？我無法連接我的耳機藍牙？
            </button>
          </h5>
        </div>
        <div
          id="collapse-2-8"
          class="collapse "
          aria-labelledby="heading-2-8"
          data-parent="#accordion-2"
        >
          <div class="card-body">
            <p>Marshall 系列耳機需要將燈號按至配對模式方可讓其他裝置搜尋，請在開機時長按開機鍵不放開直至藍燈閃爍時再嘗試配對您的藍牙。</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "Tabpane2",
  methods: {
    $_cardhide() {
      let cardHeader = document.querySelectorAll(
        "#v-pills-c-2 .card>.card-header"
      );
      
      let cardContent = document.querySelectorAll(
        "#v-pills-c-2 .card>.collapse"
      );
      for (let i = 0; i < cardHeader.length; i++) {
        cardHeader[i].addEventListener("click", function () {
          document
            .querySelector("#v-pills-c-2 .card>.show")
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
