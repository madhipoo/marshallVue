<template>
  <div
    class="tab-pane"
    id="v-pills-c-1"
    role="tabpanel"
    aria-labelledby="v-pills-tab-1"
  >
    <div id="accordion-1">
      <div class="card">
        <div
          class="card-header"
          id="heading-1-1" @click="$_cardhide()"
        >
          <h5 class="mb-0">
            <button
              class="btn btn-link"
              data-toggle="collapse"
              data-target="#collapse-1-1"
              aria-expanded="true"
              aria-controls="collapse-1-1"
            >
              如何重置Marshall家用式藍牙系列喇叭(二代)？
            </button>
          </h5>
        </div>
        <div
          id="collapse-1-1"
          class="collapse show"
          aria-labelledby="heading-1-1"
          data-parent="#accordion-1"
          style=""
        >
          <div class="card-body">
            <p>重置步驟：</p>
            <ol>
              <li>請先開啟曾與喇叭連接過的裝置（手機、筆電等）將喇叭取消連接並移除</li>
              <li>再開啟Marshall Bluetooth APP將喇叭裝置移除</li>
              <li>把手機藍牙功能關閉</li>
              <li>將喇叭開機後，請同時長按左邊的SOURCE鍵與右邊的播放暫停鍵10秒</li>
              <li>確認喇叭燈號熄滅並重新亮起，此時喇叭重置完畢</li>
            </ol>
            <p>接下來為重新與喇叭連接之步驟：</p>
            <ol start="6">
              <li>請長按 SOURCE 鍵直至喇叭藍牙燈號閃爍</li>
              <li>開啟裝置的藍牙設定功能，尋找您的喇叭型號名稱，並與之配對連接</li>
              <li>確認裝置與喇叭已連接成功</li>
              <li>開啟 Marshall Bluetooth APP</li>
              <li>讓 APP 搜尋喇叭，並與之進行連接</li>
              <li>在良好穩定的藍牙環境中，此時應可使用完整APP功能</li>
            </ol>
          </div>
        </div>
      </div>
      <div class="card">
        <div
          class="card-header"
          id="heading-1-2" @click="$_cardhide()"
        >
          <h5 class="mb-0">
            <button
              class="btn btn-link collapsed"
              data-toggle="collapse"
              data-target="#collapse-1-2"
              aria-expanded="false"
              aria-controls="collapse-1-2"
            >
              串聯兩台喇叭時，其中一台無法穩定播放
            </button>
          </h5>
        </div>
        <div
          id="collapse-1-2"
          class="collapse"
          aria-labelledby="heading-1-2"
          data-parent="#accordion-1"
          style=""
        >
          <div class="card-body">
            <p>請確認兩台喇叭放置於10公尺內的同一空間，並且中間沒有牆壁、房門阻隔。</p>
            <p>排除相關干擾源（其他藍牙裝置、Wi-Fi分享器、電腦、微波爐、冰箱、使用中的延長線等設備）後，再嘗試重新連接喇叭。</p>
            <p>如仍有異常的斷訊情況，請參考說明書內的重置教學，或使用客服專線 (02)3762-1118 向客服人員說明您的商品有異常問題，以便人員為您進行後續處理。</p>
          </div>
        </div>
      </div>
      <div class="card">
        <div
          class="card-header"
          id="heading-1-3" @click="$_cardhide()"
        >
          <h5 class="mb-0">
            <button
              class="btn btn-link"
              data-toggle="collapse"
              data-target="#collapse-1-3"
              aria-expanded="true"
              aria-controls="collapse-1-3"
            >
              我的藍牙喇叭偶爾會出現斷訊或中斷的狀況，為什麼？
            </button>
          </h5>
        </div>
        <div
          id="collapse-1-3"
          class="collapse "
          aria-labelledby="heading-1-3"
          data-parent="#accordion-1"
        >
          <div class="card-body">
            <p>環境中許多干擾源都將影響藍牙的穩定度，因此若您的環境中有Wi-Fi分享器、電腦、微波爐、冰箱、使用中的延長線等設備，則播放的過程中可能會因環境干擾源而導致訊號不佳，進而影響播放時的順暢度。</p>
            <p>請將喇叭儘可能放置於遠離上述干擾源或其他藍牙設備之位置，以避免無線電波干擾。</p>
            <p>請確認喇叭與連接裝置之間沒有牆壁或其他大型障礙物，請儘可能讓連接的裝置靠近喇叭，並將喇叭放在沒有遮蔽物的位置。</p>
          </div>
        </div>
      </div>
      <div class="card">
        <div
          class="card-header"
          id="heading-1-4" @click="$_cardhide()"
        >
          <h5 class="mb-0">
            <button
              class="btn btn-link"
              data-toggle="collapse"
              data-target="#collapse-1-4"
              aria-expanded="true"
              aria-controls="collapse-1-4"
            >
              如何使用兩台 Marshall 家用式藍牙系列喇叭(二代)進行串聯播放？
            </button>
          </h5>
        </div>
        <div
          id="collapse-1-4"
          class="collapse "
          aria-labelledby="heading-1-4"
          data-parent="#accordion-1"
        >
          <div class="card-body">
            <ol>
              <li>請將兩台喇叭都插上電源線，並先將其中一台喇叭開機（另一台保持關機）</li>
              <li>打開要與喇叭連接的裝置藍牙設定</li>
              <li>進入藍牙設定後開啟藍牙</li>
              <li>長按喇叭左邊的 SOURCE 鍵，使燈號位置保持在藍牙模式，此時燈號為閃爍狀態</li>
              <li>此時在裝置的藍牙搜尋中找到您的喇叭型號，請與之連接</li>
              <li>確認連接後，請打開您的音樂播放裝置確認連接成功可進行播放</li>
              <li>接著請打開您的 Marshall Bluetooth APP，找到您的喇叭並點擊連線</li>
              <li>確認連接成功後，請將另一台 Marshall 家用式藍牙系列喇叭開機</li>
              <li>此時 Marshall Bluetooth APP 列表中應會出現另一台喇叭</li>
              <li>請點選您已經連接上的喇叭右側選單，再點擊雙喇叭功能</li>
              <li>接著請選擇您要配對的兩台喇叭，後續步驟可選擇「左右立體音」或「環境音」模式</li>
              <li>完成設定後，開啟您的音樂播放器確認串聯成功</li>
            </ol>
            <p>※ 請 iOS 系統用戶先至 App Store 下載並安裝&nbsp;<span style="color: #0000ff;"><a
                  style="color: #0000ff;"
                  href="https://apps.apple.com/tw/app/marshall-bluetooth/id1351654161"
                  target="_blank"
                  rel="noopener"
                >Marshall Bluetooth</a></span><br>※
              Android 系統用戶則請至 Google Play 商店進行下載及安裝&nbsp;<span style="color: #0000ff;"><a
                  style="color: #0000ff;"
                  href="https://play.google.com/store/apps/details?id=com.zoundindustries.marshallbt&amp;hl=zh_TW&amp;gl=US"
                  target="_blank"
                  rel="noopener"
                >Marshall Bluetooth</a></span></p>
          </div>
        </div>
      </div>
      <div class="card">
        <div
          class="card-header"
          id="heading-1-5" @click="$_cardhide()"
        >
          <h5 class="mb-0">
            <button
              class="btn btn-link"
              data-toggle="collapse"
              data-target="#collapse-1-5"
              aria-expanded="true"
              aria-controls="collapse-1-5"
            >
              家用式藍牙系列喇叭(二代)，如何連接藍牙與APP？
            </button>
          </h5>
        </div>
        <div
          id="collapse-1-5"
          class="collapse "
          aria-labelledby="heading-1-5"
          data-parent="#accordion-1"
        >
          <div class="card-body">
            <ol>
              <li>請先將您的喇叭插上電源線，並開啟喇叭</li>
              <li>打開要與喇叭連接的裝置藍牙設定</li>
              <li>進入藍牙設定後開啟藍牙</li>
              <li>長按喇叭左邊的 SOURCE 鍵，使燈號位置保持在藍牙模式，此時燈號為閃爍狀態</li>
              <li>在裝置的藍牙搜尋中找到您的喇叭型號，請與之連接</li>
              <li>確認連接後，請打開您的音樂播放裝置確認連接成功可進行播放</li>
            </ol>
            <p>接下來為連接 Marshall Bluetooth APP 之步驟</p>
            <ol start="7">
              <li>打開您的 Marshall Bluetooth APP 找到您的喇叭並點擊連線</li>
            </ol>
            <p>（注意：初次連接請在穩定的網路環境下進行軟體更新，以避免連接失敗）</p>
            <ol start="8">
              <li>確認 APP 畫面出現「已連接」字樣，代表喇叭已與 APP 完成連接<br><br></li>
            </ol>
            <p>※ 請 iOS 系統用戶先至 App Store 下載並安裝&nbsp;<span style="color: #0000ff;"><a
                  style="color: #0000ff;"
                  href="https://apps.apple.com/tw/app/marshall-bluetooth/id1351654161"
                  target="_blank"
                  rel="noopener"
                >Marshall Bluetooth</a></span> <br>※ Android 系統用戶則請至 Google Play 商店進行下載及安裝 <span style="color: #0000ff;"><a
                  style="color: #0000ff;"
                  href="https://play.google.com/store/apps/details?id=com.zoundindustries.marshallbt&amp;hl=zh_TW&amp;gl=US"
                  target="_blank"
                  rel="noopener"
                >Marshall Bluetooth</a></span></p>
          </div>
        </div>
      </div>
      <div class="card">
        <div
          class="card-header"
          id="heading-1-6" @click="$_cardhide()"
        >
          <h5 class="mb-0">
            <button
              class="btn btn-link"
              data-toggle="collapse"
              data-target="#collapse-1-6"
              aria-expanded="true"
              aria-controls="collapse-1-6"
            >
              【智慧喇叭系列】Uxbridge Voice 常見問題
            </button>
          </h5>
        </div>
        <div
          id="collapse-1-6"
          class="collapse "
          aria-labelledby="heading-1-6"
          data-parent="#accordion-1"
        >
          <div class="card-body">
            <p><span style="background-color: #000000; color: #ffffff;"><strong>&nbsp;Q: Uxbridge Voice 如何使用 Google Home 應用程式進行設定?&nbsp;</strong></span></p>
            <p>A: 啟用步驟：<br> 1. 將 Uxbridge Voice 連接上電源<br> 2. 將手機或平板電腦連上 Wi-Fi 環境(需與喇叭使用的 Wi-Fi 相同)<br> 3. 從手機或平板電腦下載 Google Home 應用程式<br> 4. 打開 Google Home 應用程式並按指示進行設定</p>
            <p><span style="color: #0000ff;">* 如畫面未出現安裝步驟，請按畫面的左上方的「+ 號」，選取「設定裝置」，接著選取「設定新裝置」，並按照應用程式內的步驟完成設定</span></p>
            <p><span style="background-color: #000000; color: #ffffff;"><strong>&nbsp;Q: 為什麼 Uxbridge Voice 無法使用藍牙播放?&nbsp;</strong></span></p>
            <p>A: 請先下載 Google Home 並按指示進行設定；完成設定後，長按喇叭背面上的 BLUETOOTH 按鈕約2秒鐘，打開裝置的藍牙設定就能搜尋到喇叭。</p>
            <p><span style="background-color: #000000; color: #ffffff;"><strong>&nbsp;Q: 為什麼有時候 Uxbridge Voice 沒有收到語音指令或是聽錯語音指令? / 為什麼下達指令，Uxbridge Voice 沒有被喚醒?&nbsp;</strong></span></p>
            <p>A: 1. 請確定喇叭電源線已連接，並確實將麥克風鍵開啟。 2. 請試著靠近一點/提高音量，說「Ok Google」，若前方LED燈號亮起，表示喇叭接收到喚醒詞。</p>
            <p><span style="background-color: #000000; color: #ffffff;"><strong>&nbsp;Q: Uxbridge Voice 完成 Google Home 設定後，配對的裝置一定要連接同一個網域(Wi-Fi)才能透過語音助理操作喇叭嗎?&nbsp;</strong></span></p>
            <p>A: 是的，一定要是同一個網域才可以。</p>
            <p><span style="background-color: #000000; color: #ffffff;"><strong>&nbsp;Q: 打開 Google Home 應用程式後搜尋不到 Uxbridge Voice?&nbsp;</strong></span></p>
            <p>A: 1. 請先將 Uxbridge Voice 進行原廠重置(步驟如下) 2. 重新啟動 Google Home 應用程式</p>
            <p><span style="background-color: #000000; color: #ffffff;"><strong>&nbsp;Q: 如何讓 Uxbridge Voice 進行原廠重置?&nbsp;</strong></span></p>
            <p>A:&nbsp;</p>
            <p>1. 請將先前已配對過 Uxbridge Voice 的藍牙裝置(手機、平板或電腦)進行移除/忘記裝置</p>
            <p>2. 長按「Volume + 號鍵」與「Treble – 號鍵」，直到LED燈全亮後完全熄滅</p>
            <p>3.&nbsp;請將主電源移除，並讓喇叭靜置15秒後再將電源線重新插上</p>
            <p>4. 等待喇叭燈號重新亮起，即表示完成重置</p>
            <p>5. 將喇叭重新配對</p>
            <p>&nbsp;</p>
            <p>※ 如有上述未提及問題，請聯繫官方客服，將由專員聯繫您瞭解狀況。</p>
            <p>客服信箱：<a
                href="mailto:info@pezcrown.com.tw"
                style="color: #000;"
              >info@pezcrown.com.tw</a></p>
          </div>
        </div>
      </div>
      <div class="card">
        <div
          class="card-header"
          id="heading-1-7"
        >
          <h5 class="mb-0">
            <button
              class="btn btn-link"
              data-toggle="collapse"
              data-target="#collapse-1-7"
              aria-expanded="true"
              aria-controls="collapse-1-7"
            >
              【智慧喇叭系列】Stanmore II Voice 常見問題
            </button>
          </h5>
        </div>
        <div
          id="collapse-1-7"
          class="collapse "
          aria-labelledby="heading-1-7"
          data-parent="#accordion-1"
        >
          <div class="card-body">
            <p><span style="background-color: #000000; color: #ffffff;"><strong>&nbsp;Q: Stanmore II Voice 如何使用 Google Home 應用程式進行設定?&nbsp;</strong></span></p>
            <p>A: 啟用步驟：<br> 1. 將 Stanmore II Voice 連接上電源<br> 2. 將手機或平板電腦連上 Wi-Fi 環境(需與喇叭使用的 Wi-Fi 相同)<br> 3. 從手機或平板電腦下載 Google Home 應用程式<br> 4. 打開 Google Home 應用程式並按指示進行設定</p>
            <p><span style="color: #0000ff;">* 如畫面未出現安裝步驟，請按畫面的左上方的「+ 號」，選取「設定裝置」，接著選取「設定新裝置」，並按照應用程式內的步驟完成設定</span></p>
            <p><span style="background-color: #000000; color: #ffffff;"><strong>&nbsp;Q: 為什麼 Stanmore II Voice 無法使用藍牙播放?&nbsp;</strong></span></p>
            <p>A: 請先下載 Google Home 並按指示進行設定；完成設定後，將喇叭面板上的 SOURCE 鈕切換至 BLUETOOTH (藍牙模式)，方能打開裝置藍牙設定進行連接。</p>
            <p><span style="background-color: #000000; color: #ffffff;"><strong>&nbsp;Q: 為什麼有時候 Stanmore II Voice 沒有收到語音指令或是聽錯語音指令? / 為什麼下達指令，Stanmore II Voice&nbsp;沒有被喚醒?&nbsp;</strong></span></p>
            <p>A: 1. 請確定喇叭電源線已連接，並確實將麥克風鍵開啟。 2. 請試著靠近一點/提高音量，說「Ok Google」，若前方LED燈號亮起，表示喇叭接收到喚醒詞。</p>
            <p><span style="background-color: #000000; color: #ffffff;"><strong>&nbsp;Q: Stanmore II Voice 完成 Google Home 設定後，配對的裝置一定要連接同一個網域(Wi-Fi)才能透過語音助理操作喇叭嗎?&nbsp;</strong></span></p>
            <p>A: 是的，一定要是同一個網域才可以。</p>
            <p><span style="background-color: #000000; color: #ffffff;"><strong>&nbsp;Q: 打開 Google Home 應用程式後搜尋不到 Stanmore II Voice?&nbsp;</strong></span></p>
            <p>A: 1. 請先將 Stanmore II Voice 進行原廠重置(步驟如下) 2. 重新啟動 Google Home 應用程式</p>
            <p><span style="background-color: #000000; color: #ffffff;"><strong>&nbsp;Q: 如何讓 Stanmore II Voice 進行原廠重置?&nbsp;</strong></span></p>
            <p>A:&nbsp;</p>
            <p>1. 請將先前已配對過 Stanmore II Voice 的藍牙裝置(手機、平板或電腦)進行移除/忘記裝置</p>
            <p>2. 長按 SOURCE 鍵與播放暫停鍵(⏯)，直到LED燈號快速閃爍，且燈號完全熄滅</p>
            <p>3. 等待喇叭燈號重新亮起，即表示完成重置</p>
            <p>4. 將喇叭重新配對</p>
            <p>&nbsp;</p>
            <p>※ 如有上述未提及問題，請聯繫官方客服，將由專員聯繫您瞭解狀況。</p>
            <p>客服信箱：<a
                href="mailto:info@pezcrown.com.tw"
                style="color: #000;"
              >info@pezcrown.com.tw</a></p>
          </div>
        </div>
      </div>
      <div class="card">
        <div
          class="card-header"
          id="heading-1-8" @click="$_cardhide()"
        >
          <h5 class="mb-0">
            <button
              class="btn btn-link"
              data-toggle="collapse"
              data-target="#collapse-1-8"
              aria-expanded="true"
              aria-controls="collapse-1-8"
            >
              該如何保養我的喇叭
            </button>
          </h5>
        </div>
        <div
          id="collapse-1-8"
          class="collapse "
          aria-labelledby="heading-1-8"
          data-parent="#accordion-1"
        >
          <div class="card-body">
            <p>Marshall 喇叭的皮革部分為人工環保材質皮革，因此在保養上要注意的是盡量不要將喇叭放置於潮濕處，並且可以使用乾布擦拭皮革，而面板的部分則可以用微濕乾淨的纖維布將髒污輕輕擦拭掉，再用乾布將些微水份擦乾。</p>
          </div>
        </div>
      </div>
      <div class="card">
        <div
          class="card-header"
          id="heading-1-9" @click="$_cardhide()"
        >
          <h5 class="mb-0">
            <button
              class="btn btn-link"
              data-toggle="collapse"
              data-target="#collapse-1-9"
              aria-expanded="true"
              aria-controls="collapse-1-9"
            >
              喇叭機身背後標示的省電模式(power saver)是什麼意思?
            </button>
          </h5>
        </div>
        <div
          id="collapse-1-9"
          class="collapse "
          aria-labelledby="heading-1-9"
          data-parent="#accordion-1"
        >
          <div class="card-body">
            <p>若您將開關扳至省電模式(power saver)代表當喇叭持續搜尋藍牙訊號超過20分鐘依然沒有配對成功，喇叭會自動進入休眠，需按下面板上的喚醒鍵(WAKE)；若是設定在標準模式(Standard)，喇叭則會持續搜尋藍牙訊號。</p>
          </div>
        </div>
      </div>
      <div class="card">
        <div
          class="card-header"
          id="heading-1-10" @click="$_cardhide()"
        >
          <h5 class="mb-0">
            <button
              class="btn btn-link"
              data-toggle="collapse"
              data-target="#collapse-1-10"
              aria-expanded="true"
              aria-controls="collapse-1-10"
            >
              Marshall Multi-room system無線多空間串流系統喇叭如何使用以及如何設定各功能
            </button>
          </h5>
        </div>
        <div
          id="collapse-1-10"
          class="collapse "
          aria-labelledby="heading-1-10"
          data-parent="#accordion-1"
        >
          <div class="card-body">
            <p>以下連結為WOBURN Multi-room system、STANMORE Multi-room system以及ACTON Multi-room system三款操作說明書，檔案裡面有詳盡的解答，要認真看完喔～<br><a
                href="https://goo.gl/HWyMTS"
                target="_blank"
                rel="noopener"
                style="color: #000;"
              > https://goo.gl/HWyMTS</a></p>
          </div>
        </div>
      </div>
      <div class="card">
        <div
          class="card-header"
          id="heading-1-11" @click="$_cardhide()"
        >
          <h5 class="mb-0">
            <button
              class="btn btn-link"
              data-toggle="collapse"
              data-target="#collapse-1-11"
              aria-expanded="true"
              aria-controls="collapse-1-11"
            >
              所有的MARSHALL喇叭都可以充電嗎? 都可以用藍牙連接嗎?
            </button>
          </h5>
        </div>
        <div
          id="collapse-1-11"
          class="collapse "
          aria-labelledby="heading-1-11"
          data-parent="#accordion-1"
        >
          <div class="card-body">
            <p>目前只有 KILBURN II 和 STOCKWELL II 屬於充電型喇叭，WOBURN II / STANMORE II / ACTON II 都是需要插電的，以上這五台都可以用藍牙連接；且WOBURN II / STANMORE II / KILBURN II / STOCKWELL II 支援aptX藍牙無線無損傳輸。</p>
          </div>
        </div>
      </div>
      <div class="card">
        <div
          class="card-header"
          id="heading-1-12" @click="$_cardhide()"
        >
          <h5 class="mb-0">
            <button
              class="btn btn-link"
              data-toggle="collapse"
              data-target="#collapse-1-12"
              aria-expanded="true"
              aria-controls="collapse-1-12"
            >
              MARSHALL喇叭適用多少的電壓，若我想帶著它出國是否需要準備變壓器?
            </button>
          </h5>
        </div>
        <div
          id="collapse-1-12"
          class="collapse "
          aria-labelledby="heading-1-12"
          data-parent="#accordion-1"
        >
          <div class="card-body">
            <p>除了HANWELL以外，WOBURN II、STANMORE II、ACTON II、KILBURN II、STOCKWELL II 等 Marshall 喇叭皆採用國際電壓，適用於100-240V的國家，只要您前往的國家於此電壓範圍內，就不需要再另外連接變壓器，只需準備相應的插頭即可。</p>
          </div>
        </div>
      </div>
      <div class="card">
        <div
          class="card-header"
          id="heading-1-13" @click="$_cardhide()"
        >
          <h5 class="mb-0">
            <button
              class="btn btn-link"
              data-toggle="collapse"
              data-target="#collapse-1-13"
              aria-expanded="true"
              aria-controls="collapse-1-13"
            >
              若是我的喇叭壞了怎麼辦 ?
            </button>
          </h5>
        </div>
        <div
          id="collapse-1-13"
          class="collapse "
          aria-labelledby="heading-1-13"
          data-parent="#accordion-1"
        >
          <div class="card-body">
            <p><strong>Step 1.</strong></p>
            <p>Marshall 產品皆享有非人為損傷的一年免費維修保固，若您的產品尚於保固期限內，並同時留有由百滋國際股份有限公司印製的保固卡，請先至以下維修頁面登錄您的相關資料，送修完成後本公司將主動將維修品寄回，如需收費或有其他問題方會主動聯繫，若無法聯繫上的顧客，請務必於維修日起一個月內與我們聯繫確認寄回/處理方式，逾期未取者送修品視為拋棄，本公司恕不負保管責任。</p>
            <ul>
              <li>Marshall 喇叭維修登錄：<a
                  href="http://bit.ly/3be8f7u"
                  target="_blank"
                  rel="noopener"
                  style="color: #000;"
                >http://bit.ly/3be8f7u</a><br><br></li>
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
              <li>周二為 11:00-16:00 <br>地址同為台北市信義區基隆路一段141號4樓之6 百滋國際 維修部<br>（以上營業時間僅供參考，建議親送前先撥打 02-3762-1118 客服部，以免您白跑一趟）</li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  </div>

</template>

<script>
export default {
  name: "Tabpane1",
  methods: {
    $_cardhide() {
      let cardHeader = document.querySelectorAll(
        "#v-pills-c-1 .card>.card-header"
      );
      
      let cardContent = document.querySelectorAll(
        "#v-pills-c-1 .card>.collapse"
      );
      for (let i = 0; i < cardHeader.length; i++) {
        cardHeader[i].addEventListener("click", function () {
          document
            .querySelector("#v-pills-c-1 .card>.show")
            .classList.remove("show");
          cardContent[i].classList.add("show");
          
        });
      }
    },
  },
  
};
</script>

<style  lang="scss">
@import "~@/assets/helpers/_tabpane";
</style>
